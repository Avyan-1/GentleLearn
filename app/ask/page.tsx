"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useApp } from "@/components/app-provider";
import { Button, Card, LinkButton, PageTitle } from "@/components/ui";

export default function AskPage() {
  const router = useRouter();
  const { ready, phone, activeLearner, learners, questions, askQuestion } =
    useApp();
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (ready && !phone) router.replace("/login");
  }, [ready, phone, router]);

  if (!ready || !phone) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  const mine = questions.filter(
    (question) => question.learnerId === activeLearner?.id,
  );

  return (
    <div className="mx-auto max-w-2xl px-5 pt-8 pb-16">
      <PageTitle
        title="Ask a question"
        subtitle="Type it in your own words. A family member will see it in the Family corner."
      />

      {!activeLearner ? (
        <Card className="mt-8">
          <p className="text-lg text-cocoa-700">
            {learners.length === 0
              ? "Add a learner in the Family corner first, then come back to ask."
              : "Choose who is learning today, then come back to ask."}
          </p>
          <LinkButton href={learners.length === 0 ? "/family" : "/lessons"} className="mt-5">
            {learners.length === 0 ? "Go to the Family corner" : "Choose a name"}
          </LinkButton>
        </Card>
      ) : (
        <>
          <form
            className="mt-8"
            onSubmit={(event) => {
              event.preventDefault();
              if (!text.trim()) return;
              askQuestion(text.trim());
              setText("");
              setSent(true);
            }}
          >
            <label
              htmlFor="question"
              className="mb-2 block text-lg font-bold text-cocoa-800"
            >
              What would you like to ask, {activeLearner.name}?
            </label>
            <textarea
              id="question"
              value={text}
              onChange={(event) => {
                setText(event.target.value);
                setSent(false);
              }}
              rows={4}
              placeholder="For example: How do I send a photo to my sister?"
              className="w-full rounded-2xl border-2 border-sand-300 bg-white px-4 py-3 text-lg text-cocoa-800 outline-none placeholder:text-cocoa-500/60 focus:border-forest-500"
            />
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={!text.trim()} size="lg">
                Send my question
              </Button>
              <span className="text-sm font-semibold text-cocoa-600">
                Free plan: 3 questions a day per learner.
              </span>
            </div>
          </form>

          {sent ? (
            <p
              role="status"
              className="mt-5 rounded-2xl border-2 border-forest-500 bg-white px-5 py-4 font-semibold text-forest-700"
            >
              Thank you — your question is saved for your family to read.
            </p>
          ) : null}

          <section className="mt-10">
            <h2 className="text-2xl text-cocoa-800">Your questions</h2>
            {mine.length === 0 ? (
              <p className="mt-3 text-cocoa-700">
                Nothing yet. Ask anything — there is no such thing as a silly
                question here.
              </p>
            ) : (
              <ul className="mt-4 space-y-3">
                {[...mine].reverse().map((question) => (
                  <li key={question.id}>
                    <Card className="p-5">
                      <p className="text-lg text-cocoa-800">{question.text}</p>
                      <p className="mt-2 text-sm font-semibold text-cocoa-600">
                        Waiting for a family member to answer
                      </p>
                    </Card>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </>
      )}
    </div>
  );
}
