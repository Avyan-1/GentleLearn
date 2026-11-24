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
  signOut: () => void;
  addLearner: (name: string) => void;
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
    return () => {
      window.removeEventListener("gentlelearn:changed", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, [refresh]);

  const value = useMemo<AppContextValue>(
    () => ({
      ...state,
      signUp: async (phone, password) => {
        const result = await createAccount(phone, password);
        refresh();
        return result;
      },
      signIn: async (phone, password) => {
        const result = await signInToStore(phone, password);
        refresh();
        return result;
      },
      signOut: () => {
        signOutFromStore();
        refresh();
      },
      addLearner: (name) => {
        if (!state.phone) return;
        addLearnerToStore(state.phone, name);
        refresh();
      },
      renameLearner: (id, name) => {
        if (!state.phone) return;
        renameLearnerInStore(state.phone, id, name);
        refresh();
      },
      removeLearner: (id) => {
        if (!state.phone) return;
        removeLearnerFromStore(state.phone, id);
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
        refresh();
      },
      askQuestion: (text) => {
        if (!state.phone || !state.activeLearner) return;
        addQuestionToStore(
          state.phone,
          state.activeLearner.id,
          state.activeLearner.name,
          text,
        );
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
