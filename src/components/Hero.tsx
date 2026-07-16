import { CtaButton } from "./CtaButton";

export function Hero({
  title,
  sub,
  ctaLabel,
  ctaHref,
  microTrust,
}: {
  title: React.ReactNode;
  sub: string;
  ctaLabel?: string;
  ctaHref?: string;
  microTrust?: string;
}) {
  return (
    <section className="border-b border-line bg-paper-warm">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <h1 className="text-4xl leading-tight font-bold tracking-tight text-balance md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-ink-soft md:text-xl">
          {sub}
        </p>
        {ctaLabel && ctaHref && (
          <div className="mt-10">
            <CtaButton href={ctaHref}>{ctaLabel}</CtaButton>
            {microTrust && (
              <p className="mt-4 text-sm text-ink-faint">{microTrust}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
