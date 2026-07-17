import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { LightSection } from "@/components/Theme";
import { Bento, BentoCell } from "@/components/Bento";
import { EditorialHeader, PullStat } from "@/components/Editorial";
import { StepList, type Step } from "@/components/StepList";
import { Testimonial } from "@/components/Testimonial";
import { Faq, type FaqItem } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { kontaktHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Vermögensaufbau mit Strategie | Leibinn Consulting" },
  description:
    "Vermögensaufbau mit System: breite Streuung, klare Risikoverteilung, transparente Kosten. Strategie von Leibinn Consulting, Umsetzung mit lizenzierten Partnern.",
  alternates: { canonical: "/investments" },
};

const steps: Step[] = [
  {
    title: "Bestandsaufnahme",
    plainText:
      "Was liegt wo, was kostet es, welches Risiko steckt drin: Viele Depots sind historisch gewachsen statt geplant. Die Analyse zeigt es schwarz auf weiß.",
    text: "Was liegt wo, was kostet es, welches Risiko steckt drin: Viele Depots sind historisch gewachsen statt geplant. Die Analyse zeigt es schwarz auf weiß.",
  },
  {
    title: "Strategie",
    plainText:
      "Zielrendite, Risikoverteilung, Sparrate, Zeithorizont: Sie erhalten eine schriftliche Strategie, die zu Ihrer Gesamtsituation passt, inklusive der Frage, ob über die Holding investiert wird.",
    text: (
      <>
        Zielrendite, Risikoverteilung, Sparrate, Zeithorizont: Sie erhalten
        eine schriftliche Strategie, die zu Ihrer Gesamtsituation passt,
        inklusive der Frage, ob{" "}
        <Link href="/holding" className="text-accent underline underline-offset-2">
          über die Holding investiert
        </Link>{" "}
        wird.
      </>
    ),
  },
  {
    title: "Umsetzung mit Partnern",
    plainText:
      "Die Umsetzung läuft über lizenzierte Partner. Wir koordinieren, Sie entscheiden. Kein Produkt wird empfohlen, das der Strategie widerspricht.",
    text: "Die Umsetzung läuft über lizenzierte Partner. Wir koordinieren, Sie entscheiden. Kein Produkt wird empfohlen, das der Strategie widerspricht.",
  },
  {
    title: "Laufende Überprüfung",
    plainText:
      "Leben und Märkte ändern sich. Die Strategie wird regelmäßig geprüft und angepasst, bevor Abweichungen teuer werden.",
    text: "Leben und Märkte ändern sich. Die Strategie wird regelmäßig geprüft und angepasst, bevor Abweichungen teuer werden.",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Ab welchem Betrag lohnt sich eine Strategie?",
    a: "Früher, als die meisten denken. Entscheidend ist nicht das vorhandene Vermögen, sondern die Sparfähigkeit: Wer monatlich investieren kann, profitiert von einer Strategie ab dem ersten Euro, weil Fehler in der Anfangsphase über Jahrzehnte nachwirken. Ein Mindestvermögen ist keine Voraussetzung für das Erstgespräch.",
  },
  {
    q: "Wie unterscheidet sich das von der Beratung bei der Bank?",
    a: "Eine Bank berät zu den Produkten, die sie anbietet, und verdient an deren Marge. Leibinn Consulting entwickelt zuerst die Strategie und zieht dann lizenzierte Partner für die Umsetzung hinzu. Die Reihenfolge macht den Unterschied: erst der Plan für Ihr Gesamtvermögen, dann die Produktfrage.",
  },
  {
    q: "Wer führt die Anlageberatung durch?",
    a: "Die Anlageberatung im rechtlichen Sinn führen lizenzierte Partner durch, mit denen Leibinn Consulting zusammenarbeitet. Leibinn Consulting übernimmt Analyse, Strategie und Koordination und behält das Gesamtbild über alle Vermögensbausteine. Diese Aufgabenteilung wird im Erstgespräch offen erklärt, bevor eine Zusammenarbeit beginnt.",
  },
  {
    q: "In welche Produkte wird investiert?",
    a: "Die Strategie bestimmt die Produkte, nicht umgekehrt. Im Regelfall bedeutet das breit gestreute, kostengünstige Bausteine über verschiedene Anlageklassen und Regionen. Welche konkreten Produkte infrage kommen, klärt die Anlageberatung durch den lizenzierten Partner auf Basis der Strategie und Ihrer Risikoverteilung.",
  },
  {
    q: "Was kostet der Vermögensaufbau mit Leibinn Consulting?",
    a: "Das Erstgespräch ist kostenlos. Die Vergütungswege der Zusammenarbeit, einschließlich der Konditionen der Partner, werden vor Beginn offen und schriftlich erklärt. Kostentransparenz ist Teil der Methodik: Was Sie zahlen, wissen Sie vorher, nicht hinterher im Kleingedruckten.",
  },
];

export default function InvestmentsPage() {
  return (
    <>
      {/* Hero — kompakt, asymmetrisch, Kennzahl rechts */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-8">
            <p className="text-sm font-semibold tracking-[0.25em] text-fawn uppercase">
              Investments
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-balance md:text-6xl">
              Vermögensaufbau:
              <br />
              Strategie schlägt Bauchgefühl.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Leibinn Consulting entwickelt Investmentstrategien für
              Privatpersonen und Unternehmer: breite Streuung, klare
              Risikoverteilung, transparente Kosten. Die Strategie kommt von
              uns, die Anlageberatung führen lizenzierte Partner durch, und Sie
              behalten einen Ansprechpartner für das Gesamtbild.
            </p>
            <div className="mt-9">
              <CtaButton href={kontaktHref("strategie-gespraech")}>
                Strategie-Gespräch buchen
              </CtaButton>
              <p className="mt-4 text-sm text-ink-faint">
                60 Minuten, kostenlos, mit erster Einschätzung Ihrer aktuellen
                Aufstellung
              </p>
            </div>
          </div>
          <PullStat
            value="60&thinsp;Min"
            label="kostenloses Strategie-Gespräch mit erster Einschätzung"
            className="hidden md:col-span-3 md:col-start-10 md:block"
          />
        </div>
      </section>

      {/* 01 · Methodik — weiß, asymmetrisches Prinzipien-Bento */}
      <LightSection className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <EditorialHeader
            no="01"
            kicker="Die Methodik"
            title="Was macht eine gute Investmentstrategie aus?"
            intro="Eine tragfähige Investmentstrategie beruht auf vier Prinzipien: breite Streuung über Anlageklassen und Regionen, eine Risikoverteilung, die zur eigenen Situation passt, niedrige und transparente Kosten sowie Disziplin über Marktphasen hinweg. Kein einzelnes Produkt ersetzt diese Grundlagen, und keine Prognose macht sie überflüssig."
          />
          <Bento className="mt-14">
            <BentoCell surface="azure" className="md:col-span-7 md:min-h-60">
              <h3 className="font-heading text-2xl font-bold">
                Streuung statt Wette.
              </h3>
              <p className="mt-4 max-w-lg leading-relaxed text-white/85">
                Einzelne Aktien, einzelne Branchen, einzelne Länder können
                fallen. Ein breit gestreutes Portfolio hängt nicht an einer
                Entscheidung. Wer streut, muss die Zukunft nicht vorhersagen.
              </p>
            </BentoCell>
            <BentoCell surface="outline" className="md:col-span-5">
              <h3 className="font-heading text-xl font-bold">
                Risiko nach Situation, nicht nach Mut.
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Wie viel Schwankung Ihr Portfolio verträgt, bestimmen Ihr
                Horizont, Ihre Liquidität und Ihre Pläne, nicht die Stimmung am
                Markt. Die Risikoverteilung wird festgelegt, bevor investiert
                wird.
              </p>
            </BentoCell>
            <BentoCell surface="outline" className="md:col-span-5">
              <h3 className="font-heading text-xl font-bold">
                Kosten sind die einzige sichere Größe.
              </h3>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Renditen schwanken, Kosten fallen immer an. Jeder Prozentpunkt
                Gebühr wirkt über Jahrzehnte gegen Sie. Deshalb sind
                Kostentransparenz und günstige Umsetzung feste Kriterien, kein
                Verhandlungsergebnis.
              </p>
            </BentoCell>
            <BentoCell surface="deep" className="md:col-span-7 md:min-h-60">
              <h3 className="font-heading text-2xl font-bold">
                Disziplin schlägt Timing.
              </h3>
              <p className="mt-4 max-w-lg leading-relaxed text-ink-soft">
                Die teuersten Fehler passieren in Extremphasen: Verkaufen im
                Crash, Einsteigen auf dem Hoch. Eine schriftliche Strategie ist
                der Schutz vor der eigenen Reaktion.
              </p>
            </BentoCell>
          </Bento>
        </div>
      </LightSection>

      {/* 02 · Partnermodell — dunkel, Split mit Prozess-Schiene */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <EditorialHeader
            no="02"
            kicker="Ablauf & Partnermodell"
            title="Wie funktioniert der Vermögensaufbau bei Leibinn Consulting?"
            intro="Leibinn Consulting analysiert Ihre Situation, entwickelt die Strategie und koordiniert die Umsetzung. Die Anlageberatung im rechtlichen Sinn führen lizenzierte Partner durch, mit denen wir zusammenarbeiten. Sie behalten dabei einen Ansprechpartner, der Investments, Immobilien und Struktur zusammendenkt, statt jede Entscheidung isoliert zu treffen."
          />
          <div className="mt-14 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="leading-relaxed text-ink-soft">
                Warum dieses Modell? Weil die Strategie wichtiger ist als das
                Produkt. Die meisten Anleger scheitern nicht an der
                Produktauswahl, sondern daran, dass niemand ihre Investments
                mit dem Rest ihres Vermögens abstimmt: mit der Immobilie, der
                Firmenstruktur, der Liquiditätsplanung. Genau diese Abstimmung
                ist unsere Arbeit. Die produktbezogene Beratung übernimmt der
                Partner, der dafür zugelassen ist, und Sie bekommen beides,
                ohne es selbst koordinieren zu müssen.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <StepList steps={steps} />
            </div>
          </div>
        </div>
      </section>

      {/* 03 · Kundenstimmen — weiß, zweispaltig versetzt */}
      <LightSection className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-12 md:py-24">
          <Testimonial
            className="md:col-span-6"
            quote="Als Anwalt bin ich es gewohnt, komplexe Sachverhalte zu durchdringen. Bei Investments verlasse ich mich auf Herrn Leibinn, weil er transparent kommuniziert und jede Empfehlung nachvollziehbar begründet."
            name="Luka Šilić"
            role="Anwalt"
          />
          <Testimonial
            className="md:col-span-6 md:translate-y-8"
            quote="Zeit ist als Selbstständiger mein wertvollstes Gut. Durch die klaren Strategien läuft mein Vermögensaufbau, ohne dass ich mich darum kümmern muss."
            name="Tom Müller"
            role="selbstständiger Tätowierer"
          />
        </div>
      </LightSection>

      {/* 04 · FAQ */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:py-24">
          <p className="font-heading text-sm font-semibold tracking-[0.2em] text-fawn uppercase md:col-span-3">
            04 · FAQ
          </p>
          <div className="md:col-span-9">
            <Faq title="Häufige Fragen zum Vermögensaufbau" items={faqItems} />
          </div>
        </div>
      </section>

      <CtaBanner
        title={
          <>
            Ihr Depot ist gewachsen.
            <br />
            Aber ist es geplant?
          </>
        }
        text="Im kostenlosen Strategie-Gespräch analysieren wir Ihre aktuelle Aufstellung und Sie erfahren, wo Streuung, Kosten oder Risikoverteilung nicht zu Ihren Zielen passen."
        ctaLabel="Strategie-Gespräch buchen"
        ctaHref={kontaktHref("strategie-gespraech")}
      />

      <Disclaimer>
        Kapitalanlagen sind mit Risiken verbunden. Kurse können schwanken,
        Verluste bis zum Totalverlust einzelner Anlagen sind möglich. Frühere
        Wertentwicklungen sind kein verlässlicher Indikator für zukünftige
        Ergebnisse. Diese Seite enthält allgemeine Informationen und keine
        Anlageberatung.
      </Disclaimer>

      <JsonLd
        data={breadcrumbJsonLd([{ name: "Investments", path: "/investments" }])}
      />
    </>
  );
}
