import type { Metadata } from "next";
import Link from "next/link";
import type { FaqEntry } from "@/components/FaqList";
import { JsonLd, breadcrumbJsonLd, howToJsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { BrandLine } from "@/components/Brand";
import { MiniStructure } from "@/components/home/LeistungenBento";
import { PageHero } from "@/components/page/PageHero";
import { BookingSection } from "@/components/page/BookingSection";
import { FaqBlock } from "@/components/page/FaqBlock";
import {
  PageShell,
  ProcessSteps,
  RelatedTopics,
  Statement,
  TopicEyebrow,
  type ProcessStep,
} from "@/components/page/Blocks";

export const metadata: Metadata = {
  title: { absolute: "Holding gründen: Beratung | Leibinn Consulting" },
  description:
    "Lohnt sich eine Holding für Sie? Beratung, Begleitung und Gründung aus einem Prozess. Mit Steuerberatern aus dem Netzwerk. Region Stuttgart. Erstgespräch kostenlos.",
  alternates: { canonical: "/holding" },
};

const steps: ProcessStep[] = [
  {
    title: "Analyse",
    plainText:
      "Gewinne, Entnahmen, Pläne, Exit-Wahrscheinlichkeit: Wir rechnen, ob sich die Struktur für Sie trägt. Ergebnis ist eine klare Empfehlung, keine Verkaufspräsentation.",
    text: "Gewinne, Entnahmen, Pläne, Exit-Wahrscheinlichkeit: Wir rechnen, ob sich die Struktur für Sie trägt. Ergebnis ist eine klare Empfehlung, keine Verkaufspräsentation.",
  },
  {
    title: "Strukturkonzept",
    plainText:
      "Rechtsform, Beteiligungsverhältnisse, steuerliche Prüfung: Das Konzept entsteht gemeinsam mit einem Steuerberater aus unserem Netzwerk. Sie erhalten es schriftlich und begründet.",
    text: "Rechtsform, Beteiligungsverhältnisse, steuerliche Prüfung: Das Konzept entsteht gemeinsam mit einem Steuerberater aus unserem Netzwerk. Sie erhalten es schriftlich und begründet.",
  },
  {
    title: "Gründung",
    plainText:
      "Notartermin, Handelsregister, Bankkonten, Verträge: Wir koordinieren die Beteiligten, Sie unterschreiben, was Sie verstanden haben.",
    text: "Notartermin, Handelsregister, Bankkonten, Verträge: Wir koordinieren die Beteiligten, Sie unterschreiben, was Sie verstanden haben.",
  },
  {
    title: "Struktur mit Leben füllen",
    plainText:
      "Eine leere Holding bringt nichts. Jetzt folgt der eigentliche Zweck: Vermögensaufbau über die Struktur, vom Investment-Depot bis zur Immobilie in der Gesellschaft.",
    text: (
      <>
        Eine leere Holding bringt nichts. Jetzt folgt der eigentliche Zweck:
        Vermögensaufbau über die Struktur, vom{" "}
        <Link href="/investments">Investment-Depot</Link> bis zur{" "}
        <Link href="/immobilien">Immobilie in der Gesellschaft</Link>.
      </>
    ),
  },
];

const cases = [
  {
    tag: "Fall 01",
    title: "Der Reinvestierer.",
    text: "Die GmbH läuft, die Gewinne übersteigen den privaten Bedarf. Statt voller Besteuerung bei Entnahme fließt das Kapital in die Holding und arbeitet dort weiter: in Investments, Immobilien oder neuen Beteiligungen.",
  },
  {
    tag: "Fall 02",
    title: "Der Verkäufer in fünf Jahren.",
    text: "Wer einen Exit für möglich hält, stellt die Struktur besser Jahre vorher auf. Der Anteilsverkauf aus der Holding ist zu 95 Prozent körperschaftsteuerfrei, aus dem Privatvermögen nicht.",
  },
  {
    tag: "Fall 03",
    title: "Der Risiko-Trenner.",
    text: "Betriebsimmobilie, Fuhrpark, Rücklagen: Was in der operativen GmbH liegt, haftet mit. In der Holding liegt es außerhalb der Reichweite des Tagesgeschäfts.",
  },
];

const faqItems: FaqEntry[] = [
  {
    q: "Was kostet die Gründung einer Holding?",
    a: "Für eine Holding-GmbH fallen Notar- und Handelsregisterkosten von einigen hundert bis wenigen tausend Euro an, dazu das Stammkapital von 25.000 Euro, von dem zur Gründung die Hälfte eingezahlt sein muss. Laufend kommen Buchhaltung und Jahresabschluss hinzu. Die Gesamtrechnung gehört in jede Analyse, bevor gegründet wird.",
  },
  {
    q: "Brauche ich einen Steuerberater?",
    a: "Ja, zwingend. Die steuerliche Beurteilung Ihres Einzelfalls gehört in die Hände eines Steuerberaters. Leibinn Consulting übernimmt Analyse, Koordination und Umsetzung der Struktur und vermittelt den passenden Steuerberater aus dem geprüften Partnernetzwerk, falls Sie noch keinen haben.",
  },
  {
    q: "Wie lange dauert eine Holding-Gründung?",
    a: "Von der Entscheidung bis zur eingetragenen Struktur vergehen üblicherweise mehrere Wochen: Konzept und steuerliche Prüfung, Notartermin, Eintragung ins Handelsregister, Kontoeröffnung. Die Analyse davor braucht ein bis zwei Gespräche. Wer einen Exit plant, sollte deutlich früher beginnen, idealerweise Jahre vorher.",
  },
  {
    q: "Kann ich eine bestehende GmbH in eine Holding-Struktur überführen?",
    a: "Ja, das ist der häufigste Fall. Die Anteile an der bestehenden GmbH werden in eine neu gegründete Holding eingebracht. Dabei sind steuerliche Fristen und Bewertungsfragen zu beachten, unter anderem Sperrfristen nach der Einbringung. Genau deshalb steht die steuerliche Prüfung vor jedem Schritt.",
  },
  {
    q: "Lohnt sich eine Holding auch für Immobilien?",
    a: "Häufig ja: Immobilien in einer Gesellschaftsstruktur können steuerliche Vorteile bieten und trennen das Objekt vom operativen Risiko. Ob sich das gegenüber dem Privatkauf rechnet, hängt von Haltedauer, Finanzierung und Ihrer Gesamtsituation ab. Wir rechnen beide Varianten durch, bevor Sie kaufen.",
  },
];

/** Großes Struktur-Schema: wer haftet, wo das Vermögen liegt. */
function StructureDiagram() {
  const node = "rounded-2xl border px-4 py-3.5 text-center";
  return (
    <figure className="rounded-[28px] border border-sand bg-white p-[clamp(20px,3vw,40px)]">
      <div className="flex flex-col items-center">
        <span className="mono rounded-full bg-ivory px-3 py-1.5 text-subtle">Sie als Gesellschafter</span>
        <span aria-hidden className="h-6 w-px bg-navy/20" />
        <div className={`${node} w-full max-w-[340px] border-navy bg-navy text-white`}>
          <p className="text-[17px] font-semibold">Holding GmbH</p>
          <p className="mono mt-1.5 text-[10px] text-acc-light">Sammelt Vermögen</p>
        </div>
        <span aria-hidden className="h-6 w-px bg-navy/20" />
        <span aria-hidden className="h-px w-[68%] bg-navy/20" />
        <div className="grid w-full grid-cols-3 gap-2 sm:gap-3">
          {[
            { t: "Operative GmbH", s: "Trägt das Tagesrisiko", strong: true },
            { t: "Immobilien", s: "Getrennt vom Betrieb", strong: false },
            { t: "Investments", s: "Reinvestierte Gewinne", strong: false },
          ].map((n) => (
            <div key={n.t} className="flex flex-col items-center">
              <span aria-hidden className="h-6 w-px bg-navy/20" />
              <div className={`${node} w-full ${n.strong ? "border-acc bg-acc-tint" : "border-sand-deep bg-ivory/60"}`}>
                <p className="text-[14px] font-semibold text-navy sm:text-[15px]">{n.t}</p>
                <p className="mono mt-1.5 text-[9.5px] text-subtle">{n.s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mono mt-7 border-t border-ivory-deep pt-4 text-[10px] text-subtle">
        Schematische Darstellung · 95 % des Gewinns aus einem Anteilsverkauf bleiben in der Holding körperschaftsteuerfrei
      </figcaption>
    </figure>
  );
}

export default function HoldingPage() {
  return (
    <PageShell accent="indigo">
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Leistungen", href: "/leistungen" }, { label: "Holding-Strukturen" }]}
        eyebrow={<TopicEyebrow slug="holding" />}
        title={
          <>
            Holding gründen: <em>Erst rechnen, dann strukturieren.</em>
          </>
        }
        lead="Leibinn Consulting begleitet Unternehmer von der Frage, ob sich eine Holding lohnt, bis zur fertigen Struktur: Analyse, Konzept, Gründung und laufende Betreuung in einem Prozess, gemeinsam mit Steuerberatern aus dem Partnernetzwerk."
        primary={{ label: "Struktur-Check anfragen", href: "#termin" }}
        secondary={{ label: "Ab wann lohnt sich das?", href: "#rechnung" }}
        micro="Kostenloses Erstgespräch mit klarer Empfehlung, auch wenn sie „keine Holding“ lautet."
        image={{
          src: "/images/cedrik-buero.webp",
          alt: "Cedrik Leibinn im Gespräch mit einem Unternehmer",
          pos: "object-[62%_40%]",
        }}
        floating={<MiniStructure />}
        facts={[
          { value: "95 %", label: "Körperschaftsteuerfrei beim Anteilsverkauf" },
          { value: "Mit Steuerberater", label: "Aus dem Partnernetzwerk" },
          { value: "Wochen", label: "Bis zur eingetragenen Struktur" },
        ]}
      />

      {/* Definition */}
      <section className="lc-section">
        <div className="lc-wrap grid items-start gap-12 min-[1000px]:grid-cols-2 min-[1000px]:gap-20">
          <Reveal>
            <p className="eyebrow">Definition</p>
            <h2 className="display-2 mt-6 text-navy">
              Was ist eine <em>Holding?</em>
            </h2>
            <div className="mt-8">
              <Statement>
                Eine Holding ist eine Gesellschaft, die Anteile an anderen
                Gesellschaften hält, typischerweise eine GmbH als
                Muttergesellschaft über einer operativen GmbH. Gewinne der
                Tochtergesellschaft können weitgehend steuerbegünstigt in die
                Holding fließen und dort für Investments, Immobilien oder neue
                Beteiligungen eingesetzt werden.
              </Statement>
            </div>
            <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-body">
              <p>
                Der Kern ist Trennung: Das operative Geschäft trägt das
                Tagesrisiko, die Holding sammelt das Vermögen. Verkauft die
                Holding später Anteile an der Tochter, bleibt der Gewinn zu 95
                Prozent körperschaftsteuerfrei. Ausgeschüttete Gewinne können in
                der Holding reinvestiert werden, ohne dass sie vorher als
                Privatentnahme voll versteuert wurden.
              </p>
              <p>
                Ob diese Vorteile bei Ihnen greifen, hängt vom Einzelfall ab:
                Gewinnhöhe, Ausschüttungsverhalten, Exit-Pläne, private
                Entnahmen. Genau das ist die Rechnung, die vor jeder Gründung
                stehen muss.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="min-[1000px]:sticky min-[1000px]:top-[calc(var(--header-h)+40px)]">
            <StructureDiagram />
          </Reveal>
        </div>
      </section>

      {/* Die Rechnung */}
      <section id="rechnung" className="lc-panel">
        <BrandLine shape="b" color="var(--acc-light)" opacity={0.12} className="-top-10 -right-48 w-[min(1000px,90vw)]" />
        <div className="lc-wrap relative">
          <SectionHead
            eyebrow="Die Rechnung"
            title={
              <>
                Ab wann lohnt sich <em>eine Holding?</em>
              </>
            }
            lead="In der Regel, wenn dauerhaft Gewinne im Unternehmen bleiben, die nicht privat gebraucht werden, wenn ein späterer Verkauf denkbar ist oder wenn Vermögen vom operativen Risiko getrennt werden soll. Wer alle Gewinne privat entnimmt, profitiert selten."
          />
          <div className="mt-[clamp(48px,6vw,72px)] grid gap-4 md:grid-cols-3">
            {cases.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 80}
                className={`flex flex-col rounded-[24px] p-[clamp(24px,2.6vw,36px)] ${
                  i === 1 ? "bg-acc-light text-navy-950" : "border border-white/10 bg-navy-850"
                }`}
              >
                <span className={`mono ${i === 1 ? "text-navy-950/70" : "text-acc-light"}`}>{c.tag}</span>
                <h3 className="mt-7 text-[clamp(22px,2vw,27px)] leading-tight font-normal tracking-[-0.025em]">
                  {c.title}
                </h3>
                <p className={`mt-4 text-[15px] leading-relaxed ${i === 1 ? "text-navy-950/80" : "text-on-dark-body"}`}>
                  {c.text}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-4 flex flex-col gap-4 rounded-[24px] border border-white/14 p-[clamp(24px,2.6vw,36px)] md:flex-row md:items-center md:gap-12">
            <h3 className="shrink-0 text-[clamp(22px,2vw,28px)] font-normal tracking-[-0.025em]">
              Und wann <em className="font-light text-acc-light">nicht?</em>
            </h3>
            <p className="text-[15.5px] leading-relaxed text-on-dark-body">
              Wenn Sie Ihre Gewinne vollständig privat entnehmen, wenn die
              Verwaltungskosten den Steuervorteil auffressen oder wenn das
              Geschäft dafür schlicht zu klein ist. Das sagen wir Ihnen im
              Erstgespräch genauso deutlich. Eine Holding, die sich nicht rechnet,
              ist keine Struktur, sondern Ballast.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Prozess */}
      <section id="prozess" className="lc-section">
        <div className="lc-wrap">
          <SectionHead
            eyebrow="Der Prozess"
            title={
              <>
                Wie läuft die <em>Holding-Gründung</em> ab?
              </>
            }
            lead="Analyse Ihrer Zahlen und Ziele, Strukturkonzept mit Steuerberater, notarielle Gründung und Eintragung, danach die Einbindung von Investments und Immobilien. Von der Entscheidung bis zur eingetragenen Holding vergehen üblicherweise mehrere Wochen."
          />
          <div className="mt-[clamp(48px,6vw,72px)]">
            <ProcessSteps steps={steps} tone="light" />
          </div>
        </div>
      </section>

      <FaqBlock
        className="!pt-0"
        title={
          <>
            Häufige Fragen <em>zur Holding.</em>
          </>
        }
        items={faqItems}
      />

      <BookingSection
        title={
          <>
            Erst die Rechnung. <em>Dann die Struktur.</em>
          </>
        }
        lead="Im kostenlosen Erstgespräch prüfen wir, ob sich eine Holding für Ihre Situation trägt. Sie erhalten eine klare Empfehlung, auch wenn sie „noch nicht“ lautet."
      />

      <RelatedTopics
        current="der Holding"
        slugs={["immobilien", "investments", "bav-bkv"]}
        disclaimer="Die Inhalte dieser Seite sind allgemeine Informationen und ersetzen keine steuerliche oder rechtliche Beratung. Die Beurteilung des Einzelfalls erfolgt durch Steuerberater und Rechtsanwälte aus dem Partnernetzwerk."
      />

      <JsonLd data={breadcrumbJsonLd([{ name: "Leistungen", path: "/leistungen" }, { name: "Holding-Strukturen", path: "/holding" }])} />
      <JsonLd data={howToJsonLd("Holding-Gründung mit Leibinn Consulting", steps)} />
    </PageShell>
  );
}
