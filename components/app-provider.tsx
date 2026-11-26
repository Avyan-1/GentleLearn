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
  addStory as addStoryToStore,
  createAccount,
  getActiveLearner,
  getLanguage,
  getLearners,
  getProgress,
  getQuestions,
  getSessionPhone,
  getStories,
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
  type Story,
} from "@/lib/store";
import { awardLesson, getGame, type Award, type Game } from "@/lib/game";
import { freeLessons } from "@/lib/lessons";
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
  game: Game;
  stories: Story[];
};

type AppContextValue = AppState & {
  signUp: (phone: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signIn: (phone: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signOut: () => Promise<void>;
  addLearner: (name: string) => Learner | null;
  renameLearner: (id: string, name: string) => void;
  removeLearner: (id: string) => void;
  selectLearner: (id: string) => void;
  completeLesson: (
    slug: string,
    quiz?: { correct: number; total: number },
  ) => Award | null;
  askQuestion: (text: string) => void;
  shareStory: (name: string, text: string) => Story | null;
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
  game: getGame("", ""),
  stories: [],
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
      game:
        phone && activeLearnerId
          ? getGame(phone, activeLearnerId)
          : getGame("", ""),
      stories: getStories(),
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
      completeLesson: (slug, quiz) => {
        if (!state.phone || !state.activeLearnerId) return null;
        const before = Boolean(
          getProgress(state.phone, state.activeLearnerId)[slug],
        );
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
        const lessonsDone = Object.keys(
          getProgress(state.phone, state.activeLearnerId),
        ).length;
        const award = awardLesson({
          phone: state.phone,
          learnerId: state.activeLearnerId,
          repeat: before,
          lessonsDone,
          totalLessons: freeLessons.length,
          quiz,
        });
        refresh();
        return award;
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
      shareStory: (name, text) => {
        const story = addStoryToStore(name, text);
        refresh();
        return story;
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
