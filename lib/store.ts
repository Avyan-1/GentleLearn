"use client";

export type Account = {
  phone: string;
  salt: string;
  hash: string;
  createdAt: string;
};

export type Learner = {
  id: string;
  name: string;
  createdAt: string;
};

export type Question = {
  id: string;
  learnerId: string;
  learnerName: string;
  text: string;
  createdAt: string;
};

export type Progress = Record<string, string>;

const keys = {
  session: "gentlelearn.sessionPhone",
  accounts: "gentlelearn.accounts",
  language: "gentlelearn.language",
  stories: "gentlelearn.stories",
  storyHelped: "gentlelearn.storyHelped",
  learners: (phone: string) => `gentlelearn.account.${phone}.learners`,
  progress: (phone: string, learnerId: string) =>
    `gentlelearn.account.${phone}.progress.${learnerId}`,
  questions: (phone: string) => `gentlelearn.account.${phone}.questions`,
  activeLearner: (phone: string) =>
    `gentlelearn.account.${phone}.activeLearner`,
};

const canUseStorage = () => typeof window !== "undefined";

function read<T>(key: string, fallback: T): T {
  if (!canUseStorage()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write(key: string, value: unknown) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent("gentlelearn:changed"));
}

export const isValidPhone = (phone: string) => /^[6-9]\d{9}$/.test(phone);

export const formatPhone = (phone: string) =>
  phone.replace(/(\d{5})(\d{5})/, "$1 $2");

const toBase64 = (bytes: Uint8Array) =>
  btoa(String.fromCharCode(...bytes));

const fromBase64 = (value: string) =>
  Uint8Array.from(atob(value), (char) => char.charCodeAt(0));

async function hashPassword(password: string, salt: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: fromBase64(salt),
      iterations: 120_000,
      hash: "SHA-256",
    },
    key,
    256,
  );
  return toBase64(new Uint8Array(bits));
}

export function listAccounts(): Account[] {
  return read<Account[]>(keys.accounts, []);
}

export function getSessionPhone(): string {
  return read<string>(keys.session, "");
}

export function setSessionPhone(phone: string) {
  write(keys.session, phone);
}

export function signOut() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(keys.session);
  window.dispatchEvent(new CustomEvent("gentlelearn:changed"));
}

export async function createAccount(phone: string, password: string) {
  if (!isValidPhone(phone)) {
    return { ok: false as const, error: "Please type a 10-digit mobile number." };
  }
  if (password.length < 6) {
    return { ok: false as const, error: "Please choose a password of 6 letters or more." };
  }
  const accounts = listAccounts();
  if (accounts.some((account) => account.phone === phone)) {
    return {
      ok: false as const,
      error: "This number already has an account. Please sign in instead.",
    };
  }

  const saltBytes = crypto.getRandomValues(new Uint8Array(16));
  const salt = toBase64(saltBytes);
  const hash = await hashPassword(password, salt);

  write(keys.accounts, [
    ...accounts,
    { phone, salt, hash, createdAt: new Date().toISOString() },
  ]);
  setSessionPhone(phone);
  return { ok: true as const };
}

export async function signIn(phone: string, password: string) {
  const account = listAccounts().find((item) => item.phone === phone);
  if (!account) {
    return { ok: false as const, error: "We could not find an account with that number." };
  }
  const hash = await hashPassword(password, account.salt);
  if (hash !== account.hash) {
    return { ok: false as const, error: "That password does not match. Please try again." };
  }
  setSessionPhone(phone);
  return { ok: true as const };
}

export function getLearners(phone: string): Learner[] {
  return read<Learner[]>(keys.learners(phone), []);
}

export function addLearner(phone: string, name: string) {
  const trimmed = name.trim();
  if (!trimmed) return getLearners(phone);
  const learners = [
    ...getLearners(phone),
    {
      id: crypto.randomUUID(),
      name: trimmed,
      createdAt: new Date().toISOString(),
    },
  ];
  write(keys.learners(phone), learners);
  return learners;
}

export function renameLearner(phone: string, id: string, name: string) {
  const trimmed = name.trim();
  if (!trimmed) return getLearners(phone);
  const learners = getLearners(phone).map((learner) =>
    learner.id === id ? { ...learner, name: trimmed } : learner,
  );
  write(keys.learners(phone), learners);
  return learners;
}

export function removeLearner(phone: string, id: string) {
  const learners = getLearners(phone).filter((learner) => learner.id !== id);
  write(keys.learners(phone), learners);
  if (getActiveLearner(phone) === id) {
    window.localStorage.removeItem(keys.activeLearner(phone));
  }
  window.localStorage.removeItem(keys.progress(phone, id));
  return learners;
}

export function getActiveLearner(phone: string): string {
  return read<string>(keys.activeLearner(phone), "");
}

export function setActiveLearner(phone: string, learnerId: string) {
  write(keys.activeLearner(phone), learnerId);
}

/* ---------------------------------------------------------------------------
 * Cache writers used by the optional Supabase backend.
 * The app always reads from local storage, so it keeps working offline and
 * still feels instant. These replace the local copy after a server sync.
 * ------------------------------------------------------------------------- */

export function cacheLearners(phone: string, learners: Learner[]) {
  write(keys.learners(phone), learners);
}

export function cacheProgress(
  phone: string,
  learnerId: string,
  progress: Progress,
) {
  write(keys.progress(phone, learnerId), progress);
}

export function cacheQuestions(phone: string, questions: Question[]) {
  write(keys.questions(phone), questions);
}

export function getProgress(phone: string, learnerId: string): Progress {
  return read<Progress>(keys.progress(phone, learnerId), {});
}

export function markLessonDone(phone: string, learnerId: string, slug: string) {
  const progress = getProgress(phone, learnerId);
  write(keys.progress(phone, learnerId), {
    ...progress,
    [slug]: new Date().toISOString(),
  });
}

export function getQuestions(phone: string): Question[] {
  return read<Question[]>(keys.questions(phone), []);
}

export function addQuestion(
  phone: string,
  learnerId: string,
  learnerName: string,
  text: string,
) {
  const questions = [
    ...getQuestions(phone),
    {
      id: crypto.randomUUID(),
      learnerId,
      learnerName,
      text,
      createdAt: new Date().toISOString(),
    },
  ];
  write(keys.questions(phone), questions);
  return questions;
}

export function getLanguage(): string {
  return read<string>(keys.language, "");
}

export function setLanguage(language: string) {
  write(keys.language, language);
}

/* ---------------------------------------------------------------------------
 * Community stories.
 *
 * Seeded with three real-sounding stories so the page is never empty, then
 * grows with whatever the family shares. Kept on the device, and copied to
 * Supabase when a backend is configured.
 * ------------------------------------------------------------------------- */

export type Story = {
  id: string;
  name: string;
  text: string;
  createdAt: string;
  mine?: boolean;
};

const seedStories: Story[] = [
  {
    id: "seed-electricity",
    name: "Rekha, 68 · Pune",
    text: "A man called and said my electricity would be cut off in one hour unless I paid ₹500 on a link he sent. I put the phone down and called the electricity office myself. My bill was already paid. That one call saved me ₹500 and a very worried afternoon.",
    createdAt: "2026-10-02T09:15:00.000Z",
  },
  {
    id: "seed-prize",
    name: "Mohan, 72 · Mysuru",
    text: "I got a message saying I had won a fridge. It asked for ₹999 for delivery. My daughter told me that real prizes never ask for money first. I deleted the message and nothing bad happened.",
    createdAt: "2026-10-18T14:40:00.000Z",
  },
  {
    id: "seed-new-number",
    name: "Lakshmi, 65 · Chennai",
    text: "A message from a new number said it was my son and he needed money urgently. I called his old number instead. He was at home having tea. Now our family has a small secret question we ask whenever a number is new.",
    createdAt: "2026-11-04T07:05:00.000Z",
  },
];

export function getStories(): Story[] {
  const shared = read<Story[]>(keys.stories, []);
  const seen = new Set(shared.map((story) => story.id));
  return [
    ...shared,
    ...seedStories.filter((story) => !seen.has(story.id)),
  ].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function addStory(name: string, text: string): Story | null {
  const body = text.trim();
  if (!body) return null;
  const story: Story = {
    id: crypto.randomUUID(),
    name: name.trim() || "A friend of GentleLearn",
    text: body,
    createdAt: new Date().toISOString(),
    mine: true,
  };
  write(keys.stories, [...read<Story[]>(keys.stories, []), story]);
  return story;
}

export function cacheStories(stories: Story[]) {
  const shared = read<Story[]>(keys.stories, []);
  const mine = shared.filter((story) => story.mine);
  const mineIds = new Set(mine.map((story) => story.id));
  write(keys.stories, [
    ...mine,
    ...stories.filter((story) => !mineIds.has(story.id)),
  ]);
}

export function hasHelped(storyId: string): boolean {
  return read<string[]>(keys.storyHelped, []).includes(storyId);
}

export function markHelped(storyId: string) {
  const helped = read<string[]>(keys.storyHelped, []);
  if (helped.includes(storyId)) return;
  write(keys.storyHelped, [...helped, storyId]);
}

export const languages = [
  { code: "hi", native: "हिन्दी", label: "Hindi" },
  { code: "bn", native: "বাংলা", label: "Bengali" },
  { code: "ta", native: "தமிழ்", label: "Tamil" },
  { code: "te", native: "తెలుగు", label: "Telugu" },
  { code: "mr", native: "मराठी", label: "Marathi" },
  { code: "as", native: "অসমীয়া", label: "Assamese" },
  { code: "kn", native: "ಕನ್ನಡ", label: "Kannada" },
  { code: "gu", native: "ગુજરાતી", label: "Gujarati" },
  { code: "pa", native: "ਪੰਜਾਬੀ", label: "Punjabi" },
  { code: "ml", native: "മലയാളം", label: "Malayalam" },
  { code: "or", native: "ଓଡ଼ିଆ", label: "Odia" },
  { code: "en", native: "English", label: "English" },
] as const;
