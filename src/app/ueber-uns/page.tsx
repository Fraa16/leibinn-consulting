import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { Faq, type FaqItem } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { PortraitPanel } from "@/components/VisualPanel";
import { IconCertificate, IconUsers, IconPin } from "@/components/icons";
import { entitySentence, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Über uns: Cedrik Leibinn | Leibinn Consulting Böblingen",
  },
  description:
    "Leibinn Consulting aus Böblingen: Cedrik Leibinn berät zu Investments, Immobilien und Holding-Strukturen. Zulassungen, Arbeitsweise und Prinzipien im Überblick.",
  alternates: { canonical: "/ueber-uns" },
};

const fakten = [
  { label: "Versicherungsmakler", value: "Erlaubnis nach § 34d Abs. 1 GewO" },
  {
    label: "Vermittlerregister",
    value: "Nr. D-LLF9-5XQCE-01 (öffentlich prüfbar unter vermittlerregister.info)",
  },
  { label: "Aufsichtsbehörde", value: "IHK Region Stuttgart" },
  {
    label: "Immobilienmakler",
    // [PLATZHALTER] § 34c GewO, Nachweis ergänzen (Copy-Doc)
    value: "Eingetragen [§ 34c GewO, Nachweis ergänzen]",
  },
  { label: "Mandate", value: "Über 50 laufend betreute Mandanten" },
  { label: "Standort", value: "Böblingen, Beratung online und vor Ort" },
];

const prinzipien = [
  {
    title:
      "Dieselbe Person, vom ersten Gespräch bis zur laufenden Betreuung.",
    text: "Keine Übergaben an Kollegen, kein Callcenter, keine wechselnden Zuständigkeiten. Wer anruft, spricht mit dem, der die Strategie kennt.",
  },
  {
    title: "Jede Empfehlung wird begründet. Oder sie wird nicht ausgesprochen.",
    text: "Sie sollen nachvollziehen können, warum etwas zu Ihrer Situation passt. „Vertrauen Sie mir“ ist keine Begründung.",
  },
  {
    title: "Spezialisten dort, wo Lizenz und Tiefe gefragt sind.",
    text: "Anlageberatung, Steuern, Recht: Dafür arbeiten wir mit lizenzierten Partnern, Steuerberatern und Anwälten zusammen, offen deklariert. Ein Berater, der behauptet, alles selbst zu können, sollte Sie misstrauisch machen.",
  },
  {
    title: "Betreuung endet nicht mit der Unterschrift.",
    text: "Strategien und Verträge werden regelmäßig überprüft. Der Abschluss ist der Anfang der Arbeit, nicht ihr Ziel.",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Wer ist Cedrik Leibinn?",
    a: "Cedrik Leibinn ist Gründer und Inhaber von Leibinn Consulting in Böblingen bei Stuttgart. Er ist eingetragener Immobilienmakler und Versicherungsmakler mit Erlaubnis nach § 34d Abs. 1 GewO (Vermittlerregister Nr. D-LLF9-5XQCE-01) und betreut über 50 Mandanten zu Investments, Immobilien und Holding-Strukturen.",
  },
  {
    q: "Ist Leibinn Consulting unabhängig?",
    a: "Ja. Als Makler arbeitet Leibinn Consulting rechtlich im Auftrag der Kunden, nicht einer einzelnen Gesellschaft, mit freier Auswahl aus dem Markt. Wo eigene Lizenzen enden, etwa bei der Anlageberatung, übernehmen offen benannte Partner. Diese Aufgabenteilung wird vor jeder Zusammenarbeit erklärt.",
  },
  {
    q: "Wo ist Leibinn Consulting tätig?",
    a: "Der Sitz ist Böblingen bei Stuttgart. Beratung findet vor Ort in der Region Stuttgart oder online statt, dadurch ist die Zusammenarbeit deutschlandweit möglich. Bei Off-Market-Immobilien entscheidet das Suchprofil, welche Regionen infrage kommen, nicht der Firmensitz.",
  },
  {
    q: "Arbeitet Cedrik Leibinn allein?",
    a: "Die Strategie und Betreuung liegen bei Cedrik Leibinn persönlich, das ist Teil des Konzepts. Dahinter steht ein Netzwerk aus lizenzierten Partnern für Anlageberatung und Finanzierung sowie Steuerberatern und Anwälten. Sie haben einen Ansprechpartner und den Zugriff auf Spezialisten, wenn es sie braucht.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cedrik Leibinn",
  jobTitle: "Gründer und Inhaber",
  worksFor: { "@type": "Organization", name: site.name, url: site.url },
  address: { "@type": "PostalAddress", addressLocality: site.city },
  identifier: "Vermittlerregister Nr. D-LLF9-5XQCE-01",
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero + Entity */}
      <section className="border-b border-line bg-paper-warm">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
          <div>
            <h1 className="text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl lg:text-[3.4rem]">
              Ein Berater. Ein Gesamtbild.
              <br />
              Cedrik Leibinn.
            </h1>
            {/* Erster Absatz = Footer-Entity-Satz (GEO-Pflicht) */}
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              {entitySentence}
            </p>
          </div>
          <PortraitPanel name="Cedrik Leibinn" role={`Gründer, ${site.name}`} />
        </div>
      </section>

      {/* Story */}
      <Section>
        <SectionHeading kicker="Warum es Leibinn Consulting gibt">
          Vermögensfragen enden nicht
          <br />
          an Produktgrenzen.
        </SectionHeading>
        <div className="mt-8 space-y-6 leading-relaxed text-ink-soft">
          <p>
            Wer Vermögen aufbaut, bekommt in Deutschland viele Berater: einen
            für das Depot, einen für die Immobilie, einen für die
            Versicherungen, einen Steuerberater für die Struktur. Jeder kennt
            sein Produkt. Niemand kennt das Gesamtbild.
          </p>
          <p>
            Leibinn Consulting ist die Antwort auf genau dieses Problem.{" "}
            <span className="rounded bg-accent-tint px-1.5 py-0.5 text-sm">
              [PLATZHALTER: 2–3 Sätze persönlicher Werdegang — Ausbildung,
              Stationen, seit wann selbstständig. Von Cedrik einholen bzw.
              Entwurf bestätigen lassen.]
            </span>
          </p>
          <p>
            Heute betreue ich über 50 Mandanten, vom angestellten Akademiker
            bis zum Unternehmer mit Holding-Struktur. Der gemeinsame Nenner:
            Sie wollen einen Ansprechpartner, der ihre Entscheidungen
            zusammendenkt, statt sie in Produktschubladen zu sortieren.
          </p>
        </div>
      </Section>

      {/* Zulassungen & Fakten */}
      <Section tone="warm" wide>
        <SectionHeading kicker="Schwarz auf weiss">
          Beraten darf jeder sagen.
          <br />
          Nachweisen nicht.
        </SectionHeading>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {fakten.map((fakt, i) => {
            const Icon = [IconCertificate, IconCertificate, IconPin, IconCertificate, IconUsers, IconPin][i];
            return (
              <div key={fakt.label} className="bg-paper p-7">
                <Icon className="h-6 w-6 text-accent" />
                <dt className="mt-4 text-sm font-semibold tracking-wide text-ink-faint uppercase">
                  {fakt.label}
                </dt>
                <dd className="mt-1.5 leading-snug font-medium">
                  {fakt.value}
                </dd>
              </div>
            );
          })}
        </dl>
        <p className="mt-10 max-w-3xl leading-relaxed text-ink-soft">
          Der Maklerstatus ist mehr als eine Formalie: Ein Makler arbeitet
          rechtlich im Auftrag seiner Kunden, nicht im Auftrag einer
          Gesellschaft. Was empfohlen wird, muss zur Situation passen und wird
          begründet. Prüfen Sie das gern nach, der Registereintrag ist
          öffentlich.
        </p>
      </Section>

      {/* Arbeitsprinzipien */}
      <Section wide>
        <SectionHeading kicker="Wie wir arbeiten">
          Vier Prinzipien.
          <br />
          Keine Ausnahmen.
        </SectionHeading>
        <ol className="mt-12 grid gap-6 md:grid-cols-2">
          {prinzipien.map((prinzip, i) => (
            <li
              key={prinzip.title}
              className="rounded-2xl border border-line bg-paper p-8"
            >
              <span className="font-heading text-4xl font-bold text-accent/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg leading-snug font-bold">
                {prinzip.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">
                {prinzip.text}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Faq title="Häufige Fragen" items={faqItems} />

      <FinalCta
        title={
          <>
            Lernen Sie den Menschen kennen,
            <br />
            nicht nur die Website.
          </>
        }
        text="Das Erstgespräch dauert 60 Minuten, kostet nichts und findet online oder vor Ort in Böblingen statt. Danach wissen Sie, ob die Zusammenarbeit passt. Wir übrigens auch."
        ctaLabel="Kostenloses Erstgespräch buchen"
        ctaHref="/kontakt"
      />

      <JsonLd
        data={breadcrumbJsonLd([{ name: "Über uns", path: "/ueber-uns" }])}
      />
      <JsonLd data={personJsonLd} />
    </>
  );
}
