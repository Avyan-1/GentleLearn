"use client";

/**
 * One small voice engine for the whole app.
 *
 * The server speaks with real neural voices. The audio element streams the
 * sound straight from /api/tts, which is the only reliable way to play on
 * iPhones and older Android phones.
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

let element: HTMLAudioElement | null = null;
let runId = 0;
let unlocked = false;

function audioElement(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!element) {
    element = new Audio();
    element.preload = "auto";
    element.setAttribute("playsinline", "true");
    (element as HTMLAudioElement & { playsInline?: boolean }).playsInline = true;
  }
  return element;
}

/**
 * Mark the player as allowed. Call this from a tap handler, before any await.
 * We do not play a silent clip here: pausing it again can cancel the real clip
 * that starts a moment later on phones. The real play() is still inside the
 * same user gesture, so the browser allows it.
 */
export function unlockVoice() {
  unlocked = true;
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
    // Deliberately no load(): it can reset the gesture allowance on iOS.
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

  // Some languages have no voice of their own on a given device. Fall back to
  // a close relative that at least shares the script, so the user still hears
  // something instead of silence.
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

  // Last resort: any voice at all, so speechSynthesis still speaks something.
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
  synth.cancel();

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
  const finish = () => {
    if (settled) return;
    // A server that returned 204 (no voice) makes the element end instantly
    // with zero duration. Treat that as "no sound" and fall back to the
    // voice already on the device instead of pretending it worked.
    if (!player.duration || player.duration < 0.1) {
      fail();
      return;
    }
    settled = true;
    window.clearTimeout(safety);
    if (myRun === runId) onDone();
  };
  const fail = () => {
    if (settled) return;
    settled = true;
    window.clearTimeout(safety);
    fallback();
  };
  // If the server never starts playing (empty 204, network stall, blocked),
  // do not leave the button spinning and do not stay silent.
  const safety = window.setTimeout(fail, 8_000);

  player.onended = finish;
  player.onerror = fail;
  player.onstalled = fail;
  player.onabort = fail;

  const url = `/api/tts?language=${encodeURIComponent(
    language,
  )}&text=${encodeURIComponent(body)}`;

  player.src = url;

  try {
    await player.play();
    // Playback has begun (or at least been accepted). The safety timer now
    // only matters if playback stalls before 'ended'.
  } catch {
    fail();
  }
}
