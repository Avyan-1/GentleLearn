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
