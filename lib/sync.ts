"use client";

import {
  cacheLearners,
  cacheProgress,
  cacheQuestions,
  getActiveLearner,
  getLearners,
  setActiveLearner,
  setSessionPhone,
  type Learner,
  type Progress,
  type Question,
} from "@/lib/store";
import {
  emailToPhone,
  phoneToEmail,
  supabase,
} from "@/lib/supabase";

export type AuthResult = { ok: boolean; error?: string };

function authError(message: string): string {
  const text = message.toLowerCase();
  if (text.includes("invalid login credentials")) {
    return "That phone number or password does not match. Please try again.";
  }
  if (text.includes("email not confirmed")) {
    return "This account is not confirmed. Add SUPABASE_SERVICE_ROLE_KEY so sign-up can confirm it automatically.";
  }
  if (text.includes("already registered")) {
    return "This number already has an account. Please sign in instead.";
  }
  if (text.includes("password")) {
    return "Please choose a stronger password of 6 letters or more.";
  }
  return "We could not sign you in just now. Please try again.";
}

export async function signUpRemote(
  phone: string,
  password: string,
): Promise<AuthResult> {
  if (!supabase) {
    return { ok: false, error: "The Supabase backend is not configured." };
  }

  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, password }),
    });

    // 501 means no service-role key was provided. Fall back to the normal
    // client sign-up, which works when email confirmation is switched off.
    if (response.status === 501) {
      const { data, error } = await supabase.auth.signUp({
        email: phoneToEmail(phone),
        password,
        options: { data: { phone } },
      });
      if (error) return { ok: false, error: authError(error.message) };
      if (!data.session) return signInRemote(phone, password);
      setSessionPhone(phone);
      return { ok: true };
    }

    if (!response.ok) {
      const body = (await response.json().catch(() => ({}))) as {
        error?: string;
      };
      return {
        ok: false,
        error: body.error ?? "We could not create the account just now.",
      };
    }

    return signInRemote(phone, password);
  } catch {
    return {
      ok: false,
      error: "Could not reach the server. Please check your connection.",
    };
  }
}

export async function signInRemote(
  phone: string,
  password: string,
): Promise<AuthResult> {
  if (!supabase) {
    return { ok: false, error: "The Supabase backend is not configured." };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: phoneToEmail(phone),
    password,
  });

  if (error) return { ok: false, error: authError(error.message) };
  if (!data.session) {
    return { ok: false, error: "That sign-in did not complete. Please try again." };
  }

  setSessionPhone(phone);
  return { ok: true };
}

export async function signOutRemote() {
  if (!supabase) return;
  await supabase.auth.signOut();
}

async function currentUserId() {
  if (!supabase) return "";
  const { data } = await supabase.auth.getSession();
  return data.session?.user.id ?? "";
}

/**
 * Pull this account's family data from Supabase into the local cache.
 * Returns the signed-in phone number, or "" when there is no session.
 */
export async function syncFromRemote(): Promise<string> {
  if (!supabase) return "";

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session?.user) return "";

  const userId = session.user.id;
  const phone =
    (session.user.user_metadata?.phone as string | undefined) ||
    emailToPhone(session.user.email);
  if (!phone) return "";

  const { data: learnerRows, error: learnersError } = await supabase
    .from("learners")
    .select("id,name,created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });

  if (learnersError) {
    console.warn("GentleLearn sync (learners):", learnersError.message);
  } else {
    const learners: Learner[] = (learnerRows ?? []).map((row) => ({
      id: row.id as string,
      name: row.name as string,
      createdAt: row.created_at as string,
    }));

    cacheLearners(phone, learners);

    const progressByLearner: Record<string, Progress> = {};
    for (const learner of learners) progressByLearner[learner.id] = {};

    if (learners.length > 0) {
      const { data: progressRows, error: progressError } = await supabase
        .from("progress")
        .select("learner_id,lesson_slug,completed_at")
        .in(
          "learner_id",
          learners.map((learner) => learner.id),
        );

      if (progressError) {
        console.warn("GentleLearn sync (progress):", progressError.message);
      } else {
        for (const row of progressRows ?? []) {
          const list = progressByLearner[row.learner_id as string];
          if (list) list[row.lesson_slug as string] = row.completed_at as string;
        }
      }
    }

    for (const learner of learners) {
      cacheProgress(phone, learner.id, progressByLearner[learner.id] ?? {});
    }
  }

  const { data: questionRows, error: questionsError } = await supabase
    .from("questions")
    .select("id,learner_id,learner_name,text,created_at")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });

  if (questionsError) {
    console.warn("GentleLearn sync (questions):", questionsError.message);
  } else {
    const questions: Question[] = (questionRows ?? []).map((row) => ({
      id: row.id as string,
      learnerId: row.learner_id as string,
      learnerName: row.learner_name as string,
      text: row.text as string,
      createdAt: row.created_at as string,
    }));
    cacheQuestions(phone, questions);
  }

  setSessionPhone(phone);
  if (!getActiveLearner(phone) && getLearners(phone)[0]) {
    setActiveLearner(phone, getLearners(phone)[0].id);
  }

  return phone;
}

export async function pushLearner(learner: Learner) {
  if (!supabase) return;
  const userId = await currentUserId();
  if (!userId) return;

  const { error } = await supabase.from("learners").insert({
    id: learner.id,
    user_id: userId,
    name: learner.name,
    created_at: learner.createdAt,
  });
  if (error) console.warn("GentleLearn sync (add learner):", error.message);
}

export async function pushLearnerName(id: string, name: string) {
  if (!supabase) return;
  const { error } = await supabase
    .from("learners")
    .update({ name })
    .eq("id", id);
  if (error) console.warn("GentleLearn sync (rename learner):", error.message);
}

export async function pushLearnerRemove(id: string) {
  if (!supabase) return;
  const { error } = await supabase.from("learners").delete().eq("id", id);
  if (error) console.warn("GentleLearn sync (remove learner):", error.message);
}

export async function pushLessonDone(
  learnerId: string,
  slug: string,
  completedAt: string,
) {
  if (!supabase) return;
  const userId = await currentUserId();
  if (!userId) return;

  const { error } = await supabase.from("progress").upsert(
    {
      learner_id: learnerId,
      user_id: userId,
      lesson_slug: slug,
      completed_at: completedAt,
    },
    { onConflict: "learner_id,lesson_slug" },
  );
  if (error) console.warn("GentleLearn sync (progress):", error.message);
}

export async function pushQuestion(question: Question) {
  if (!supabase) return;
  const userId = await currentUserId();
  if (!userId) return;

  const { error } = await supabase.from("questions").insert({
    id: question.id,
    user_id: userId,
    learner_id: question.learnerId,
    learner_name: question.learnerName,
    text: question.text,
    created_at: question.createdAt,
  });
  if (error) console.warn("GentleLearn sync (question):", error.message);
}
