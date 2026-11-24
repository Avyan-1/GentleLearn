"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useApp } from "@/components/app-provider";
import { Card, LinkButton, PageTitle, cx } from "@/components/ui";
import { categories, lessons, plusLessons } from "@/lib/lessons";

export default function LessonsPage() {
  const router = useRouter();
  const {
    ready,
    phone,
    learners,
    activeLearner,
    selectLearner,
    progress,
  } = useApp();

  useEffect(() => {
    if (ready && !phone) router.replace("/login");
  }, [ready, phone, router]);

  if (!ready || !phone) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  if (!activeLearner) {
    return (
      <div className="mx-auto max-w-2xl px-5 pt-16 pb-16 text-center">
        <h1 className="text-4xl text-cocoa-800 sm:text-5xl">
          Who is learning today?
        </h1>
        <p className="mt-4 text-lg text-cocoa-700">
          Pick a name first so we can keep your lessons personal.
        </p>

        {learners.length > 0 ? (
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {learners.map((learner) => (
              <li key={learner.id}>
                <button
                  type="button"
                  onClick={() => selectLearner(learner.id)}
                  className="w-full rounded-2xl border-2 border-sand-200 bg-white px-5 py-4 text-xl font-bold text-cocoa-800 hover:border-forest-500 hover:bg-sand-100"
                >
                  {learner.name}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <Card className="mt-8">
            <p className="text-lg text-cocoa-700">
              No names yet. Add the first learner in the Family corner, then
              come back here.
            </p>
            <LinkButton href="/family" className="mt-5" size="lg">
              Go to the Family corner
            </LinkButton>
          </Card>
        )}
      </div>
    );
  }

  const done = Object.keys(progress).length;
  const freeDone = lessons.filter(
    (lesson) => !lesson.plus && progress[lesson.slug],
  ).length;

  return (
    <div className="mx-auto max-w-5xl px-5 pt-8 pb-16">
      <PageTitle
        title={`Lessons for ${activeLearner.name}`}
        subtitle="One big step at a time. You can stop and come back whenever you like."
      />

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="rounded-full border-2 border-sand-200 bg-white px-4 py-2 text-sm font-bold text-cocoa-700">
          {freeDone} of 10 free lessons finished
        </span>
        <span className="rounded-full border-2 border-sand-200 bg-white px-4 py-2 text-sm font-bold text-cocoa-700">
          {done} lesson{done === 1 ? "" : "s"} done in total
        </span>
        {learners.length > 1 ? (
          <Link
            href="/lessons"
            onClick={() => selectLearner("")}
            className="text-sm font-bold text-forest-700 underline underline-offset-4"
          >
            Switch name
          </Link>
        ) : null}
      </div>

      <div className="mt-10 space-y-10">
        <section>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-2xl text-cocoa-800 sm:text-3xl">Start here</h2>
            <p className="text-sm font-bold text-cocoa-600">
              The 10 regular lessons — free forever
            </p>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {lessons
              .filter((lesson) => !lesson.plus)
              .map((lesson) => (
                <li key={lesson.slug}>
                  <Link
                    href={`/lessons/${lesson.slug}`}
                    className={cx(
                      "flex h-full items-start justify-between gap-3 rounded-2xl border-2 bg-white px-5 py-4 transition-colors",
                      progress[lesson.slug]
                        ? "border-forest-500"
                        : "border-sand-200 hover:border-sand-300 hover:bg-sand-50",
                    )}
                  >
                    <span>
                      <span className="display block text-lg font-bold text-cocoa-800">
                        {lesson.title}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-cocoa-600">
                        about {lesson.minutes} minute
                        {lesson.minutes === 1 ? "" : "s"}
                        {lesson.quiz ? " · quiz" : ""}
                      </span>
                    </span>
                    <span
                      className={cx(
                        "shrink-0 rounded-full px-3 py-1 text-sm font-bold",
                        progress[lesson.slug]
                          ? "bg-forest-600 text-white"
                          : "bg-sand-100 text-cocoa-700",
                      )}
                    >
                      {progress[lesson.slug] ? "Done" : "Start"}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>

        <div className="rounded-3xl bg-sand-100 px-5 py-4">
          <h2 className="text-2xl text-cocoa-800 sm:text-3xl">
            More lessons with Plus
          </h2>
          <p className="mt-1 text-cocoa-700">
            {plusLessons.length} extra lessons, grouped by what you want to do
            next. Plus is coming soon — these open when it arrives.
          </p>
        </div>

        {categories.map((category) => {
          const items = lessons.filter(
            (lesson) => lesson.plus && lesson.category === category,
          );
          if (items.length === 0) return null;

          return (
            <section key={category}>
              <h3 className="text-xl text-cocoa-800 sm:text-2xl">{category}</h3>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {items.map((lesson) => (
                  <li key={lesson.slug}>
                    <Link
                      href="/plans"
                      className="flex h-full items-center justify-between gap-3 rounded-2xl border-2 border-sand-200 bg-white px-5 py-4 transition-colors hover:border-sand-300 hover:bg-sand-50"
                    >
                      <span className="display text-lg font-bold text-cocoa-800">
                        {lesson.title}
                      </span>
                      <span className="shrink-0 rounded-full bg-sand-100 px-3 py-1 text-sm font-bold text-cocoa-700">
                        Plus
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <Card className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl text-cocoa-800">Questions?</h2>
          <p className="mt-1 text-cocoa-700">
            Ask in your own words and a family member will see it.
          </p>
        </div>
        <LinkButton href="/ask" variant="outline">
          Ask a question
        </LinkButton>
      </Card>
    </div>
  );
}
