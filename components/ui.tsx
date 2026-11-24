import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="display flex w-fit items-center gap-2 text-2xl font-bold text-cocoa-800 sm:text-3xl"
    >
      <svg viewBox="0 0 40 40" className="h-7 w-7" aria-hidden="true">
        <circle cx="20" cy="20" r="10" fill="#f2b749" />
      </svg>
      <span>GentleLearn</span>
    </Link>
  );
}

export function Bunny({ className = "h-24 w-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <ellipse cx="32" cy="19" rx="5.6" ry="12" fill="#f2b749" transform="rotate(-12 32 19)" />
      <ellipse cx="48" cy="19" rx="5.6" ry="12" fill="#f2b749" transform="rotate(12 48 19)" />
      <circle cx="40" cy="34" r="15" fill="#f2b749" />
      <path d="M9 51h62c0 12-13.9 19-31 19S9 63 9 51Z" fill="#3f7d5e" />
    </svg>
  );
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  block?: boolean;
};

export function Button({
  variant = "primary",
  size = "md",
  block = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        size === "lg" ? "min-h-14 px-8 text-xl" : "min-h-12 px-6 text-lg",
        block && "w-full",
        variant === "primary" &&
          "bg-forest-600 text-white shadow-[0_4px_0_0_var(--color-forest-700)] hover:bg-forest-500 active:translate-y-px active:shadow-none",
        variant === "outline" &&
          "border-2 border-sand-200 bg-white text-cocoa-800 hover:bg-sand-100",
        variant === "ghost" && "text-cocoa-700 hover:bg-sand-200",
        className,
      )}
    />
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  block = false,
  className,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  block?: boolean;
}) {
  return (
    <Link
      {...props}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-colors",
        size === "lg" ? "min-h-14 px-8 text-xl" : "min-h-12 px-6 text-lg",
        block && "w-full",
        variant === "primary" &&
          "bg-forest-600 text-white shadow-[0_4px_0_0_var(--color-forest-700)] hover:bg-forest-500 active:translate-y-px active:shadow-none",
        variant === "outline" &&
          "border-2 border-sand-200 bg-white text-cocoa-800 hover:bg-sand-100",
        variant === "ghost" && "text-cocoa-700 hover:bg-sand-200",
        className,
      )}
    />
  );
}

export function Card({
  className,
  children,
  as: Tag = "div",
  padded = true,
}: {
  className?: string;
  children: ReactNode;
  as?: "div" | "section" | "li" | "article";
  padded?: boolean;
}) {
  return (
    <Tag
      className={cx(
        "rounded-3xl border-2 border-sand-200 bg-white",
        padded && "p-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border-2 border-sand-200 bg-white px-4 py-1.5 text-xs font-extrabold tracking-[0.14em] text-cocoa-600 uppercase">
      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
      {children}
    </p>
  );
}

export function PageTitle({
  title,
  subtitle,
  center = false,
  children,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
  children?: ReactNode;
}) {
  return (
    <header className={cx("max-w-2xl", center && "mx-auto text-center")}>
      <h1 className="text-4xl text-cocoa-800 sm:text-5xl">{title}</h1>
      {subtitle ? (
        <p className="mt-4 text-lg text-cocoa-700 sm:text-xl">{subtitle}</p>
      ) : null}
      {children}
    </header>
  );
}

export { cx };
