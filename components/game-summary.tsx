"use client";

import { useT } from "@/components/i18n";
import { badgeById } from "@/lib/game";
import type { Game } from "@/lib/game";
import { cx } from "@/components/ui";

/**
 * The little rewards strip: stars, a streak and any badges earned so far.
 * Kept in one place so the Lessons page and the Account page always agree.
 */
export function GameSummary({
  game,
  className,
}: {
  game: Game;
  className?: string;
}) {
  const t = useT();
  const badges = game.badges
    .map((id) => badgeById(id))
    .filter((badge): badge is NonNullable<typeof badge> => Boolean(badge));

  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0",
  )}-${String(now.getDate()).padStart(2, "0")}`;
  const playedToday = game.lastDay === today;

  return (
    <section
      className={cx(
        "rounded-3xl border-2 border-amber-300 bg-amber-50 px-5 py-4",
        className,
      )}
      aria-label={t("Your stars and badges")}
    >
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <p className="flex items-center gap-2 text-lg font-extrabold text-cocoa-800">
          <span aria-hidden="true" className="text-2xl">
            ⭐
          </span>
          {t("{n} stars", { n: game.stars })}
        </p>
        <p className="flex items-center gap-2 text-lg font-extrabold text-cocoa-800">
          <span aria-hidden="true" className="text-2xl">
            🔥
          </span>
          {t("{n}-day streak", { n: game.streak })}
        </p>
        {game.bestStreak > game.streak ? (
          <p className="text-sm font-semibold text-cocoa-600">
            {t("Best streak: {n} days", { n: game.bestStreak })}
          </p>
        ) : null}
      </div>

      <div className="mt-3 border-t-2 border-amber-200 pt-3">
        <p className="text-xs font-extrabold tracking-[0.12em] text-cocoa-600 uppercase">
          {t("Your badges")}
        </p>
        {badges.length > 0 ? (
          <ul className="mt-2 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <li
                key={badge.id}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-sm font-bold text-cocoa-700"
              >
                <span aria-hidden="true">{badge.emoji}</span>
                {t(badge.label)}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-1 text-sm font-semibold text-cocoa-600">
            {t("Finish a lesson to earn your first badge.")}
          </p>
        )}
      </div>

      {game.stars > 0 && !playedToday && game.streak > 0 ? (
        <p className="mt-3 rounded-2xl bg-white/70 px-4 py-2 text-sm font-bold text-cocoa-700">
          {t("Finish a lesson today to keep your streak going.")}
        </p>
      ) : null}
    </section>
  );
}
