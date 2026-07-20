import Image from "next/image";
import Link from "next/link";
import { GoldFrameDecor } from "@/components/Brand";

/**
 * Goldene CTA-Karte als Abschluss: erhöhte Karte mit runden Ecken,
 * Cedrik-Freisteller ragt links leicht über die Oberkante hinaus.
 */
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
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:pb-24 lg:pt-28">
        <div className="relative isolate rounded-3xl bg-fawn text-twilight-deep shadow-2xl shadow-black/40">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
          >
            <GoldFrameDecor variant="corner" />
          </div>

          {/* Desktop: Freisteller links, unten bündig, Kopf ragt über die Karte */}
          <div className="pointer-events-none absolute bottom-0 left-10 hidden h-[112%] lg:block">
            <Image
              src="/images/leibinn-cta.webp"
              alt="Cedrik Leibinn"
              width={870}
              height={1000}
              className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-xl"
            />
          </div>

          <div className="grid items-center gap-10 px-8 py-12 md:grid-cols-12 md:px-12 md:py-14">
            {/* Mobil/Tablet: Freisteller im Fluss, ragt über die Oberkante */}
            <div className="-mt-24 md:col-span-12 lg:hidden">
              <Image
                src="/images/leibinn-cta.webp"
                alt="Cedrik Leibinn"
                width={870}
                height={1000}
                className="h-48 w-auto drop-shadow-xl"
              />
            </div>

            <div className="md:col-span-7 lg:col-span-4 lg:col-start-6">
              <h2 className="text-3xl leading-[1.1] font-bold tracking-tight text-balance md:text-4xl">
                {title}
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-twilight-deep/75">
                {text}
              </p>
            </div>
            <div className="md:col-span-5 md:justify-self-end lg:col-span-3 lg:col-start-10">
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
        </div>
      </div>
    </section>
  );
}
