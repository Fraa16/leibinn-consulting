import Link from "next/link";

/** Goldenes Full-width-Banner als Abschluss-CTA (Section-Breaker). */
export function CtaBanner({
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
    <section className="bg-fawn text-twilight-deep">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <h2 className="text-3xl leading-[1.1] font-bold tracking-tight text-balance md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-twilight-deep/75">
            {text}
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-9 md:justify-self-end">
          <Link
            href={ctaHref}
            className="inline-block rounded-full bg-twilight-deep px-8 py-4 text-base font-semibold text-white shadow-lg shadow-twilight-deep/20 transition-all hover:-translate-y-0.5 hover:bg-twilight"
          >
            {ctaLabel}
          </Link>
          {microTrust && (
            <p className="mt-4 max-w-[18rem] text-sm text-twilight-deep/65">
              {microTrust}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
