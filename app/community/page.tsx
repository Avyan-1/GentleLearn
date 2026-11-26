"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/components/app-provider";
import { useT } from "@/components/i18n";
import { Button, Card, PageTitle, cx } from "@/components/ui";
import { hasHelped, markHelped } from "@/lib/store";

function prettyDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function CommunityPage() {
  const router = useRouter();
  const {
    ready,
    phone,
    activeLearner,
    stories,
    shareStory,
  } = useApp();
  const t = useT();

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [shared, setShared] = useState(false);
  const [helped, setHelped] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (ready && !phone) router.replace("/login");
  }, [ready, phone, router]);

  useEffect(() => {
    if (activeLearner) setName((value) => value || activeLearner.name);
  }, [activeLearner]);

  useEffect(() => {
    const map: Record<string, boolean> = {};
    for (const story of stories) {
      if (hasHelped(story.id)) map[story.id] = true;
    }
    setHelped(map);
  }, [stories]);

  if (!ready || !phone) {
    return <div className="min-h-[60vh]" aria-busy="true" />;
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!text.trim()) return;
    shareStory(name, text);
    setText("");
    setShared(true);
  }

  return (
    <div className="mx-auto max-w-3xl px-5 pt-8 pb-16">
      <PageTitle
        title={t("Community stories")}
        subtitle={t(
          "Real stories from other families. Read them, nod along, and add your own.",
        )}
      />

      <Card className="mt-8">
        <h2 className="text-xl text-cocoa-800">{t("Share your story")}</h2>
        <p className="mt-1 text-cocoa-700">
          {t(
            "A call, a message or a near miss — your story may warn someone else.",
          )}
        </p>

        {shared ? (
          <p className="mt-4 rounded-2xl bg-forest-500/10 px-4 py-3 font-bold text-forest-700">
            {t("Thank you for sharing. Your story is now on this page.")}
          </p>
        ) : null}

        <form onSubmit={submit} className="mt-4 space-y-4">
          <label className="block">
            <span className="font-bold text-cocoa-800">
              {t("Your name (optional)")}
            </span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 w-full rounded-2xl border-2 border-sand-200 bg-sand-50 px-4 py-3 text-lg text-cocoa-800 outline-none focus:border-forest-500"
              placeholder={t("For example: Sunita, 70 · Delhi")}
            />
          </label>

          <label className="block">
            <span className="font-bold text-cocoa-800">
              {t("What happened?")}
            </span>
            <textarea
              value={text}
              onChange={(event) => {
                setText(event.target.value);
                setShared(false);
              }}
              rows={4}
              className="mt-1 w-full rounded-2xl border-2 border-sand-200 bg-sand-50 px-4 py-3 text-lg text-cocoa-800 outline-none focus:border-forest-500"
              placeholder={t(
                "For example: Someone called about my electricity bill…",
              )}
            />
          </label>

          <p className="rounded-2xl bg-sand-100 px-4 py-3 text-sm font-semibold text-cocoa-700">
            {t(
              "Please keep it safe: no phone numbers, account numbers or passwords.",
            )}
          </p>

          <Button type="submit" disabled={!text.trim()}>
            {t("Share with the community")}
          </Button>
        </form>
      </Card>

      <h2 className="mt-10 text-2xl text-cocoa-800 sm:text-3xl">
        {t("Latest stories")}
      </h2>

      {stories.length === 0 ? (
        <p className="mt-3 rounded-3xl bg-sand-100 px-5 py-6 text-cocoa-700">
          {t("No stories yet. Yours can be the first.")}
        </p>
      ) : (
        <ul className="mt-4 space-y-4">
          {stories.map((story) => {
            const didHelp = Boolean(helped[story.id]);
            return (
              <Card as="li" key={story.id}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="display text-lg font-bold text-cocoa-800">
                    {story.name}
                  </p>
                  <p className="text-sm font-semibold text-cocoa-600">
                    {prettyDate(story.createdAt)}
                  </p>
                </div>
                <p className="mt-2 text-lg leading-relaxed text-cocoa-700">
                  {story.text}
                </p>
                <button
                  type="button"
                  disabled={didHelp}
                  onClick={() => {
                    markHelped(story.id);
                    setHelped((current) => ({
                      ...current,
                      [story.id]: true,
                    }));
                  }}
                  className={cx(
                    "mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border-2 px-4 py-2 font-bold transition-colors",
                    didHelp
                      ? "border-forest-500 bg-forest-500/10 text-forest-700"
                      : "border-sand-200 bg-white text-cocoa-700 hover:bg-sand-100",
                  )}
                >
                  <span aria-hidden="true">{didHelp ? "🙏" : "🤝"}</span>
                  {didHelp ? t("Thank you for saying so") : t("This helped me")}
                </button>
              </Card>
            );
          })}
        </ul>
      )}
    </div>
  );
}
