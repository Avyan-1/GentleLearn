import { NextResponse } from "next/server";

export const runtime = "nodejs";

type VoiceRequest = {
  text?: string;
  lang?: string;
};

const AZURE_VOICES: Record<string, string> = {
  hi: "hi-IN-SwaraNeural",
  bn: "bn-IN-TanishaaNeural",
  ta: "ta-IN-PallaviNeural",
  te: "te-IN-ShrutiNeural",
  mr: "mr-IN-AarohiNeural",
  gu: "gu-IN-DhwaniNeural",
  kn: "kn-IN-SapnaNeural",
  ml: "ml-IN-SobhanaNeural",
  pa: "pa-IN-OjaswiniNeural",
  or: "or-IN-SubhasiniNeural",
  as: "as-IN-PriyomNeural",
  en: "en-IN-NeerjaNeural",
};

const audioResponse = (body: ArrayBuffer | Blob) =>
  new Response(body, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=86400, s-maxage=604800",
    },
  });

async function elevenLabs(text: string) {
  const key = process.env.ELEVENLABS_API_KEY;
  if (!key) return null;

  const voiceId =
    process.env.ELEVENLABS_VOICE_ID || "21m00Tcm4TlvDq8ikWAM";
  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
    {
      method: "POST",
      headers: {
        "xi-api-key": key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.45,
          similarity_boost: 0.8,
          style: 0.1,
          use_speaker_boost: true,
        },
      }),
    },
  );

  if (!response.ok) {
    console.warn(
      "ElevenLabs voice failed:",
      response.status,
      await response.text().catch(() => ""),
    );
    return null;
  }

  return audioResponse(await response.arrayBuffer());
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

  if (!response.ok) {
    console.warn(
      "OpenAI voice failed:",
      response.status,
      await response.text().catch(() => ""),
    );
    return null;
  }

  return audioResponse(await response.arrayBuffer());
}

async function azure(text: string, lang: string) {
  const key = process.env.AZURE_SPEECH_KEY;
  const region = process.env.AZURE_SPEECH_REGION;
  if (!key || !region) return null;

  const voice = AZURE_VOICES[lang] ?? AZURE_VOICES.en;
  const language = lang === "en" ? "en-IN" : `${lang}-IN`;
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const ssml = `<speak version="1.0" xml:lang="${language}"><voice name="${voice}"><prosody rate="-8%">${escaped}</prosody></voice></speak>`;

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

  if (!response.ok) {
    console.warn(
      "Azure voice failed:",
      response.status,
      await response.text().catch(() => ""),
    );
    return null;
  }

  return audioResponse(await response.arrayBuffer());
}

export async function POST(request: Request) {
  let body: VoiceRequest;
  try {
    body = (await request.json()) as VoiceRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const text = String(body.text ?? "").trim();
  const lang = String(body.lang ?? "en");
  if (!text) {
    return NextResponse.json({ error: "No text to read." }, { status: 400 });
  }

  const spoken = text.slice(0, 1200);

  try {
    const audio =
      (await elevenLabs(spoken)) ??
      (await openAi(spoken)) ??
      (await azure(spoken, lang));

    if (audio) return audio;
  } catch (error) {
    console.warn("Voice request failed:", error);
  }

  // No provider is configured (or every provider failed). A 204 tells the
  // browser to fall back to its own voice without showing a console error.
  return new Response(null, { status: 204 });
}
