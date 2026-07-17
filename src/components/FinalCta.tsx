import { CtaButton } from "./CtaButton";
import { DotGrid } from "./VisualPanel";

export function FinalCta({
  title,
  text,
  ctaLabel,
  ctaHref,
  microTrust,
}: {
  title: React.ReactNode;
  text: string;
  ctaLabel: string;
  ctaHref: string;
  microTrust?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <DotGrid className="absolute inset-0 h-full w-full text-white/10" />
      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="text-3xl leading-snug font-bold tracking-tight text-balance md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          {text}
        </p>
        <div className="mt-10">
          <CtaButton href={ctaHref}>{ctaLabel}</CtaButton>
          {microTrust && (
            <p className="mt-4 text-sm text-white/50">{microTrust}</p>
          )}
        </div>
      </div>
    </section>
  );
}
