import { NextResponse } from "next/server";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";

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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const text = typeof body?.text === "string" ? body.text.trim() : "";
    const language = typeof body?.language === "string" ? body.language : body?.lang;

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const voice = resolveVoice(language);
    const tts = new MsEdgeTTS();
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

    const { audioStream } = tts.toStream(text, { rate: "-10%" });
    const chunks: Buffer[] = [];

    await new Promise<void>((resolve, reject) => {
      audioStream.on("data", (chunk: Buffer) => chunks.push(Buffer.from(chunk)));
      audioStream.on("end", () => resolve());
      audioStream.on("error", (err: Error) => reject(err));
    });

    const audioBuffer = Buffer.concat(chunks);
    return new Response(audioBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("TTS generation error:", error);
    return NextResponse.json({ error: "Failed to synthesize speech" }, { status: 500 });
  }
}
