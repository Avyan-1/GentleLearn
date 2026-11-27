"use client";

export const voiceLocales: Record<string, string> = {
  hi: "hi-IN",
  bn: "bn-IN",
  ta: "ta-IN",
  te: "te-IN",
  mr: "mr-IN",
  as: "as-IN",
  kn: "kn-IN",
  gu: "gu-IN",
  pa: "pa-IN",
  ml: "ml-IN",
  or: "or-IN",
  en: "en-IN",
};

let runId = 0;

export function unlockVoice() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.getVoices();
  } catch {}
}

export function stopVoice() {
  runId += 1;
  if (typeof window !== "undefined" && window.speechSynthesis) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
}

function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      resolve([]);
      return;
    }
    const available = window.speechSynthesis.getVoices();
    if (available.length > 0) {
      resolve(available);
      return;
    }
    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve(window.speechSynthesis.getVoices());
    };
    window.speechSynthesis.addEventListener("voiceschanged", finish, { once: true });
    window.setTimeout(finish, 1200);
  });
}

function pickBestNaturalVoice(
  voices: SpeechSynthesisVoice[],
  language: string,
): SpeechSynthesisVoice | null {
  const wanted = (voiceLocales[language] ?? "en-IN").toLowerCase();
  const short = wanted.split("-")[0];
  const matches = voices.filter((v) => {
    const tag = v.lang.toLowerCase().replace("_", "-");
    return tag === wanted || tag.startsWith(short + "-") || tag === short;
  });
  if (matches.length === 0) return null;

  return (
    matches.find((v) => /natural|neural|online/i.test(v.name)) ??
    matches.find((v) => /google|siri|premium|enhanced/i.test(v.name)) ??
    matches.find((v) => !v.localService) ??
    matches[0]
  );
}

export async function speak(
  text: string,
  language: string,
  onDone: () => void,
): Promise<void> {
  stopVoice();
  const myRun = runId;
  const body = text.trim();
  if (!body || typeof window === "undefined" || !window.speechSynthesis) {
    onDone();
    return;
  }

  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(body);
  utterance.lang = voiceLocales[language] ?? "en-IN";
  utterance.rate = 0.92;
  utterance.pitch = 1;

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    window.clearTimeout(safety);
    if (myRun === runId) onDone();
  };

  const safety = window.setTimeout(finish, Math.max(12_000, body.length * 140));
  utterance.onend = finish;
  utterance.onerror = finish;

  const voices = await loadVoices();
  if (myRun !== runId) return;
  const chosen = pickBestNaturalVoice(voices, language);
  if (chosen) utterance.voice = chosen;

  try {
    synth.speak(utterance);
  } catch {
    finish();
  }
}
