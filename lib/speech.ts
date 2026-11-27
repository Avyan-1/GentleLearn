"use client";

/**
 * One small voice engine for the whole app.
 *
 * The server speaks with real neural voices. The audio element streams the
 * sound straight from /api/tts, which is the only reliable way to play on
 * iPhones and older Android phones: no fetch, no blob, no waiting.
 *
 * If the server has no voice, the browser fetches a free Google voice directly
 * (chunked). If that also fails, the voice built into the device is used.
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

let element: HTMLAudioElement | null = null;
let runId = 0;
let unlocked = false;

function audioElement(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!element) {
    element = new Audio();
    element.setAttribute("referrerpolicy", "no-referrer");
    (element as HTMLAudioElement & { referrerPolicy?: string }).referrerPolicy =
      "no-referrer";
    element.preload = "auto";
    element.setAttribute("playsinline", "true");
    (element as HTMLAudioElement & { playsInline?: boolean }).playsInline = true;
  }
  return element;
}

export function unlockVoice() {
  if (typeof window === "undefined" || unlocked) return;
  try {
    const unlocker = new Audio(SILENT_WAV);
    unlocker.setAttribute("playsinline", "true");
    const started = unlocker.play();
    if (started) {
      started
        .then(() => {
          unlocked = true;
        })
        .catch(() => {
          unlocked = false;
        });
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
    player.onstalled = null;
    player.onabort = null;
    player.removeAttribute("src");
    try {
      player.load();
    } catch {
      // Some browsers do not allow load() here. Harmless.
    }
  }
  if (typeof window !== "undefined") {
    try {
      window.speechSynthesis?.cancel();
    } catch {
      // Some browsers throw if called too early. Harmless.
    }
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
    window.setTimeout(finish, 1200);
  });
}

function pickDeviceVoice(
  voices: SpeechSynthesisVoice[],
  language: string,
): SpeechSynthesisVoice | null {
  const wanted = (voiceLocales[language] ?? "en-IN").toLowerCase();
  const short = wanted.split("-")[0];

  const fallbacks: Record<string, string[]> = {
    as: ["as-in", "bn-in", "bn"],
    or: ["or-in"],
    pa: ["pa-in", "hi-in", "hi"],
  };
  const wantedTags = [wanted, ...(fallbacks[short] ?? [])];

  for (const tag of wantedTags) {
    const inLanguage = voices.filter((voice) => {
      const vtag = voice.lang.toLowerCase().replace("_", "-");
      return vtag === tag || vtag.startsWith(`${tag.split("-")[0]}-`);
    });
    if (inLanguage.length === 0) continue;
    const picked =
      inLanguage.find((voice) =>
        /natural|neural|premium|enhanced|siri|google/i.test(voice.name),
      ) ??
      inLanguage.find((voice) => voice.localService) ??
      inLanguage[0];
    if (picked) return picked;
  }

  return voices[0] ?? null;
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
  const safety = window.setTimeout(
    finish,
    Math.max(12_000, text.length * 140),
  );

  utterance.onend = finish;
  utterance.onerror = finish;

  void loadVoices().then((voices) => {
    if (expectedRun !== runId) return;
    const voice = pickDeviceVoice(voices, language);
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    }
    try {
      synth.speak(utterance);
    } catch {
      finish();
    }
  });
}

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
  const finishOk = () => {
    if (settled) return;
    if (!player.duration || player.duration < 0.1) {
      // Empty/204 response: treat as failure and fall through.
      tryDirect();
      return;
    }
    settled = true;
    if (myRun === runId) onDone();
  };

  let triedDirect = false;
  const tryDirect = () => {
    if (triedDirect || myRun !== runId || settled) {
      if (!settled) {
        settled = true;
        fallback();
      }
      return;
    }
    triedDirect = true;
    const chunks = chunkSpeechText(body);
    let idx = 0;
    const nextChunk = () => {
      if (myRun !== runId || settled) return;
      if (idx >= chunks.length) {
        settled = true;
        if (myRun === runId) onDone();
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
    player.onended = nextChunk;
    nextChunk();
  };

  const safety = window.setTimeout(() => {
    if (settled) return;
    tryDirect();
  }, 8_000);

  player.onended = finishOk;
  player.onerror = () => {
    if (settled) return;
    tryDirect();
  };
  player.onstalled = () => {
    if (settled) return;
    tryDirect();
  };

  const url = `/api/tts?language=${encodeURIComponent(
    language,
  )}&text=${encodeURIComponent(body)}`;
  player.src = url;

  try {
    await player.play();
  } catch {
    if (myRun !== runId || settled) return;
    tryDirect();
  }
}
