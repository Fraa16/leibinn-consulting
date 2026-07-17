import { CtaButton } from "./CtaButton";
import type { FachbereichSlug } from "./icons";
import { HeroPanel } from "./VisualPanel";

/** Fachseiten-Hero: Text links, Illustrationsfläche mit Fakten-Karte rechts. */
export function SplitHero({
  kicker,
  title,
  sub,
  ctaLabel,
  ctaHref,
  microTrust,
  slug,
  fact,
  factLabel,
}: {
  kicker: string;
  title: React.ReactNode;
  sub: string;
  ctaLabel: string;
  ctaHref: string;
  microTrust?: string;
  slug: FachbereichSlug;
  fact: string;
  factLabel: string;
}) {
  return (
    <section className="border-b border-line bg-paper-warm">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.15fr_1fr] md:py-24">
        <div>
          <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {kicker}
          </p>
          <h1 className="text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl lg:text-[3.4rem]">
            {title}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            {sub}
          </p>
          <div className="mt-9">
            <CtaButton href={ctaHref}>{ctaLabel}</CtaButton>
            {microTrust && (
              <p className="mt-4 text-sm text-ink-faint">{microTrust}</p>
            )}
          </div>
        </div>
        <HeroPanel slug={slug} fact={fact} factLabel={factLabel} />
      </div>
    </section>
  );
}
