import type { FachbereichSlug } from "./icons";
import { fachbereichIcons } from "./icons";

/**
 * Bildersatz-Panels: gestaltete Illustrationsflächen an den Stellen, an denen
 * später echte Fotos stehen können (Austausch: next/image mit gleicher Größe).
 * Stock-Downloads sind in dieser Build-Umgebung durch die Netzwerk-Policy
 * blockiert, deshalb eigene Linien-Illustrationen im Markenstil.
 */

/** Feine Linien-Skyline (abstrahierte Architektur, Region Stuttgart). */
export function SkylineArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 260"
      fill="none"
      aria-hidden
      className={className}
      preserveAspectRatio="xMidYMax meet"
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
        {/* Häuserzeile */}
        <path d="M20 260V150l30-22 30 22v110" />
        <path d="M35 165h.01M65 165h.01M35 190h.01M65 190h.01M35 215h.01M65 215h.01" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M110 260V96h56v164" />
        <path d="M124 112h28M124 136h28M124 160h28M124 184h28M124 208h28M124 232h28" opacity=".55" />
        <path d="M196 260V140h44v120" />
        <path d="M208 156h20M208 180h20M208 204h20M208 228h20" opacity=".55" />
        {/* Turm mit Akzent */}
        <path d="M270 260V60h40v200" />
        <path d="M280 60V38h20v22" />
        <path d="M280 78h20M280 100h20M280 122h20M280 144h20M280 166h20M280 188h20M280 210h20M280 232h20" opacity=".55" />
        <path d="M340 260V170l28-20 28 20v90" />
        <path d="M354 186h.01M382 186h.01M354 212h.01M382 212h.01M354 238h.01" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M426 260V128h34v132" />
        <path d="M434 144h18M434 168h18M434 192h18M434 216h18M434 240h18" opacity=".55" />
        {/* Grundlinie */}
        <path d="M0 260h480" strokeWidth="2" />
      </g>
    </svg>
  );
}

/** Dezentes Punktraster als Hintergrund-Textur. */
export function DotGrid({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={className}>
      <defs>
        <pattern id="dotgrid" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.2" r="1.2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotgrid)" />
    </svg>
  );
}

/**
 * Hero-Panel der Fachseiten: Illustrationsfläche mit Bereichs-Icon als
 * Wasserzeichen, Skyline und schwebender Fakten-Karte.
 */
export function HeroPanel({
  slug,
  fact,
  factLabel,
}: {
  slug: FachbereichSlug;
  fact: string;
  factLabel: string;
}) {
  const Icon = fachbereichIcons[slug];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-cobalt via-twilight-soft to-twilight">
      <DotGrid className="absolute inset-0 h-full w-full text-azure/25" />
      <Icon className="absolute -top-8 -right-8 h-48 w-48 text-azure/20" />
      <div className="relative flex aspect-[4/3] items-end md:aspect-[5/4]">
        <SkylineArt className="w-full text-azure-light/40" />
      </div>
      <div className="absolute top-6 left-6 max-w-[15rem] rounded-xl border border-line-strong bg-twilight-deep/90 p-4 shadow-lg shadow-black/30 backdrop-blur">
        <p className="font-heading text-2xl font-bold text-fawn">{fact}</p>
        <p className="mt-1 text-sm leading-snug text-ink-soft">{factLabel}</p>
      </div>
    </div>
  );
}

/** Porträt-Platzhalter (Über uns), Austausch: public/images/cedrik-leibinn.jpg */
export function PortraitPanel({ name, role }: { name: string; role: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  // Feste helle Textfarben: die Karte bleibt auch in .theme-light dunkel
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-cobalt to-twilight-soft text-[#f4f5ff]">
      <DotGrid className="absolute inset-0 h-full w-full text-azure/25" />
      <div className="relative flex aspect-[4/5] flex-col items-center justify-center gap-6">
        <span className="flex h-36 w-36 items-center justify-center rounded-full border-2 border-azure-light/50 bg-twilight-deep font-heading text-5xl font-bold text-azure-light">
          {initials}
        </span>
        {/* [PLATZHALTER] Professionelles Porträtfoto einsetzen (Copy-Doc /ueber-uns) */}
        <p className="px-8 text-center text-sm text-[#f4f5ff]/50">
          Porträtfoto folgt
        </p>
      </div>
      <figcaption className="relative border-t border-white/15 bg-twilight-deep/80 px-6 py-4">
        <p className="font-heading text-lg font-bold">{name}</p>
        <p className="text-sm text-[#f4f5ff]/70">{role}</p>
      </figcaption>
    </figure>
  );
}
