import type { Metadata } from "next";
import { Suspense } from "react";
import { KontaktForm } from "@/components/KontaktForm";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kostenloses Erstgespräch vereinbaren: Vertragscheck, Struktur-Check, Konditions-Check oder Strategie-Gespräch. Leibinn Consulting, Region Stuttgart.",
  alternates: { canonical: "/kontakt" },
};

/*
 * [PLATZHALTER] Interims-Copy: wird durch das Copy-Dokument für /kontakt
 * ersetzt, sobald es vorliegt.
 */
export default function KontaktPage() {
  return (
    <>
      <section className="border-b border-line bg-paper-warm">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            Sprechen wir über Ihr Vermögen.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Das Erstgespräch ist kostenlos und unverbindlich. Sagen Sie uns
            kurz, worum es geht, und wir melden uns zeitnah bei Ihnen.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-5xl gap-14 px-6 py-16 md:grid-cols-[1fr_18rem] md:py-24">
          <Suspense fallback={null}>
            <KontaktForm />
          </Suspense>
          <aside className="space-y-8 text-sm leading-relaxed">
            <div>
              <h2 className="font-heading text-lg font-bold">
                Direkt erreichen
              </h2>
              <p className="mt-3 text-ink-soft">
                {/* [PLATZHALTER] Echte Kontaktdaten einsetzen */}
                <a
                  href={`mailto:${site.email}`}
                  className="block text-accent underline underline-offset-2"
                >
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-accent underline underline-offset-2"
                >
                  {site.phone}
                </a>
              </p>
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold">So geht es weiter</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-4 text-ink-soft">
                <li>Sie senden Ihre Anfrage.</li>
                <li>Wir melden uns zur Terminabstimmung.</li>
                <li>
                  Im Erstgespräch klären wir Ihre Situation und die nächsten
                  Schritte.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Kontakt", path: "/kontakt" }])} />
    </>
  );
}
