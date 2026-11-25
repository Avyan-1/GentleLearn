"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useApp } from "@/components/app-provider";
import { useT } from "@/components/i18n";
import { Button, Card, LinkButton, PageTitle, cx } from "@/components/ui";
import { localizeLesson } from "@/lib/i18n";
import { freeLessons } from "@/lib/lessons";
import { getProgress } from "@/lib/store";

export default function FamilyPage() {
  const router = useRouter();
  const {
    ready,
    phone,
    learners,
    activeLearnerId,
    addLearner,
    renameLearner,
    removeLearner,
    selectLearner,
    questions,
    language,
  } = useApp();
  const t = useT();

  const [name, setName] = useState("");
  const [editing, setEditing] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [justAdded, setJustAdded] = useState<string | null>(null);

  useEffect(() => {
    if (ready && !phone) router.replace("/login");
  }, [ready, phone, router]);

  if (!ready || !phone) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  const added = learners.find((learner) => learner.id === justAdded);

  return (
    <div className="mx-auto max-w-3xl px-5 pt-8 pb-16">
      <PageTitle
        title={t("Family corner")}
        subtitle={t(
          "A calm helper for the people who set things up. Only what's needed — no clutter.",
        )}
      />

      <Card className="mt-8">
        <h2 className="text-xl text-cocoa-800">
          {t("Add a family member to learn")}
        </h2>
        <form
          className="mt-4 flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            const learner = addLearner(name);
            setName("");
            if (learner) {
              selectLearner(learner.id);
              setJustAdded(learner.id);
            }
          }}
        >
          <label htmlFor="learner" className="sr-only">
            {t("Their name")}
          </label>
          <input
            id="learner"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t("Type their name, e.g. Mary")}
            className="min-h-14 flex-1 rounded-2xl border-2 border-sand-300 bg-white px-4 text-lg text-cocoa-800 outline-none placeholder:text-cocoa-500/60 focus:border-forest-500"
          />
          <Button type="submit" disabled={!name.trim()} className="sm:w-32">
            {t("Add")}
          </Button>
        </form>

        {added ? (
          <div className="mt-5 rounded-2xl border-2 border-forest-500 bg-forest-500/10 p-5">
            <p className="display text-xl text-cocoa-800">
              {t("{name} is ready to learn", { name: added.name })}
            </p>
            <p className="mt-1 text-cocoa-700">
              {t(
                "Their lessons are set up. Tap below and the first lesson is one tap away.",
              )}
            </p>
            <LinkButton href="/lessons" className="mt-4" size="lg">
              {t("Start learning as {name}", { name: added.name })}
            </LinkButton>
          </div>
        ) : null}
      </Card>

      {learners.length === 0 ? (
        <p className="mt-6 text-lg text-cocoa-700">
          {t("No learners yet. Add the first name above.")}
        </p>
      ) : (
        <ul className="mt-6 space-y-4">
          {learners.map((learner, index) => {
            const done = Object.keys(getProgress(phone, learner.id)).length;
            const percent = Math.round((done / freeLessons.length) * 100);

            return (
              <li key={learner.id}>
                <Card>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={cx(
                          "display flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold",
                          index % 2 === 0
                            ? "bg-forest-600 text-white"
                            : "bg-amber-400 text-cocoa-800",
                        )}
                        aria-hidden="true"
                      >
                        {learner.name.charAt(0).toUpperCase()}
                      </span>
                      <div>
                        <h3 className="text-2xl text-cocoa-800">{learner.name}</h3>
                        <p className="text-sm font-semibold text-cocoa-600">
                          {t("{done} of {total} free lessons finished", {
                            done,
                            total: freeLessons.length,
                          })}
                        </p>
                      </div>
                    </div>

                    {editing === learner.id ? (
                      <form
                        className="flex flex-wrap items-center gap-2"
                        onSubmit={(event) => {
                          event.preventDefault();
                          renameLearner(learner.id, editName);
                          setEditing(null);
                        }}
                      >
                        <label htmlFor={`rename-${learner.id}`} className="sr-only">
                          {t("New name")}
                        </label>
                        <input
                          id={`rename-${learner.id}`}
                          value={editName}
                          onChange={(event) => setEditName(event.target.value)}
                          className="min-h-11 w-40 rounded-xl border-2 border-sand-300 px-3 text-lg outline-none focus:border-forest-500"
                        />
                        <Button type="submit" className="min-h-11 px-4 text-base">
                          {t("Save")}
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="min-h-11 px-3 text-base"
                          onClick={() => setEditing(null)}
                        >
                          {t("Cancel")}
                        </Button>
                      </form>
                    ) : (
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => {
                            setEditing(learner.id);
                            setEditName(learner.name);
                          }}
                          className="font-semibold text-cocoa-700 underline underline-offset-4"
                        >
                          {t("Change name")}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (
                              window.confirm(
                                t("Remove {name}? Their progress will be deleted.", {
                                  name: learner.name,
                                }),
                              )
                            ) {
                              removeLearner(learner.id);
                            }
                          }}
                          className="font-semibold text-red-600 underline underline-offset-4"
                        >
                          {t("Remove")}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-sand-200">
                    <div
                      className="h-full rounded-full bg-forest-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {activeLearnerId === learner.id ? (
                      <span className="rounded-full bg-forest-500/15 px-3 py-1 text-sm font-bold text-forest-700">
                        {t("Learning as {name}", { name: learner.name })}
                      </span>
                    ) : (
                      <Button
                        variant="outline"
                        className="min-h-11 px-4 text-base"
                        onClick={() => selectLearner(learner.id)}
                      >
                        {t("Learn as {name}", { name: learner.name })}
                      </Button>
                    )}

                    <LinkButton
                      href="/lessons"
                      variant="ghost"
                      className="min-h-11 px-3 text-base"
                      onClick={() => selectLearner(learner.id)}
                    >
                      {t("Open lessons →")}
                    </LinkButton>
                  </div>

                  <details className="group mt-4 rounded-2xl border-2 border-sand-200">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-bold text-cocoa-800 hover:bg-sand-50 [&::-webkit-details-marker]:hidden">
                      <span>{t("See lesson progress")}</span>
                      <span className="flex items-center gap-2 text-sm font-semibold text-cocoa-600">
                        {done}/{freeLessons.length}
                        <span
                          aria-hidden="true"
                          className="text-base transition-transform group-open:rotate-180"
                        >
                          ▾
                        </span>
                      </span>
                    </summary>
                    <ul className="space-y-2 border-t-2 border-sand-100 px-3 py-3">
                      {freeLessons.map((lesson) => {
                        const finished = Boolean(
                          getProgress(phone, learner.id)[lesson.slug],
                        );

                        return (
                          <li
                            key={lesson.slug}
                            className="flex items-center justify-between gap-3 rounded-xl bg-sand-100 px-4 py-2.5"
                          >
                            <span className="font-semibold text-cocoa-800">
                              {localizeLesson(lesson, language).title}
                            </span>
                            <span
                              className={cx(
                                "shrink-0 text-sm font-bold",
                                finished ? "text-forest-700" : "text-cocoa-600",
                              )}
                            >
                              {finished ? t("Finished") : t("Not started")}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </Card>
              </li>
            );
          })}
        </ul>
      )}

      <section className="mt-10">
        <h2 className="text-2xl text-cocoa-800 sm:text-3xl">
          {t("Questions from learners")}
        </h2>

        {questions.length === 0 ? (
          <p className="mt-3 text-lg text-cocoa-700">
            {t("No questions yet. They will appear here when a learner asks one.")}
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {questions.map((question) => (
              <li key={question.id}>
                <Card className="p-5">
                  <p className="text-lg text-cocoa-800">{question.text}</p>
                  <p className="mt-2 text-sm font-semibold text-cocoa-600">
                    {t("From {name}", { name: question.learnerName })}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <LinkButton href="/ask" variant="outline">
            {t("Ask a question")}
          </LinkButton>
        </div>
      </section>

      <p className="mt-10 text-cocoa-600">
        {t(
          "Everything here is private to your family and only used to keep lessons personal.",
        )}
      </p>
    </div>
  );
}
