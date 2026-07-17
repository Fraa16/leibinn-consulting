import type { Metadata } from "next";
import { Suspense } from "react";
import { KontaktForm } from "@/components/KontaktForm";
import { QuestionSection } from "@/components/QuestionSection";
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
      <section className="border-b border-line bg-paper-warm">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-6xl">
            60 Minuten.
            <br />
            Eine konkrete Einschätzung.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Das Erstgespräch ist kostenlos und unverbindlich: Ihre Situation,
            Ihre Ziele, eine erste Einschätzung, was der größte Hebel ist. Sie
            gehen mit einem Ergebnis raus, auch wenn Sie sich gegen eine
            Zusammenarbeit entscheiden.
          </p>
        </div>
      </section>

      {/* Terminbuchung */}
      <section id="termin" className="scroll-mt-24">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <Suspense fallback={null}>
            <KontaktForm />
          </Suspense>
          {site.calendlyUrl ? (
            <iframe
              src={site.calendlyUrl}
              title="Termin online buchen (Calendly)"
              className="mt-12 h-[700px] w-full rounded-2xl border border-line"
            />
          ) : null
          /* [PLATZHALTER] Calendly-Einbettung erscheint automatisch, sobald
             site.calendlyUrl in src/lib/site.ts gesetzt ist. */
          }
        </div>
      </section>

      {/* Alternativen */}
      <section className="bg-paper-warm">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-3xl font-bold tracking-tight">Lieber direkt?</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {/* [PLATZHALTER] Nummer/Adresse aus Impressum übernehmen */}
            <li>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="group block"
              >
                <IconPhone className="h-6 w-6 text-accent" />
                <p className="mt-2 text-sm text-ink-faint">Telefon</p>
                <p className="font-medium group-hover:text-fawn">
                  {site.phone}
                </p>
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="group block">
                <IconMail className="h-6 w-6 text-accent" />
                <p className="mt-2 text-sm text-ink-faint">E-Mail</p>
                <p className="font-medium break-all group-hover:text-fawn">
                  {site.email}
                </p>
              </a>
            </li>
            <li>
              <IconPin className="h-6 w-6 text-accent" />
              <p className="mt-2 text-sm text-ink-faint">Adresse</p>
              <p className="font-medium">{site.address}</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Erwartungsmanagement */}
      <QuestionSection
        title="Was passiert nach der Buchung?"
        answer="Nach der Buchung erhalten Sie eine Bestätigung mit allen Details. Das Gespräch dauert 60 Minuten, online oder vor Ort in Böblingen. Besprochen werden Ihre Situation, Ihre Ziele und der größte Hebel. Unterlagen brauchen Sie keine, Zahlen aus dem Kopf reichen für den Anfang."
      />

      <Faq title="Häufige Fragen zum Erstgespräch" items={faqItems} />

      {/* Abschlusszeile */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="font-heading text-2xl leading-snug font-medium text-balance md:text-3xl">
            Der schnellste Weg zu einem Gesamtbild Ihrer Finanzen sind
            60 Minuten Gespräch. Der langsamste ist, es weiter aufzuschieben.
          </p>
          <div className="mt-8">
            <CtaButton href="#termin">Termin wählen</CtaButton>
          </div>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd([{ name: "Kontakt", path: "/kontakt" }])} />
      <JsonLd data={contactPageJsonLd} />
    </>
  );
}
