"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useApp } from "@/components/app-provider";
import { Bunny, LinkButton, cx } from "@/components/ui";
import { freeLessons } from "@/lib/lessons";
import { getProgress } from "@/lib/store";

const avatarStyles = [
  "bg-forest-600 text-white",
  "bg-amber-400 text-cocoa-800",
  "bg-sand-300 text-cocoa-800",
  "bg-cocoa-700 text-white",
];

export default function LearnersPage() {
  const router = useRouter();
  const { ready, phone, learners, selectLearner } = useApp();

  useEffect(() => {
    if (ready && !phone) router.replace("/login");
  }, [ready, phone, router]);

  if (!ready || !phone) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  return (
    <div className="mx-auto max-w-3xl px-5 pt-8 pb-16">
      <div className="text-center">
        <Bunny className="mx-auto h-24 w-24" />
        <h1 className="mt-5 text-4xl text-cocoa-800 sm:text-5xl">
          Who is learning today?
        </h1>
        <p className="mx-auto mt-3 max-w-md text-lg text-cocoa-700">
          Tap your name. Your lessons and progress are kept just for you.
        </p>
      </div>

      {learners.length === 0 ? (
        <div className="mt-10 rounded-[2rem] border-2 border-dashed border-sand-300 bg-white px-6 py-10 text-center">
          <p className="text-xl font-bold text-cocoa-800">No names yet</p>
          <p className="mt-2 text-cocoa-700">
            A family member can add the first learner in the Family corner.
          </p>
          <LinkButton href="/family" className="mt-6" size="lg">
            Go to the Family corner
          </LinkButton>
        </div>
      ) : (
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {learners.map((learner, index) => {
            const done = Object.keys(getProgress(phone, learner.id)).length;
            const percent = Math.round((done / freeLessons.length) * 100);

            return (
              <li key={learner.id}>
                <button
                  type="button"
                  onClick={() => {
                    selectLearner(learner.id);
                    router.push("/lessons");
                  }}
                  className="group flex w-full items-center gap-4 rounded-3xl border-2 border-sand-200 bg-white p-5 text-left transition-all hover:-translate-y-0.5 hover:border-forest-500 hover:shadow-lg"
                >
                  <span
                    className={cx(
                      "display flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl font-bold",
                      avatarStyles[index % avatarStyles.length],
                    )}
                    aria-hidden="true"
                  >
                    {learner.name.charAt(0).toUpperCase()}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="display block truncate text-2xl font-bold text-cocoa-800">
                      {learner.name}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-cocoa-600">
                      {done === 0
                        ? "Ready for the first lesson"
                        : `${done} lesson${done === 1 ? "" : "s"} finished`}
                    </span>
                    <span className="mt-2 block h-2 w-full overflow-hidden rounded-full bg-sand-200">
                      <span
                        className="block h-full rounded-full bg-forest-500"
                        style={{ width: `${Math.max(percent, done > 0 ? 8 : 0)}%` }}
                      />
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-2xl text-forest-600 transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </li>
            );
          })}

          <li>
            <Link
              href="/family"
              className="flex h-full min-h-[7.5rem] items-center gap-4 rounded-3xl border-2 border-dashed border-sand-300 bg-sand-50 p-5 text-left hover:border-forest-500 hover:bg-sand-100"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-sand-300 bg-white text-3xl text-cocoa-600">
                +
              </span>
              <span>
                <span className="display block text-xl font-bold text-cocoa-800">
                  Add someone new
                </span>
                <span className="mt-1 block text-sm font-semibold text-cocoa-600">
                  A family member can set this up
                </span>
              </span>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
