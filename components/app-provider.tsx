"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  addLearner as addLearnerToStore,
  addQuestion as addQuestionToStore,
  createAccount,
  getActiveLearner,
  getLanguage,
  getLearners,
  getProgress,
  getQuestions,
  getSessionPhone,
  markLessonDone,
  removeLearner as removeLearnerFromStore,
  renameLearner as renameLearnerInStore,
  setActiveLearner,
  setLanguage as setLanguageInStore,
  signIn as signInToStore,
  signOut as signOutFromStore,
  type Learner,
  type Progress,
  type Question,
} from "@/lib/store";
import {
  pushLearner,
  pushLearnerName,
  pushLearnerRemove,
  pushLessonDone,
  pushQuestion,
  signInRemote,
  signOutRemote,
  signUpRemote,
  syncFromRemote,
} from "@/lib/sync";
import { isSupabaseConfigured } from "@/lib/supabase";

type AppState = {
  ready: boolean;
  phone: string;
  learners: Learner[];
  activeLearnerId: string;
  activeLearner: Learner | null;
  progress: Progress;
  questions: Question[];
  language: string;
};

type AppContextValue = AppState & {
  signUp: (phone: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signIn: (phone: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signOut: () => Promise<void>;
  addLearner: (name: string) => Learner | null;
  renameLearner: (id: string, name: string) => void;
  removeLearner: (id: string) => void;
  selectLearner: (id: string) => void;
  completeLesson: (slug: string) => void;
  askQuestion: (text: string) => void;
  chooseLanguage: (code: string) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

const emptyState: AppState = {
  ready: false,
  phone: "",
  learners: [],
  activeLearnerId: "",
  activeLearner: null,
  progress: {},
  questions: [],
  language: "",
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(emptyState);

  const refresh = useCallback(() => {
    const phone = getSessionPhone();
    const learners = phone ? getLearners(phone) : [];
    const activeLearnerId = phone ? getActiveLearner(phone) : "";
    const activeLearner =
      learners.find((learner) => learner.id === activeLearnerId) ?? null;

    setState({
      ready: true,
      phone,
      learners,
      activeLearnerId,
      activeLearner,
      progress:
        phone && activeLearnerId ? getProgress(phone, activeLearnerId) : {},
      questions: phone ? getQuestions(phone) : [],
      language: getLanguage(),
    });
  }, []);

  useEffect(() => {
    refresh();

    const onChange = () => refresh();
    window.addEventListener("gentlelearn:changed", onChange);
    window.addEventListener("storage", onChange);

    let cancelled = false;
    if (isSupabaseConfigured) {
      syncFromRemote()
        .then((phone) => {
          if (!cancelled && phone) refresh();
        })
        .catch((error) => {
          console.warn("GentleLearn sync failed:", error);
        });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("gentlelearn:changed", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, [refresh]);

  const value = useMemo<AppContextValue>(
    () => ({
      ...state,
      signUp: async (phone, password) => {
        const result = isSupabaseConfigured
          ? await signUpRemote(phone, password)
          : await createAccount(phone, password);
        if (result.ok && isSupabaseConfigured) {
          await syncFromRemote();
        }
        refresh();
        return result;
      },
      signIn: async (phone, password) => {
        const result = isSupabaseConfigured
          ? await signInRemote(phone, password)
          : await signInToStore(phone, password);
        if (result.ok && isSupabaseConfigured) {
          await syncFromRemote();
        }
        refresh();
        return result;
      },
      signOut: async () => {
        if (isSupabaseConfigured) {
          try {
            await signOutRemote();
          } catch {
            // The local session is still cleared below.
          }
        }
        signOutFromStore();
        refresh();
      },
      addLearner: (name) => {
        if (!state.phone) return null;
        const before = getLearners(state.phone).length;
        const list = addLearnerToStore(state.phone, name);
        const added =
          list.length > before ? (list[list.length - 1] ?? null) : null;
        if (added && isSupabaseConfigured) void pushLearner(added);
        refresh();
        return added;
      },
      renameLearner: (id, name) => {
        if (!state.phone) return;
        renameLearnerInStore(state.phone, id, name);
        if (isSupabaseConfigured) void pushLearnerName(id, name.trim());
        refresh();
      },
      removeLearner: (id) => {
        if (!state.phone) return;
        removeLearnerFromStore(state.phone, id);
        if (isSupabaseConfigured) void pushLearnerRemove(id);
        refresh();
      },
      selectLearner: (id) => {
        if (!state.phone) return;
        setActiveLearner(state.phone, id);
        refresh();
      },
      completeLesson: (slug) => {
        if (!state.phone || !state.activeLearnerId) return;
        markLessonDone(state.phone, state.activeLearnerId, slug);
        if (isSupabaseConfigured) {
          const completedAt = getProgress(
            state.phone,
            state.activeLearnerId,
          )[slug];
          if (completedAt) {
            void pushLessonDone(state.activeLearnerId, slug, completedAt);
          }
        }
        refresh();
      },
      askQuestion: (text) => {
        if (!state.phone || !state.activeLearner) return;
        const questions = addQuestionToStore(
          state.phone,
          state.activeLearner.id,
          state.activeLearner.name,
          text,
        );
        const added = questions[questions.length - 1];
        if (added && isSupabaseConfigured) void pushQuestion(added);
        refresh();
      },
      chooseLanguage: (code) => {
        setLanguageInStore(code);
        refresh();
      },
    }),
    [state, refresh],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used inside AppProvider");
  }
  return context;
}
