"use client";

import { useT } from "@/components/i18n";

export function HeroIllustration({ className = "" }: { className?: string }) {
  const t = useT();

  return (
    <svg
      viewBox="0 0 600 480"
      className={className}
      role="img"
      aria-label="A phone showing a video call between a grandmother and her grandchild, with the GentleLearn bunny beside it"
    >
      {/* soft backdrop */}
      <rect x="26" y="26" width="548" height="428" rx="72" fill="#faf1df" />
      <circle cx="492" cy="96" r="34" fill="#f2b749" />
      <circle cx="120" cy="404" r="46" fill="#f4e3c3" />
      <circle cx="512" cy="404" r="26" fill="#f4e3c3" />

      {/* phone */}
      <g transform="rotate(-5 300 240)">
        <rect x="198" y="54" width="214" height="372" rx="44" fill="#33281f" />
        <rect x="211" y="67" width="188" height="346" rx="34" fill="#fdf9f0" />
        <rect x="262" y="79" width="86" height="8" rx="4" fill="#ecd3a6" />

        {/* grandchild tile */}
        <rect x="223" y="101" width="164" height="122" rx="20" fill="#3f7d5e" />
        <circle cx="282" cy="150" r="21" fill="#f2b749" />
        <path d="M250 199c0-18 14-31 32-31s32 13 32 31z" fill="#f2b749" />
        <rect x="238" y="110" width="58" height="16" rx="8" fill="#ffffff" opacity="0.22" />

        {/* grandmother tile */}
        <rect x="223" y="233" width="164" height="100" rx="20" fill="#f4e3c3" />
        <circle cx="305" cy="266" r="18" fill="#5c4a3a" />
        <path d="M277 306c0-15 12-27 28-27s28 12 28 27z" fill="#5c4a3a" />
        <rect x="238" y="242" width="44" height="16" rx="8" fill="#ffffff" opacity="0.6" />

        {/* call controls */}
        <circle cx="262" cy="360" r="17" fill="#3f7d5e" />
        <circle cx="300" cy="360" r="17" fill="#ecd3a6" />
        <circle cx="338" cy="360" r="17" fill="#e40014" />
      </g>

      {/* floating "read aloud" card */}
      <g transform="rotate(-3 148 122)">
        <rect x="52" y="96" width="196" height="66" rx="18" fill="#ffffff" stroke="#f4e3c3" strokeWidth="3" />
        <circle cx="86" cy="129" r="16" fill="#f2b749" />
        <path d="M80 122v14l12-7z" fill="#33281f" />
        <text x="112" y="135" fontFamily="Nunito, system-ui, sans-serif" fontSize="18" fontWeight="700" fill="#33281f">
          {t("Read this aloud")}
        </text>
      </g>

      {/* floating progress card */}
      <g transform="rotate(4 470 300)">
        <rect x="398" y="266" width="164" height="72" rx="18" fill="#ffffff" stroke="#f4e3c3" strokeWidth="3" />
        <text x="416" y="294" fontFamily="Nunito, system-ui, sans-serif" fontSize="15" fontWeight="700" fill="#5c4a3a">
          {t("Step {a} of {b}", { a: 2, b: 4 })}
        </text>
        <rect x="416" y="304" width="128" height="10" rx="5" fill="#f4e3c3" />
        <rect x="416" y="304" width="64" height="10" rx="5" fill="#3f7d5e" />
        <text x="416" y="330" fontFamily="Nunito, system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#2a5641">
          {t("Well done!")}
        </text>
      </g>

      {/* bunny */}
      <g transform="translate(74 268)">
        <ellipse cx="34" cy="26" rx="9" ry="20" fill="#f2b749" transform="rotate(-12 34 26)" />
        <ellipse cx="62" cy="26" rx="9" ry="20" fill="#f2b749" transform="rotate(12 62 26)" />
        <circle cx="48" cy="52" r="26" fill="#f2b749" />
        <path d="M8 78h80c0 20-18 32-40 32S8 98 8 78Z" fill="#3f7d5e" />
      </g>
    </svg>
  );
}
