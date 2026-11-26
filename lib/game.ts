"use client";

export type BadgeId =
  | "first-step"
  | "five-lessons"
  | "halfway"
  | "safety-star"
  | "quiz-champion"
  | "three-day-streak";

export type Badge = {
  id: BadgeId;
  emoji: string;
  /** English label; the screens translate it with t(). */
  label: string;
};

export const badges: Badge[] = [
  { id: "first-step", emoji: "🌱", label: "First step" },
  { id: "five-lessons", emoji: "⭐", label: "Five lessons" },
  { id: "halfway", emoji: "🧭", label: "Halfway there" },
  { id: "safety-star", emoji: "🛡️", label: "Safety star" },
  { id: "quiz-champion", emoji: "🏆", label: "Quiz champion" },
  { id: "three-day-streak", emoji: "🔥", label: "Three-day streak" },
];

export const badgeById = (id: string) => badges.find((badge) => badge.id === id);

export type Game = {
  stars: number;
  streak: number;
  bestStreak: number;
  lastDay: string;
  badges: BadgeId[];
  quizBest: number;
};

const emptyGame: Game = {
  stars: 0,
  streak: 0,
  bestStreak: 0,
  lastDay: "",
  badges: [],
  quizBest: 0,
};

const key = (phone: string, learnerId: string) =>
  `gentlelearn.account.${phone}.game.${learnerId}`;

function read(phone: string, learnerId: string): Game {
  if (typeof window === "undefined") return emptyGame;
  try {
    const raw = window.localStorage.getItem(key(phone, learnerId));
    if (!raw) return emptyGame;
    return { ...emptyGame, ...(JSON.parse(raw) as Partial<Game>) };
  } catch {
    return emptyGame;
  }
}

function write(phone: string, learnerId: string, game: Game) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key(phone, learnerId), JSON.stringify(game));
  window.dispatchEvent(new CustomEvent("gentlelearn:changed"));
}

export function getGame(phone: string, learnerId: string): Game {
  return read(phone, learnerId);
}

const dayOf = (date = new Date()) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;

function yesterdayOf(today: string) {
  const date = new Date(`${today}T12:00:00`);
  date.setDate(date.getDate() - 1);
  return dayOf(date);
}

export type Award = {
  game: Game;
  starsGained: number;
  newBadges: Badge[];
};

/**
 * Called when a lesson is finished. Lessons are worth 10 stars the first time
 * and 2 stars when repeated, so coming back is still rewarding but honest.
 */
export function awardLesson(input: {
  phone: string;
  learnerId: string;
  repeat: boolean;
  lessonsDone: number;
  totalLessons: number;
  quiz?: { correct: number; total: number };
}): Award {
  const now = read(input.phone, input.learnerId);
  const today = dayOf();

  let streak = now.streak;
  if (now.lastDay !== today) {
    streak = now.lastDay === yesterdayOf(today) ? now.streak + 1 : 1;
  }
  if (streak < 1) streak = 1;

  let starsGained = input.repeat ? 2 : 10;
  if (input.quiz) {
    starsGained = 5 * input.quiz.correct;
    if (input.quiz.total > 0 && input.quiz.correct === input.quiz.total) {
      starsGained += 15;
    }
  }

  const nextBadges = new Set<BadgeId>(now.badges);
  if (input.lessonsDone >= 1) nextBadges.add("first-step");
  if (input.lessonsDone >= 5) nextBadges.add("five-lessons");
  if (input.totalLessons > 0 && input.lessonsDone >= Math.ceil(input.totalLessons / 2)) {
    nextBadges.add("halfway");
  }
  if (input.totalLessons > 0 && input.lessonsDone >= input.totalLessons) {
    nextBadges.add("safety-star");
  }
  if (input.quiz) nextBadges.add("quiz-champion");
  if (streak >= 3) nextBadges.add("three-day-streak");

  const newBadges = badges.filter(
    (badge) => nextBadges.has(badge.id) && !now.badges.includes(badge.id),
  );

  const game: Game = {
    stars: now.stars + starsGained,
    streak,
    bestStreak: Math.max(now.bestStreak, streak),
    lastDay: today,
    badges: [...nextBadges],
    quizBest: Math.max(
      now.quizBest,
      input.quiz ? Math.round((input.quiz.correct / Math.max(1, input.quiz.total)) * 100) : 0,
    ),
  };

  write(input.phone, input.learnerId, game);
  return { game, starsGained, newBadges };
}
