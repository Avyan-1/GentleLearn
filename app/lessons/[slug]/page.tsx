"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { useApp } from "@/components/app-provider";
import { useT } from "@/components/i18n";
import { Button, Card, LinkButton, cx } from "@/components/ui";
import { StepExample } from "@/components/lesson-examples";
import { getLesson } from "@/lib/lessons";
import { localizeLesson } from "@/lib/i18n";

const voiceLocales: Record<string, string> = {
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

/** Pick the warmest voice the device already has installed. */
function pickBrowserVoice(language: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  const locale = (voiceLocales[language] ?? "en-IN").toLowerCase();
  const short = locale.split("-")[0];
  const voices = window.speechSynthesis.getVoices();
  const matches = voices.filter((voice) => {
    const lang = voice.lang.toLowerCase().replace("_", "-");
    return lang === locale || lang.startsWith(`${short}-`);
  });
  return (
    matches.find((voice) =>
      /natural|neural|premium|enhanced|google|samantha|sonia|karen|moira|rishi|veena/i.test(
        voice.name,
      ),
    ) ??
    matches[0] ??
    null
  );
}

export default function LessonPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const {
    ready,
    phone,
    activeLearner,
    completeLesson,
    progress,
    language,
  } = useApp();

  const lesson = useMemo(() => {
    const found = getLesson(params.slug);
    return found ? localizeLesson(found, language) : undefined;
  }, [params.slug, language]);
  const t = useT();
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [question, setQuestion] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const speechId = useRef(0);

  useEffect(() => {
    if (ready && !phone) router.replace("/login");
  }, [ready, phone, router]);

  function stopSpeaking() {
    speechId.current += 1;
    const player = audioRef.current;
    if (player) {
      player.pause();
      audioRef.current = null;
    }
    if (typeof window !== "undefined") window.speechSynthesis?.cancel();
  }

  useEffect(() => {
    stopSpeaking();
    setSpeaking(false);
    // Stop any voice when the learner moves to another step or question.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, question, finished]);

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!ready || !phone) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  if (!lesson) {
    return (
      <div className="mx-auto max-w-xl px-5 pt-16 text-center">
        <h1 className="text-3xl text-cocoa-800">
          {t("We could not find that lesson")}
        </h1>
        <p className="mt-3 text-cocoa-700">
          {t("It may have moved. All lessons are on the Lessons page.")}
        </p>
        <LinkButton href="/lessons" className="mt-6">
          {t("Back to lessons")}
        </LinkButton>
      </div>
    );
  }

  if (!activeLearner) {
    return (
      <div className="mx-auto max-w-xl px-5 pt-16 text-center">
        <h1 className="text-3xl text-cocoa-800">{t("Pick a name first")}</h1>
        <p className="mt-3 text-cocoa-700">
          {t("Choose who is learning today, then open the lesson again.")}
        </p>
        <LinkButton href="/lessons" className="mt-6">
          {t("Choose a name")}
        </LinkButton>
      </div>
    );
  }

  const isQuiz = Boolean(lesson.quiz?.length);
  const lessonSlug = lesson.slug;
  const total = isQuiz ? lesson.quiz!.length : lesson.steps.length;
  const currentStep = isQuiz ? null : lesson.steps[step];
  const currentQuestion = isQuiz ? lesson.quiz![question] : null;
  const percent = finished ? 100 : Math.round(((isQuiz ? question : step) / total) * 100);

  async function speak(text: string) {
    if (speaking) {
      stopSpeaking();
      setSpeaking(false);
      return;
    }

    stopSpeaking();
    const requestId = speechId.current;
    setSpeaking(true);

    // Prefer the configured human voice on the server.
    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, lang: language }),
      });

      if (requestId !== speechId.current) return;

      if (
        response.ok &&
        response.headers.get("content-type")?.startsWith("audio")
      ) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const player = new Audio(url);
        audioRef.current = player;
        player.onended = () => {
          setSpeaking(false);
          URL.revokeObjectURL(url);
          audioRef.current = null;
        };
        player.onerror = () => {
          setSpeaking(false);
          URL.revokeObjectURL(url);
          audioRef.current = null;
        };
        await player.play();
        return;
      }
    } catch {
      // Fall through to the browser voice.
    }

    if (requestId !== speechId.current) return;
    if (typeof window === "undefined" || !window.speechSynthesis) {
      setSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voiceLocales[language] ?? "en-IN";
    const voice = pickBrowserVoice(language);
    if (voice) utterance.voice = voice;
    utterance.rate = 0.92;
    utterance.pitch = 1;
    const safety = window.setTimeout(
      () => setSpeaking(false),
      Math.max(8000, text.length * 110),
    );
    utterance.onend = () => {
      window.clearTimeout(safety);
      setSpeaking(false);
    };
    utterance.onerror = () => {
      window.clearTimeout(safety);
      setSpeaking(false);
    };
    window.speechSynthesis.speak(utterance);
  }

  function finish() {
    setFinished(true);
    completeLesson(lessonSlug);
  }

  return (
    <div className="mx-auto max-w-3xl px-5 pt-6 pb-16">
      <Link
        href="/lessons"
        className="inline-flex items-center gap-2 font-bold text-forest-700"
      >
        <span aria-hidden="true">←</span> {t("All lessons")}
      </Link>

      <Card padded={false} className="mt-4 overflow-hidden">
        <div className="bg-forest-600 px-5 py-4 text-white sm:px-7">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-bold">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
              {lesson.category}
            </span>
            <span className="text-white/85">
              {t("about {n} minutes", { n: lesson.minutes })}
            </span>
          </div>
          <h1 className="mt-3 text-3xl text-white sm:text-4xl">{lesson.title}</h1>
        </div>

        <div className="px-5 py-6 sm:px-7">
          {finished ? (
            <div className="text-center">
              <p className="display text-2xl text-forest-700">
                {t("Well done!")}
              </p>
              <p className="mt-2 text-lg text-cocoa-700">
                {t("{name}, you finished {lesson}.", {
                  name: activeLearner.name,
                  lesson: lesson.title,
                })}
                {isQuiz
                  ? ` ${t("You got {correct} of {total} right.", {
                      correct,
                      total,
                    })}`
                  : ""}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <LinkButton href="/lessons">{t("Back to lessons")}</LinkButton>
                <Button
                  variant="outline"
                  onClick={() => {
                    setFinished(false);
                    setStep(0);
                    setQuestion(0);
                    setPicked(null);
                    setCorrect(0);
                  }}
                >
                  {t("Do it again")}
                </Button>
              </div>
            </div>
          ) : isQuiz && currentQuestion ? (
            <div>
              <div className="flex items-center justify-between text-sm font-bold text-cocoa-600">
                <span>
                  {t("Question {a} of {b}", { a: question + 1, b: total })}
                </span>
                <span>{t("{n} right so far", { n: correct })}</span>
              </div>
              <div className="mt-2 h-2.5 rounded-full bg-sand-200">
                <div
                  className="h-full rounded-full bg-amber-400 transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <h2 className="mt-5 text-2xl text-cocoa-800 sm:text-3xl">
                {currentQuestion.question}
              </h2>

              <ul className="mt-4 space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isPicked = picked === index;
                  const isAnswer = index === currentQuestion.answer;
                  const showResult = picked !== null;

                  return (
                    <li key={option}>
                      <button
                        type="button"
                        disabled={showResult}
                        onClick={() => {
                          setPicked(index);
                          if (index === currentQuestion.answer) {
                            setCorrect((value) => value + 1);
                          }
                        }}
                        className={cx(
                          "w-full rounded-2xl border-2 px-5 py-4 text-left text-xl font-semibold transition-colors",
                          !showResult &&
                            "border-sand-200 bg-white text-cocoa-800 hover:border-sand-300 hover:bg-sand-100",
                          showResult &&
                            isAnswer &&
                            "border-forest-600 bg-forest-600 text-white",
                          showResult &&
                            isPicked &&
                            !isAnswer &&
                            "border-red-300 bg-red-50 text-red-600",
                          showResult &&
                            !isPicked &&
                            !isAnswer &&
                            "border-sand-200 bg-white text-cocoa-600 opacity-70",
                        )}
                      >
                        {option}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {picked !== null ? (
                <div className="mt-5 rounded-2xl bg-sand-100 px-5 py-4">
                  <p className="font-bold text-cocoa-800">
                    {picked === currentQuestion.answer
                      ? t("That's right.")
                      : t("Not quite.")}
                  </p>
                  <p className="mt-1 text-cocoa-700">{currentQuestion.why}</p>
                </div>
              ) : null}

              <div className="mt-6 flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  disabled={question === 0}
                  onClick={() => {
                    setQuestion((value) => Math.max(0, value - 1));
                    setPicked(null);
                  }}
                >
                  {t("Back")}
                </Button>
                <Button
                  disabled={picked === null}
                  onClick={() => {
                    if (question + 1 >= total) {
                      finish();
                    } else {
                      setQuestion((value) => value + 1);
                      setPicked(null);
                    }
                  }}
                >
                  {question + 1 >= total
                    ? t("See my score")
                    : t("Next question")}
                </Button>
              </div>
            </div>
          ) : currentStep ? (
            <div>
              <div className="flex items-center justify-between text-sm font-bold text-cocoa-600">
                <span>
                  {t("Step {a} of {b}", { a: step + 1, b: total })}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    speak(`${currentStep.title}. ${currentStep.body}`)
                  }
                  className="inline-flex items-center gap-2 rounded-full border-2 border-sand-200 px-3 py-1 text-cocoa-700 hover:bg-sand-100"
                >
                  <span aria-hidden="true">🔊</span>
                  {speaking ? t("Stop") : t("Read this aloud")}
                </button>
              </div>

              <div className="mt-2 h-2.5 rounded-full bg-sand-200">
                <div
                  className="h-full rounded-full bg-amber-400 transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <h2 className="mt-6 text-2xl text-cocoa-800 sm:text-3xl">
                {currentStep.title}
              </h2>
              <p className="mt-3 rounded-2xl bg-sand-100 px-5 py-4 text-2xl leading-relaxed text-cocoa-800">
                {currentStep.body}
              </p>

              {currentStep.example ? (
                <StepExample kind={currentStep.example} />
              ) : null}

              <div className="mt-7 flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  disabled={step === 0}
                  onClick={() => setStep((value) => Math.max(0, value - 1))}
                >
                  {t("Back")}
                </Button>
                <Button
                  onClick={() => {
                    if (step + 1 >= total) {
                      finish();
                    } else {
                      setStep((value) => value + 1);
                    }
                  }}
                >
                  {step + 1 >= total
                    ? t("Finish lesson")
                    : t("Next step")}
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-cocoa-700">
              {t("This lesson has no steps yet.")}
            </p>
          )}
        </div>
      </Card>

      {progress[lesson.slug] && !finished ? (
        <p className="mt-4 text-center text-sm font-semibold text-forest-700">
          {t("You have finished this lesson before. Doing it again is a good idea.")}
        </p>
      ) : null}
    </div>
  );
}
