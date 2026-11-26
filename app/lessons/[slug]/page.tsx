"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useApp } from "@/components/app-provider";
import { useT } from "@/components/i18n";
import { Button, Card, LinkButton, cx } from "@/components/ui";
import { StepExample } from "@/components/lesson-examples";
import {
  exampleForLesson,
  freeLessons,
  getLesson,
  nextLesson as findNextLesson,
} from "@/lib/lessons";
import { localizeLesson } from "@/lib/i18n";
import { badgeById, type Award } from "@/lib/game";
import { speak, stopVoice, unlockVoice } from "@/lib/speech";

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

  const rawLesson = useMemo(() => getLesson(params.slug), [params.slug]);
  const lesson = useMemo(
    () => (rawLesson ? localizeLesson(rawLesson, language) : undefined),
    [rawLesson, language],
  );
  const t = useT();
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);
  const [question, setQuestion] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [award, setAward] = useState<Award | null>(null);

  useEffect(() => {
    if (ready && !phone) router.replace("/login");
  }, [ready, phone, router]);

  useEffect(() => {
    stopVoice();
    setSpeaking(false);
    // Stop any voice when the learner moves to another step or question.
  }, [step, question, finished]);

  useEffect(() => {
    return () => {
      stopVoice();
    };
  }, []);

  if (!ready || !phone) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  if (!lesson || !rawLesson) {
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
  const completedFreeCount = freeLessons.filter((l) => Boolean(progress[l.slug])).length;
  const totalFreeCount = freeLessons.length;

  if (isQuiz && completedFreeCount < totalFreeCount) {
    return (
      <div className="mx-auto max-w-xl px-5 pt-16 text-center">
        <h1 className="text-3xl text-cocoa-800">
          {t("Complete all {n} free lessons first", { n: totalFreeCount })}
        </h1>
        <p className="mt-3 text-cocoa-700">
          {t(
            "You have finished {done} of {total} free lessons. Finish the remaining lessons to unlock the Safety Quiz!",
            { done: completedFreeCount, total: totalFreeCount },
          )}
        </p>
        <LinkButton href="/lessons" className="mt-6">
          {t("Back to lessons")}
        </LinkButton>
      </div>
    );
  }

  const lessonSlug = lesson.slug;
  const stepCount = lesson.steps.length;
  const exampleKey = isQuiz ? null : exampleForLesson(rawLesson);
  const hasExampleStage = Boolean(exampleKey) && stepCount > 0;
  const stageCount = stepCount + (hasExampleStage ? 1 : 0);

  const total = isQuiz ? lesson.quiz!.length : stepCount;
  const currentStep = isQuiz ? null : lesson.steps[step];
  const currentQuestion = isQuiz ? lesson.quiz![question] : null;
  const onExampleStage =
    !isQuiz && hasExampleStage && step >= stepCount;

  const percent = finished
    ? 100
    : Math.round(
        ((isQuiz ? question : Math.min(step, stageCount)) /
          Math.max(1, isQuiz ? total : stageCount)) *
          100,
      );

  async function readAloud(text: string) {
    if (speaking) {
      stopVoice();
      setSpeaking(false);
      return;
    }
    // Must happen inside the tap so phones allow the audio to start later.
    unlockVoice();
    setSpeaking(true);
    await speak(text, language, () => setSpeaking(false));
  }

  function finish() {
    setFinished(true);
    const result = completeLesson(
      lessonSlug,
      isQuiz ? { correct, total } : undefined,
    );
    setAward(result);
  }

  function restart() {
    setFinished(false);
    setStep(0);
    setQuestion(0);
    setPicked(null);
    setCorrect(0);
    setAward(null);
  }

  const next = findNextLesson(progress);

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
              <p className="text-5xl" aria-hidden="true">
                🎉
              </p>
              <p className="display mt-2 text-2xl text-forest-700">
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

              {award ? (
                <>
                  <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 text-lg font-extrabold text-cocoa-800">
                    <span aria-hidden="true">⭐</span>
                    {t("You earned {n} stars!", { n: award.starsGained })}
                  </p>

                  {award.newBadges.length > 0 ? (
                    <ul className="mt-3 flex flex-wrap justify-center gap-2">
                      {award.newBadges.map((badge) => (
                        <li
                          key={badge.id}
                          className="rounded-full border-2 border-forest-500 bg-forest-500/10 px-4 py-2 font-bold text-forest-700"
                        >
                          <span aria-hidden="true">{badge.emoji}</span>{" "}
                          {t("New badge: {name}", { name: t(badge.label) })}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <p className="mt-3 text-sm font-semibold text-cocoa-600">
                    {t("Stars so far: {n}", { n: award.game.stars })} ·{" "}
                    {t("{n}-day streak", { n: award.game.streak })}
                  </p>
                </>
              ) : null}

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {next && next.slug !== lessonSlug ? (
                  <LinkButton href={`/lessons/${next.slug}`} size="lg">
                    {t("Start the next lesson")}
                  </LinkButton>
                ) : (
                  <LinkButton href="/lessons" size="lg">
                    {t("Back to lessons")}
                  </LinkButton>
                )}
                <Button variant="outline" onClick={restart}>
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
          ) : onExampleStage && exampleKey ? (
            <div>
              <div className="flex items-center justify-between text-sm font-bold text-cocoa-600">
                <span>{t("A real example")}</span>
                <span>
                  {t("Step {a} of {b}", { a: stageCount, b: stageCount })}
                </span>
              </div>
              <div className="mt-2 h-2.5 rounded-full bg-sand-200">
                <div
                  className="h-full rounded-full bg-forest-500 transition-all"
                  style={{ width: `${percent}%` }}
                />
              </div>

              <h2 className="mt-6 text-2xl text-cocoa-800 sm:text-3xl">
                {t("A real example")}
              </h2>
              <p className="mt-2 text-lg text-cocoa-700">
                {t("This is what it looks like on your phone.")}
              </p>

              <StepExample kind={exampleKey} />

              <div className="mt-7 flex items-center justify-between gap-3">
                <Button variant="outline" onClick={() => setStep(stepCount - 1)}>
                  {t("Back")}
                </Button>
                <Button onClick={finish}>{t("Finish lesson")}</Button>
              </div>
            </div>
          ) : currentStep ? (
            <div>
              <div className="flex items-center justify-between text-sm font-bold text-cocoa-600">
                <span>
                  {t("Step {a} of {b}", {
                    a: step + 1,
                    b: isQuiz ? total : stageCount,
                  })}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    readAloud(`${currentStep.title}. ${currentStep.body}`)
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
                    if (step + 1 < stepCount) {
                      setStep(step + 1);
                    } else if (hasExampleStage) {
                      setStep(stepCount);
                    } else {
                      finish();
                    }
                  }}
                >
                  {step + 1 < stepCount
                    ? t("Next step")
                    : hasExampleStage
                      ? t("See an example")
                      : t("Finish lesson")}
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
