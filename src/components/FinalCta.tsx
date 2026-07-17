import { CtaButton } from "./CtaButton";
import { LogoFrameDecor } from "./Brand";

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
    <section className="relative overflow-hidden border-t border-line bg-twilight-deep">
      <LogoFrameDecor variant="corner" opacity={0.4} />
      <div className="relative mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="text-3xl leading-snug font-bold tracking-tight text-balance md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          {text}
        </p>
        <div className="mt-10">
          <CtaButton href={ctaHref}>{ctaLabel}</CtaButton>
          {microTrust && (
            <p className="mt-4 text-sm text-ink-faint">{microTrust}</p>
          )}
        </div>
      </div>
    </section>
  );
}
