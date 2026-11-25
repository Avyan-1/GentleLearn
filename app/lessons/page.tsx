"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useApp } from "@/components/app-provider";
import { useT } from "@/components/i18n";
import { cx } from "@/components/ui";
import { localizeLesson } from "@/lib/i18n";
import { categories, freeLessons, lessons, plusLessons, quizLesson } from "@/lib/lessons";

function StatusPill({ done, plus }: { done: boolean; plus?: boolean }) {
  const t = useT();

  return (
    <span
      className={cx(
        "shrink-0 rounded-full px-3 py-1 text-sm font-bold",
        done
          ? "bg-forest-600 text-white"
          : plus
            ? "bg-sand-200 text-cocoa-700"
            : "bg-sand-100 text-cocoa-700",
      )}
    >
      {done ? t("Done") : plus ? t("Plus") : t("Start")}
    </span>
  );
}

function Group({
  title,
  subtitle,
  done,
  total,
  open,
  children,
}: {
  title: string;
  subtitle: string;
  done: number;
  total: number;
  open?: boolean;
  children: ReactNode;
}) {
  return (
    <details
      open={open}
      className="group overflow-hidden rounded-3xl border-2 border-sand-200 bg-white"
    >
      <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 hover:bg-sand-50 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="display block text-xl font-bold text-cocoa-800 sm:text-2xl">
            {title}
          </span>
          <span className="mt-0.5 block text-sm font-semibold text-cocoa-600">
            {subtitle}
          </span>
        </span>

        <span className="hidden shrink-0 rounded-full bg-sand-100 px-3 py-1 text-sm font-bold text-cocoa-700 sm:inline">
          {done}/{total}
        </span>
        <span
          aria-hidden="true"
          className="shrink-0 text-xl text-cocoa-600 transition-transform group-open:rotate-180"
        >
          ▾
        </span>
      </summary>

      <div className="border-t-2 border-sand-100 px-4 py-3 sm:px-5">{children}</div>
    </details>
  );
}

export default function LessonsPage() {
  const router = useRouter();
  const { ready, phone, activeLearner, progress, language } = useApp();
  const t = useT();

  useEffect(() => {
    if (ready && !phone) router.replace("/login");
  }, [ready, phone, router]);

  useEffect(() => {
    if (ready && phone && !activeLearner) router.replace("/learners");
  }, [ready, phone, activeLearner, router]);

  if (!ready || !phone || !activeLearner) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  const freeDone = freeLessons.filter((lesson) => progress[lesson.slug]).length;
  const percent = Math.round((freeDone / freeLessons.length) * 100);

  return (
    <div className="mx-auto max-w-4xl px-5 pt-6 pb-16">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold tracking-[0.14em] text-cocoa-600 uppercase">
            {t("Learning today")}
          </p>
          <h1 className="mt-1 text-4xl text-cocoa-800 sm:text-5xl">
            {t("Hi {name}", { name: activeLearner.name })}
          </h1>
          <p className="mt-2 max-w-lg text-lg text-cocoa-700">
            {t("Pick a lesson below. Everything is saved as you go.")}
          </p>
        </div>

        <Link
          href="/learners"
          className="group inline-flex items-center gap-3 rounded-2xl bg-forest-600 px-4 py-3 text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-forest-700 hover:shadow-lg"
        >
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg"
          >
            ⇄
          </span>
          <span>
            <span className="block text-sm font-semibold text-white/85">
              {t("Not you, {name}?", { name: activeLearner.name })}
            </span>
            <span className="display block text-lg font-bold">
              {t("Switch learner")}
            </span>
          </span>
        </Link>
      </div>

      <div className="mt-6 rounded-3xl bg-sand-100 px-5 py-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="font-bold text-cocoa-800">
            {t("{done} of {total} free lessons finished", {
              done: freeDone,
              total: freeLessons.length,
            })}
          </p>
          <p className="text-sm font-semibold text-cocoa-600">
            {t("{percent}% of the free course", { percent })}
          </p>
        </div>
        <div className="mt-2 h-3 overflow-hidden rounded-full bg-white">
          <div
            className="h-full rounded-full bg-forest-500 transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <Group
          title={t("Start here")}
          subtitle={t("The 10 regular lessons — free forever")}
          done={freeDone}
          total={freeLessons.length}
          open
        >
          <ul className="space-y-2">
            {freeLessons.map((lesson) => {
              const done = Boolean(progress[lesson.slug]);
              const text = localizeLesson(lesson, language);

              return (
                <li key={lesson.slug}>
                  <Link
                    href={`/lessons/${lesson.slug}`}
                    className={cx(
                      "flex items-center justify-between gap-3 rounded-2xl px-4 py-3 transition-colors",
                      done
                        ? "bg-forest-500/10 hover:bg-forest-500/15"
                        : "bg-sand-100 hover:bg-sand-200",
                    )}
                  >
                    <span className="min-w-0">
                      <span className="display block truncate text-lg font-bold text-cocoa-800">
                        {text.title}
                      </span>
                      <span className="block text-sm font-semibold text-cocoa-600">
                        {t("about {n} minutes", { n: lesson.minutes })}
                        {lesson.quiz ? t(" · quiz") : ""}
                      </span>
                    </span>
                    <StatusPill done={done} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Group>

        {quizLesson ? (() => {
          const completedFreeCount = freeLessons.filter((l) => Boolean(progress[l.slug])).length;
          const totalFreeCount = freeLessons.length;
          const quizUnlocked = completedFreeCount >= totalFreeCount;

          if (!quizUnlocked) {
            return (
              <div
                aria-disabled="true"
                className="flex items-center gap-4 rounded-3xl border-2 border-cocoa-200 bg-cocoa-100/70 px-5 py-4 opacity-85"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cocoa-200 text-2xl text-cocoa-700"
                >
                  🔒
                </span>
                <span className="min-w-0 flex-1">
                  <span className="display block text-xl font-bold text-cocoa-700">
                    {t("Test yourself — {title}", {
                      title: localizeLesson(quizLesson, language).title,
                    })}
                  </span>
                  <span className="block text-sm font-semibold text-cocoa-600">
                    Complete all {totalFreeCount} free lessons to unlock ({completedFreeCount}/{totalFreeCount} done)
                  </span>
                </span>
                <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-bold text-cocoa-600">
                  Locked
                </span>
              </div>
            );
          }

          return (
            <Link
              href={`/lessons/${quizLesson.slug}`}
              className="flex items-center gap-4 rounded-3xl border-2 border-amber-400 bg-amber-300/25 px-5 py-4 transition-colors hover:bg-amber-300/40"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400 text-2xl text-cocoa-800"
              >
                ✓
              </span>
              <span className="min-w-0 flex-1">
                <span className="display block text-xl font-bold text-cocoa-800">
                  {t("Test yourself — {title}", {
                    title: localizeLesson(quizLesson, language).title,
                  })}
                </span>
                <span className="block text-sm font-semibold text-cocoa-700">
                  {localizeLesson(quizLesson, language).summary}
                </span>
              </span>
              <span
                className={cx(
                  "shrink-0 rounded-full px-3 py-1 text-sm font-bold",
                  progress[quizLesson.slug]
                    ? "bg-forest-600 text-white"
                    : "bg-white text-cocoa-700",
                )}
              >
                {progress[quizLesson.slug] ? t("Done") : t("Quiz")}
              </span>
            </Link>
          );
        })() : null}

        <div className="flex items-baseline justify-between gap-3 px-2 pt-4">
          <h2 className="text-xl text-cocoa-800 sm:text-2xl">
            {t("More lessons with Plus")}
          </h2>
          <span className="text-sm font-bold text-cocoa-600">
            {t("{n} extra", { n: plusLessons.length })}
          </span>
        </div>

        {categories.map((category) => {
          const items = lessons.filter(
            (lesson) => lesson.plus && lesson.category === category,
          );
          if (items.length === 0) return null;

          return (
            <Group
              key={category}
              title={t(category)}
              subtitle={t("{n} lessons in this group", { n: items.length })}
              done={0}
              total={items.length}
            >
              <ul className="space-y-2">
                {items.map((lesson) => (
                  <li key={lesson.slug}>
                    <Link
                      href="/plans"
                      className="flex items-center justify-between gap-3 rounded-2xl bg-sand-100 px-4 py-3 hover:bg-sand-200"
                    >
                      <span className="display min-w-0 truncate text-lg font-bold text-cocoa-800">
                        {lesson.title}
                      </span>
                      <StatusPill done={false} plus />
                    </Link>
                  </li>
                ))}
              </ul>
            </Group>
          );
        })}
      </div>
    </div>
  );
}
