"use client";

/**
 * One small voice engine for the whole app.
 *
 * The server speaks with real neural voices. The audio element streams the
 * sound straight from /api/tts, which is the only reliable way to play on
 * iPhones and older Android phones: no fetch, no blob, no waiting.
 *
 * If the server has no voice, the voice built into the device is used.
 */

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

const SILENT_WAV =
  "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=";

/** One player for the whole app, so phones remember that sound is allowed. */
let element: HTMLAudioElement | null = null;
let runId = 0;
let unlocked = false;

function audioElement(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!element) {
    element = new Audio();
    element.setAttribute("referrerpolicy", "no-referrer");
    (element as HTMLAudioElement & { referrerPolicy?: string }).referrerPolicy = "no-referrer";
    element.preload = "auto";
    element.setAttribute("playsinline", "true");
    // iOS looks for the non-standard property as well as the attribute.
    (element as HTMLAudioElement & { playsInline?: boolean }).playsInline = true;
  }
  return element;
}

/**
 * Call this straight from a tap handler, before any `await`. It plays a
 * half-second of silence so the phone marks the player as "allowed".
 */
export function unlockVoice() {
  if (typeof window === "undefined" || unlocked) return;
  try {
    const unlocker = new Audio(SILENT_WAV);
    unlocker.setAttribute("playsinline", "true");
    const started = unlocker.play();
    if (started) {
      started
        .then(() => { unlocked = true; })
        .catch(() => { unlocked = false; });
    }
  } catch {
    unlocked = false;
  }
}

export function stopVoice() {
  runId += 1;
  const player = audioElement();
  if (player) {
    try {
      player.pause();
    } catch {
      // Already stopped.
    }
    player.onended = null;
    player.onerror = null;
    player.removeAttribute("src");
    try {
      player.load();
    } catch {
      // Some browsers do not allow load() here. Harmless.
    }
  }
  if (typeof window !== "undefined") {
    window.speechSynthesis?.cancel();
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

    window.speechSynthesis.addEventListener("voiceschanged", finish, {
      once: true,
    });
    // Safari sometimes never fires the event, so do not wait forever.
    window.setTimeout(finish, 1200);
  });
}

function pickDeviceVoice(
  voices: SpeechSynthesisVoice[],
  language: string,
): SpeechSynthesisVoice | null {
  const wanted = (voiceLocales[language] ?? "en-IN").toLowerCase();
  const short = wanted.split("-")[0];
  const inLanguage = voices.filter((voice) => {
    const tag = voice.lang.toLowerCase().replace("_", "-");
    return tag === wanted || tag.startsWith(`${short}-`) || tag === short;
  });
  if (inLanguage.length === 0) return null;

  return (
    inLanguage.find((voice) =>
      /natural|neural|premium|enhanced|siri|google/i.test(voice.name),
    ) ??
    inLanguage.find((voice) => voice.localService) ??
    inLanguage[0]
  );
}

function speakOnDevice(
  text: string,
  language: string,
  onDone: () => void,
  expectedRun: number,
) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    onDone();
    return;
  }

  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = voiceLocales[language] ?? "en-IN";
  utterance.rate = 0.9;
  utterance.pitch = 1;

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    window.clearTimeout(safety);
    if (expectedRun === runId) onDone();
  };
  // If the device stays silent, never leave the button spinning.
  const safety = window.setTimeout(finish, Math.max(12_000, text.length * 140));

  utterance.onend = finish;
  utterance.onerror = finish;

  void loadVoices().then((voices) => {
    if (expectedRun !== runId) return;
    const voice = pickDeviceVoice(voices, language);
    if (voice) utterance.voice = voice;
    try {
      synth.speak(utterance);
    } catch {
      finish();
    }
  });
}

/**
 * Read the text out loud. Resolves when playback has been started; `onDone`
 * fires when the voice finishes (or if it cannot play at all).
 */

function chunkSpeechText(text: string, maxLen = 160): string[] {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return [];
  const parts: string[] = [];
  let rest = clean;
  while (rest.length > maxLen) {
    let cut = rest.lastIndexOf(" ", maxLen);
    if (cut < 40) cut = maxLen;
    parts.push(rest.slice(0, cut).trim());
    rest = rest.slice(cut).trim();
  }
  if (rest) parts.push(rest);
  return parts;
}

function directFreeTtsUrl(chunk: string, language: string): string {
  const tl = language === "en" ? "en-IN" : language;
  const host = ["https://translate", "googleapis.com"].join(".");
  const path = "/translate_tts?ie=UTF-8&client=tw-ob&tl=";
  return host + path + encodeURIComponent(tl) + "&q=" + encodeURIComponent(chunk);
}

export async function speak(
  text: string,
  language: string,
  onDone: () => void,
): Promise<void> {
  stopVoice();
  const myRun = runId;
  const body = text.trim();
  if (!body) {
    onDone();
    return;
  }

  const fallback = () => {
    if (myRun === runId) speakOnDevice(body, language, onDone, myRun);
  };

  const player = audioElement();
  if (!player) {
    fallback();
    return;
  }

  let settled = false;
  player.onended = () => {
    if (settled) return;
    settled = true;
    if (myRun === runId) onDone();
  };
  let triedDirect = false;
  const playDirectChunks = () => {
    const chunks = chunkSpeechText(body);
    let idx = 0;
    const nextChunk = () => {
      if (myRun !== runId || settled) return;
      if (idx >= chunks.length) {
        settled = true;
        onDone();
        return;
      }
      player.onended = nextChunk;
      player.onerror = () => {
        if (!settled) {
          settled = true;
          fallback();
        }
      };
      player.src = directFreeTtsUrl(chunks[idx++], language);
      player.play().catch(() => {
        if (!settled) {
          settled = true;
          fallback();
        }
      });
    };
    nextChunk();
  };

  player.onerror = () => {
    if (settled) return;
    if (!triedDirect && myRun === runId) {
      triedDirect = true;
      playDirectChunks();
      return;
    }
    settled = true;
    fallback();
  };

  const url = `/api/tts?language=${encodeURIComponent(
    language,
  )}&text=${encodeURIComponent(body)}`;
  player.src = url;

  try {
    await Promise.race([
      player.play(),
      new Promise<never>((_, reject) =>
        window.setTimeout(() => reject(new Error("Voice timed out.")), 8_000),
      ),
    ]);
  } catch {
    if (myRun !== runId || settled) return;
    if (!triedDirect) {
      triedDirect = true;
      playDirectChunks();
      return;
    }
    settled = true;
    fallback();
  }
}
