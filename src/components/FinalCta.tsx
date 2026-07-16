import { CtaButton } from "./CtaButton";

export function FinalCta({
  title,
  text,
  ctaLabel,
  ctaHref,
}: {
  title: React.ReactNode;
  text: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="text-3xl leading-snug font-bold tracking-tight text-balance md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          {text}
        </p>
        <div className="mt-10">
          <CtaButton href={ctaHref}>{ctaLabel}</CtaButton>
        </div>
      </div>
    </section>
  );
}
