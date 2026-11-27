import { NextResponse } from "next/server";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";

export const runtime = "nodejs";
export const maxDuration = 30;

type VoiceRequest = {
  text?: string;
  language?: string;
  lang?: string;
};

const VOICE_MAP: Record<string, string> = {
  en: "en-IN-NeerjaNeural",
  hi: "hi-IN-SwaraNeural",
  bn: "bn-IN-TanishaaNeural",
  ta: "ta-IN-PallaviNeural",
  te: "te-IN-ShrutiNeural",
  kn: "kn-IN-SapnaNeural",
  mr: "mr-IN-AarohiNeural",
  gu: "gu-IN-DhwaniNeural",
  ml: "ml-IN-SobhanaNeural",
  pa: "pa-IN-OjasNeural",
  or: "or-IN-SubhasiniNeural",
  as: "as-IN-YashicaNeural",
};

const AZURE_VOICES = VOICE_MAP;

function resolveVoice(lang?: string): string {
  if (!lang) return VOICE_MAP.en;
  const normalized = lang.toLowerCase().trim();
  const short = normalized.split("-")[0];
  if (VOICE_MAP[short]) return VOICE_MAP[short];

  const byName: Record<string, string> = {
    english: VOICE_MAP.en,
    hindi: VOICE_MAP.hi,
    bengali: VOICE_MAP.bn,
    bangla: VOICE_MAP.bn,
    tamil: VOICE_MAP.ta,
    telugu: VOICE_MAP.te,
    kannada: VOICE_MAP.kn,
    marathi: VOICE_MAP.mr,
    gujarati: VOICE_MAP.gu,
    malayalam: VOICE_MAP.ml,
    punjabi: VOICE_MAP.pa,
    odia: VOICE_MAP.or,
    oriya: VOICE_MAP.or,
    assamese: VOICE_MAP.as,
  };
  return byName[normalized] || VOICE_MAP.en;
}

/** The spoken text goes straight into SSML, so the XML characters must be safe. */
function escapeXml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Generated audio is cached in memory. Serverless instances are reused for a
 * while, so reading the same step twice is instant and costs no request.
 */
const cache = new Map<string, Buffer>();
const CACHE_LIMIT = 120;

function remember(key: string, audio: Buffer) {
  if (cache.size >= CACHE_LIMIT) {
    const oldest = cache.keys().next().value;
    if (oldest) cache.delete(oldest);
  }
  cache.set(key, audio);
}

function looksLikeMp3(audio: Buffer) {
  if (audio.length < 512) return false;
  // "ID3" tag or a raw MPEG frame sync.
  return (
    (audio[0] === 0x49 && audio[1] === 0x44 && audio[2] === 0x33) ||
    (audio[0] === 0xff && (audio[1] & 0xe0) === 0xe0)
  );
}

/** Microsoft Edge Read Aloud. No key needed, real neural voices. */
async function edgeVoice(voice: string, text: string) {
  const tts = new MsEdgeTTS({
    connectionTimeoutMs: 5_000,
    synthesisTimeoutMs: 8_000,
  });

  try {
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
    const { audioStream } = tts.toStream(escapeXml(text), { rate: "-8%" });
    const chunks: Buffer[] = [];

    await new Promise<void>((resolve, reject) => {
      const timer = setTimeout(
        () => reject(new Error("Edge voice took too long.")),
        9_000,
      );
      const finish = () => {
        clearTimeout(timer);
        resolve();
      };
      audioStream.on("data", (chunk: Buffer | Uint8Array) =>
        chunks.push(Buffer.from(chunk)),
      );
      audioStream.on("end", finish);
      audioStream.on("close", finish);
      audioStream.on("error", (error: Error) => {
        clearTimeout(timer);
        reject(error);
      });
    });

    const audio = Buffer.concat(chunks);
    return looksLikeMp3(audio) ? audio : null;
  } finally {
    try {
      tts.close();
    } catch {
      // Nothing to clean up.
    }
  }
}


/** Free HTTPS MP3 fallback when datacenter IPs (Netlify/AWS) are blocked by Edge TTS. */
async function googleFreeVoice(voice: string, text: string) {
  const lang = voice.split("-")[0] || "en";
  const tl = lang === "en" ? "en-IN" : lang;
  const chunks = text.match(/.{1,180}(?:\s|$)/g) || [text];
  const buffers: Buffer[] = [];

  for (const part of chunks) {
    const q = part.trim();
    if (!q) continue;
    const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${encodeURIComponent(tl)}&q=${encodeURIComponent(q)}`;
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        "Referer": "https://google.com",
      },
    });
    if (!res.ok) return null;
    buffers.push(Buffer.from(await res.arrayBuffer()));
  }

  const combined = Buffer.concat(buffers);
  return combined.length > 512 ? combined : null;
}

/** Optional paid providers, used only when a key is configured. */
async function elevenLabs(text: string) {
  const key = process.env.ELEVENLABS_API_KEY;
  if (!key) return null;
  const voiceId = process.env.ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM";
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
    {
      method: "POST",
      headers: { "xi-api-key": key, "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.45, similarity_boost: 0.8 },
      }),
    },
  );
  if (!response.ok) return null;
  return Buffer.from(await response.arrayBuffer());
}

async function openAi(text: string) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini-tts",
      voice: "sage",
      input: text,
      response_format: "mp3",
      speed: 0.95,
      instructions:
        "Speak slowly, warmly and clearly, like a patient teacher reading to an older adult.",
    }),
  });
  if (!response.ok) return null;
  return Buffer.from(await response.arrayBuffer());
}

async function azureVoice(text: string, voice: string) {
  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION;
  if (!key || !region) return null;
  const language = voice.split("-").slice(0, 2).join("-");
  const ssml = `<speak version="1.0" xml:lang="${language}"><voice name="${voice}"><prosody rate="-8%">${escapeXml(text)}</prosody></voice></speak>`;
  const response = await fetch(
    `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`,
    {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-24khz-96kbitrate-mono-mp3",
      },
      body: ssml,
    },
  );
  if (!response.ok) return null;
  return Buffer.from(await response.arrayBuffer());
}

const AUDIO_HEADERS = {
  "Content-Type": "audio/mpeg",
  "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
};

async function synthesize(rawText: string, language: string) {
  const text = rawText.trim().slice(0, 1200);
  if (!text) {
    return NextResponse.json({ error: "No text to read." }, { status: 400 });
  }

  const voice = resolveVoice(language);
  const key = `${voice}:${text}`;

  const cached = cache.get(key);
  if (cached) {
    return new Response(new Uint8Array(cached), {
      headers: { ...AUDIO_HEADERS, "X-Voice": "cache" },
    });
  }

  const providers: Array<[string, () => Promise<Buffer | null>]> = [
    ["edge", () => edgeVoice(voice, text)],
    ["google-free", () => googleFreeVoice(voice, text)],
    ["azure", () => azureVoice(text, AZURE_VOICES[voice] ?? voice)],
    ["elevenlabs", () => elevenLabs(text)],
    ["openai", () => openAi(text)],
  ];

  for (const [name, make] of providers) {
    try {
      const audio = await make();
      if (audio && audio.length > 512) {
        remember(key, audio);
        return new Response(new Uint8Array(audio), {
          headers: { ...AUDIO_HEADERS, "X-Voice": name },
        });
      }
    } catch (error) {
      console.warn(`Voice provider "${name}" failed:`, error);
    }
  }

  // Nothing produced audio: tell the browser to use the voice on the device.
  return new Response(null, { status: 204 });
}

/**
 * The player uses GET so the audio element can stream the sound directly.
 * That is the only reliable way to play on iPhones and older Android phones.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  return synthesize(
    url.searchParams.get("text") ?? "",
    url.searchParams.get("language") ?? "en",
  );
}

export async function POST(request: Request) {
  let body: VoiceRequest;
  try {
    body = (await request.json()) as VoiceRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  return synthesize(
    String(body.text ?? ""),
    String(body.language ?? body.lang ?? "en"),
  );
}
