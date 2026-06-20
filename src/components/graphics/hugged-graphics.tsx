import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type IllustrationTone = "hero" | "calm" | "community" | "soft";

function svgDataUri(svg: string) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function illustrationSrc(tone: IllustrationTone) {
  const palette = {
    hero: {
      coral: "#FF7A6B",
      mint: "#63C7B2",
      ink: "#111111",
      wash: "#F8F6F4",
    },
    calm: {
      coral: "#FF9A90",
      mint: "#7FD3C1",
      ink: "#111111",
      wash: "#FCFBFA",
    },
    community: {
      coral: "#FF7A6B",
      mint: "#A6E0D3",
      ink: "#111111",
      wash: "#F8F6F4",
    },
    soft: {
      coral: "#FFB3A9",
      mint: "#B5E7DC",
      ink: "#111111",
      wash: "#FBFAF8",
    },
  }[tone];

  return svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1120" fill="none">
      <rect width="900" height="1120" rx="96" fill="${palette.wash}"/>
      <ellipse cx="285" cy="408" rx="248" ry="248" fill="${palette.coral}" fill-opacity="0.22"/>
      <ellipse cx="610" cy="330" rx="168" ry="168" fill="${palette.mint}" fill-opacity="0.24"/>
      <ellipse cx="512" cy="726" rx="308" ry="258" fill="${palette.mint}" fill-opacity="0.14"/>
      <path d="M255 722c0-110 84-198 190-198 76 0 130 35 170 95 31 48 52 108 52 168v130c0 59-47 106-106 106H361c-59 0-106-47-106-106V722Z" fill="#FFF" fill-opacity="0.76"/>
      <path d="M370 584c72-62 160-58 216 0 31 33 51 79 51 127 0 20-18 36-38 36H358c-26 0-46-22-43-48 6-47 23-86 55-115Z" fill="${palette.ink}" fill-opacity="0.10"/>
      <circle cx="395" cy="522" r="82" fill="#FFF" fill-opacity="0.86"/>
      <circle cx="395" cy="522" r="58" fill="${palette.coral}" fill-opacity="0.30"/>
      <circle cx="510" cy="584" r="56" fill="#FFF" fill-opacity="0.86"/>
      <circle cx="510" cy="584" r="38" fill="${palette.mint}" fill-opacity="0.36"/>
      <path d="M298 258c16-34 48-58 86-58h76c20 0 37 14 42 33l17 66H275l23-41Z" fill="${palette.coral}" fill-opacity="0.22"/>
      <rect x="194" y="860" width="512" height="98" rx="49" fill="${palette.ink}" fill-opacity="0.06"/>
      <rect x="226" y="886" width="156" height="18" rx="9" fill="${palette.coral}" fill-opacity="0.4"/>
      <rect x="404" y="886" width="186" height="18" rx="9" fill="${palette.mint}" fill-opacity="0.46"/>
      <circle cx="726" cy="214" r="44" fill="${palette.coral}" fill-opacity="0.26"/>
      <circle cx="746" cy="208" r="18" fill="#FFF" fill-opacity="0.6"/>
    </svg>
  `);
}

export function CoralBlob({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 420"
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
      fill="none"
    >
      <path
        d="M120 64c68-49 158-59 228-27 68 31 118 99 130 177 11 76-9 155-61 209-51 53-132 82-213 73-81-8-159-52-192-120-34-68-23-160 25-226 20-27 51-63 83-86Z"
        fill="url(#coral-blob)"
      />
      <defs>
        <radialGradient id="coral-blob" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260 210) rotate(90) scale(190 230)">
          <stop stopColor="#FF7A6B" stopOpacity="0.92" />
          <stop offset="1" stopColor="#FF7A6B" stopOpacity="0.18" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function GlowOrb({
  className,
  tone = "coral",
}: {
  className?: string;
  tone?: "coral" | "mint";
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        tone === "coral" ? "bg-coral/25" : "bg-mint/25",
        className
      )}
    />
  );
}

export function DecorativeSparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M12 2.5 13.8 9l6.7 1.2-6.1 2.7L12 19.5l-2.4-6.6-6.1-2.7L10.2 9 12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DecorativeSwirl({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 60" aria-hidden="true" className={className} fill="none">
      <path d="M3 38c18-32 47-28 59-11 11 17 7 35 24 35 18 0 31-23 41-36 13-18 35-25 50-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DecorativeQuote({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 44" aria-hidden="true" className={className} fill="none">
      <path d="M18 7c-6 6-8 11-8 18 0 6 3 11 8 11 4 0 7-2 7-6 0-3-2-5-5-5 0-7 2-11 7-17l-9-1Zm24 0c-6 6-8 11-8 18 0 6 3 11 8 11 4 0 7-2 7-6 0-3-2-5-5-5 0-7 2-11 7-17l-9-1Z" fill="currentColor" fillOpacity="0.8" />
    </svg>
  );
}

export function DecorativeCurve({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 100" aria-hidden="true" className={className} fill="none">
      <path d="M8 78c42-28 71-36 107-31 44 6 59 32 88 32 31 0 48-23 72-47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M171 54c16 1 33 10 44 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 10" />
    </svg>
  );
}

export function CircleStack({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      style={{ aspectRatio: "4 / 5" }}
      className={cn("relative w-full overflow-hidden rounded-[2rem] bg-white/65 ring-1 ring-foreground/10", className)}
    >
      {children}
    </div>
  );
}
