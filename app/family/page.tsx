"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useApp } from "@/components/app-provider";
import { Button, Card, LinkButton, PageTitle, cx } from "@/components/ui";
import { freeLessons } from "@/lib/lessons";

export default function FamilyPage() {
  const router = useRouter();
  const {
    ready,
    phone,
    learners,
    progress,
    activeLearnerId,
    addLearner,
    renameLearner,
    removeLearner,
    selectLearner,
    questions,
  } = useApp();

  const [name, setName] = useState("");
  const [editing, setEditing] = useState<string | null>(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    if (ready && !phone) router.replace("/login");
  }, [ready, phone, router]);

  if (!ready || !phone) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  return (
    <div className="mx-auto max-w-3xl px-5 pt-8 pb-16">
      <PageTitle
        title="Family corner"
        subtitle="A calm helper for the people who set things up. Only what's needed — no clutter."
      />

      <Card className="mt-8">
        <h2 className="text-xl text-cocoa-800">Add a family member to learn</h2>
        <form
          className="mt-4 flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            addLearner(name);
            setName("");
          }}
        >
          <label htmlFor="learner" className="sr-only">
            Their name
          </label>
          <input
            id="learner"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Type their name, e.g. Mary"
            className="min-h-14 flex-1 rounded-2xl border-2 border-sand-300 bg-white px-4 text-lg text-cocoa-800 outline-none placeholder:text-cocoa-500/60 focus:border-forest-500"
          />
          <Button type="submit" disabled={!name.trim()} className="sm:w-32">
            Add
          </Button>
        </form>
      </Card>

      {learners.length === 0 ? (
        <p className="mt-6 text-lg text-cocoa-700">
          No learners yet. Add the first name above.
        </p>
      ) : (
        <ul className="mt-6 space-y-4">
          {learners.map((learner) => {
            const learnerProgress =
              activeLearnerId === learner.id ? progress : {};
            const doneCount = Object.keys(learnerProgress).length;

            return (
              <li key={learner.id}>
                <Card>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    {editing === learner.id ? (
                      <form
                        className="flex flex-1 flex-wrap items-center gap-2"
                        onSubmit={(event) => {
                          event.preventDefault();
                          renameLearner(learner.id, editName);
                          setEditing(null);
                        }}
                      >
                        <label htmlFor={`rename-${learner.id}`} className="sr-only">
                          New name
                        </label>
                        <input
                          id={`rename-${learner.id}`}
                          value={editName}
                          onChange={(event) => setEditName(event.target.value)}
                          className="min-h-11 flex-1 rounded-xl border-2 border-sand-300 px-3 text-lg outline-none focus:border-forest-500"
                        />
                        <Button type="submit" className="min-h-11 px-4 text-base">
                          Save
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="min-h-11 px-3 text-base"
                          onClick={() => setEditing(null)}
                        >
                          Cancel
                        </Button>
                      </form>
                    ) : (
                      <>
                        <h3 className="text-2xl text-cocoa-800">{learner.name}</h3>
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            onClick={() => {
                              setEditing(learner.id);
                              setEditName(learner.name);
                            }}
                            className="font-semibold text-cocoa-700 underline underline-offset-4"
                          >
                            Change name
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              if (
                                window.confirm(
                                  `Remove ${learner.name}? Their progress on this device will be deleted.`,
                                )
                              ) {
                                removeLearner(learner.id);
                              }
                            }}
                            className="font-semibold text-red-600 underline underline-offset-4"
                          >
                            Remove
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  <p className="mt-2 text-sm font-semibold text-cocoa-600">
                    {doneCount} lesson{doneCount === 1 ? "" : "s"} finished on
                    this device
                  </p>

                  {activeLearnerId !== learner.id ? (
                    <button
                      type="button"
                      onClick={() => selectLearner(learner.id)}
                      className="mt-3 rounded-full border-2 border-sand-200 px-4 py-2 text-sm font-bold text-forest-700 hover:bg-sand-100"
                    >
                      Learn as {learner.name}
                    </button>
                  ) : null}

                  <ul className="mt-4 space-y-2">
                    {freeLessons.map((lesson) => (
                      <li
                        key={lesson.slug}
                        className="flex items-center justify-between gap-3 rounded-2xl bg-sand-100 px-4 py-3"
                      >
                        <span className="font-semibold text-cocoa-800">
                          {lesson.title}
                        </span>
                        <span
                          className={cx(
                            "shrink-0 text-sm font-bold",
                            learnerProgress[lesson.slug]
                              ? "text-forest-700"
                              : "text-cocoa-600",
                          )}
                        >
                          {learnerProgress[lesson.slug] ? "Finished" : "Not started"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            );
          })}
        </ul>
      )}

      <section className="mt-10">
        <h2 className="text-2xl text-cocoa-800 sm:text-3xl">
          Questions from learners
        </h2>

        {questions.length === 0 ? (
          <p className="mt-3 text-lg text-cocoa-700">
            No questions yet. They will appear here when a learner asks one.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {questions.map((question) => (
              <li key={question.id}>
                <Card className="p-5">
                  <p className="text-lg text-cocoa-800">{question.text}</p>
                  <p className="mt-2 text-sm font-semibold text-cocoa-600">
                    From {question.learnerName}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4">
          <LinkButton href="/ask" variant="outline">
            Ask a question
          </LinkButton>
        </div>
      </section>

      <p className="mt-10 text-cocoa-600">
        Everything here stays on this device and is only used to keep lessons
        personal.
      </p>
    </div>
  );
}
