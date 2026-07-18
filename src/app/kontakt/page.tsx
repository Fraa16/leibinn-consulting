import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { KontaktForm } from "@/components/KontaktForm";
import { LightSection } from "@/components/Theme";
import { Faq, type FaqItem } from "@/components/Faq";
import { CtaButton } from "@/components/CtaButton";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { IconMail, IconPhone, IconPin } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Kontakt & Erstgespräch | Leibinn Consulting" },
  description:
    "Kostenloses Erstgespräch buchen: 60 Minuten, online oder vor Ort in Böblingen, mit konkreter erster Einschätzung. Antwort innerhalb von 24 Stunden.",
  alternates: { canonical: "/kontakt" },
};

const faqItems: FaqItem[] = [
  {
    q: "Muss ich mich auf das Gespräch vorbereiten?",
    a: "Nein. Hilfreich ist ein grobes Bild Ihrer Situation: ungefähres Einkommen, vorhandene Anlagen, laufende Verpflichtungen, Ziele. Exakte Unterlagen sind im Erstgespräch nicht nötig, es geht um die Richtung und den größten Hebel, nicht um die zweite Nachkommastelle.",
  },
  {
    q: "Entstehen durch das Erstgespräch Verpflichtungen?",
    a: "Nein, keine. Das Gespräch ist kostenlos, es folgt kein Vertrag und kein automatischer Folgetermin. Sie entscheiden danach in Ruhe, ob eine Zusammenarbeit für Sie passt. Die erste Einschätzung aus dem Gespräch behalten Sie in jedem Fall.",
  },
];

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Kontakt & Erstgespräch | ${site.name}`,
  url: `${site.url}/kontakt`,
};

export default function KontaktPage() {
  return (
    <>
      {/* Split-Layout: links dunkle Info-Spalte (sticky), rechts weiße Formular-Karte */}
      <section id="termin" className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <p className="text-sm font-semibold tracking-[0.25em] text-fawn uppercase">
                Kontakt & Erstgespräch
              </p>
              <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight md:text-5xl">
                60 Minuten.
                <br />
                Eine konkrete
                <br />
                Einschätzung.
              </h1>
              <p className="mt-6 leading-relaxed text-ink-soft">
                Das Erstgespräch ist kostenlos und unverbindlich: Ihre
                Situation, Ihre Ziele, eine erste Einschätzung, was der größte
                Hebel ist. Sie gehen mit einem Ergebnis raus, auch wenn Sie
                sich gegen eine Zusammenarbeit entscheiden.
              </p>

              <div className="mt-10 space-y-5 border-t border-line pt-8">
                <p className="text-sm font-semibold tracking-[0.2em] text-ink-faint uppercase">
                  Lieber direkt?
                </p>
                {/* [PLATZHALTER] Nummer/Adresse aus Impressum übernehmen */}
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 transition-colors hover:text-fawn"
                >
                  <IconPhone className="h-5 w-5 text-azure-light" />
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 break-all transition-colors hover:text-fawn"
                >
                  <IconMail className="h-5 w-5 shrink-0 text-azure-light" />
                  {site.email}
                </a>
                <p className="flex items-center gap-3">
                  <IconPin className="h-5 w-5 text-azure-light" />
                  {site.address}
                </p>
              </div>

              <figure className="mt-10 overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/images/cedrik-buero.webp"
                  alt="Beratungsgespräch in den Räumen von Leibinn Consulting"
                  width={2400}
                  height={1600}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="h-auto w-full object-cover"
                />
              </figure>

              <div className="mt-10 border-t border-line pt-8">
                <h2 className="font-heading text-xl font-bold">
                  Was passiert nach der Buchung?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  Nach der Buchung erhalten Sie eine Bestätigung mit allen
                  Details. Das Gespräch dauert 60 Minuten, online oder vor Ort
                  in Böblingen. Besprochen werden Ihre Situation, Ihre Ziele
                  und der größte Hebel. Unterlagen brauchen Sie keine, Zahlen
                  aus dem Kopf reichen für den Anfang.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="theme-light rounded-3xl bg-white p-7 shadow-2xl shadow-black/30 md:p-10">
              <Suspense fallback={null}>
                <KontaktForm />
              </Suspense>
              {site.calendlyUrl ? (
                <iframe
                  src={site.calendlyUrl}
                  title="Termin online buchen (Calendly)"
                  className="mt-10 h-[700px] w-full rounded-2xl border border-line"
                />
              ) : null
              /* [PLATZHALTER] Calendly-Einbettung erscheint automatisch, sobald
                 site.calendlyUrl in src/lib/site.ts gesetzt ist. */
              }
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — weißer Breaker */}
      <LightSection className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:py-24">
          <p className="font-heading text-sm font-semibold tracking-[0.2em] text-azure uppercase md:col-span-3">
            FAQ
          </p>
          <div className="md:col-span-9">
            <Faq title="Häufige Fragen zum Erstgespräch" items={faqItems} />
          </div>
        </div>
      </LightSection>

      {/* Abschlusszeile */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <p className="font-heading text-2xl leading-snug font-medium text-balance md:text-4xl">
            Der schnellste Weg zu einem Gesamtbild Ihrer Finanzen sind
            60 Minuten Gespräch.{" "}
            <span className="text-azure-light">
              Der langsamste ist, es weiter aufzuschieben.
            </span>
          </p>
          <div className="mt-10">
            <CtaButton href="#termin">Termin wählen</CtaButton>
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Kontakt", path: "/kontakt" }])} />
      <JsonLd data={contactPageJsonLd} />
    </>
  );
}
