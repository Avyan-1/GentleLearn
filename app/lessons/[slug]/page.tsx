"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useApp } from "@/components/app-provider";
import { Button, Card, LinkButton, cx } from "@/components/ui";
import { getLesson } from "@/lib/lessons";

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

  const lesson = useMemo(() => getLesson(params.slug), [params.slug]);
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [question, setQuestion] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (ready && !phone) router.replace("/login");
  }, [ready, phone, router]);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis?.cancel();
    };
  }, []);

  if (!ready || !phone) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  if (!lesson) {
    return (
      <div className="mx-auto max-w-xl px-5 pt-16 text-center">
        <h1 className="text-3xl text-cocoa-800">We could not find that lesson</h1>
        <p className="mt-3 text-cocoa-700">
          It may have moved. All lessons are on the Lessons page.
        </p>
        <LinkButton href="/lessons" className="mt-6">
          Back to lessons
        </LinkButton>
      </div>
    );
  }

  if (!activeLearner) {
    return (
      <div className="mx-auto max-w-xl px-5 pt-16 text-center">
        <h1 className="text-3xl text-cocoa-800">Pick a name first</h1>
        <p className="mt-3 text-cocoa-700">
          Choose who is learning today, then open the lesson again.
        </p>
        <LinkButton href="/lessons" className="mt-6">
          Choose a name
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

  function speak(text: string) {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = voiceLocales[language] ?? "en-IN";
    utterance.rate = 0.9;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.cancel();
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
        <span aria-hidden="true">←</span> All lessons
      </Link>

      <Card padded={false} className="mt-4 overflow-hidden">
        <div className="bg-forest-600 px-5 py-4 text-white sm:px-7">
          <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-bold">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-amber-400" aria-hidden="true" />
              {lesson.category}
            </span>
            <span className="text-white/85">
              about {lesson.minutes} minute{lesson.minutes === 1 ? "" : "s"}
            </span>
          </div>
          <h1 className="mt-3 text-3xl text-white sm:text-4xl">{lesson.title}</h1>
        </div>

        <div className="px-5 py-6 sm:px-7">
          {finished ? (
            <div className="text-center">
              <p className="display text-2xl text-forest-700">Well done!</p>
              <p className="mt-2 text-lg text-cocoa-700">
                {activeLearner.name}, you finished{" "}
                <strong className="text-cocoa-800">{lesson.title}</strong>.
                {isQuiz ? ` You got ${correct} of ${total} right.` : ""}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <LinkButton href="/lessons">Back to lessons</LinkButton>
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
                  Do it again
                </Button>
              </div>
            </div>
          ) : isQuiz && currentQuestion ? (
            <div>
              <div className="flex items-center justify-between text-sm font-bold text-cocoa-600">
                <span>
                  Question {question + 1} of {total}
                </span>
                <span>{correct} right so far</span>
              </div>
              <div className="mt-2 h-2.5 rounded-full bg-sand-200">
                <div
                  className="h-full rounded-full bg-amber-400 transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <h2 className="mt-5 text-2xl text-cocoa-800">
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
                          "w-full rounded-2xl border-2 px-5 py-4 text-left text-lg font-semibold transition-colors",
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
                    {picked === currentQuestion.answer ? "That's right." : "Not quite."}
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
                  Back
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
                  {question + 1 >= total ? "See my score" : "Next question"}
                </Button>
              </div>
            </div>
          ) : currentStep ? (
            <div>
              <div className="flex items-center justify-between text-sm font-bold text-cocoa-600">
                <span>
                  Step {step + 1} of {total}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    speak(`${currentStep.title}. ${currentStep.body}`)
                  }
                  className="inline-flex items-center gap-2 rounded-full border-2 border-sand-200 px-3 py-1 text-cocoa-700 hover:bg-sand-100"
                >
                  <span aria-hidden="true">🔊</span>
                  {speaking ? "Stop" : "Read this aloud"}
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
              <p className="mt-3 rounded-2xl bg-sand-100 px-5 py-4 text-xl leading-relaxed text-cocoa-800">
                {currentStep.body}
              </p>

              <div className="mt-7 flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  disabled={step === 0}
                  onClick={() => setStep((value) => Math.max(0, value - 1))}
                >
                  Back
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
                  {step + 1 >= total ? "Finish lesson" : "Next step"}
                </Button>
              </div>
            </div>
          ) : (
            <p className="text-cocoa-700">This lesson has no steps yet.</p>
          )}
        </div>
      </Card>

      {progress[lesson.slug] && !finished ? (
        <p className="mt-4 text-center text-sm font-semibold text-forest-700">
          You have finished this lesson before. Doing it again is a good idea.
        </p>
      ) : null}
    </div>
  );
}
