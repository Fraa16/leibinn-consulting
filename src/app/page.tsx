import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { Scribble } from "@/components/Scribble";
import { Section, SectionHeading } from "@/components/Section";
import { StatStrip } from "@/components/StatStrip";
import { CardGrid } from "@/components/CardGrid";
import { Testimonial } from "@/components/Testimonial";
import { StepList, type Step } from "@/components/StepList";
import { Faq, type FaqItem } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, howToJsonLd } from "@/components/JsonLd";
import { SkylineArt, PortraitPanel } from "@/components/VisualPanel";
import { LogoFrameDecor, LogoMark } from "@/components/Brand";
import { Reveal } from "@/components/Reveal";
import { fachbereichIcons, IconArrowRight } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Investments, Immobilien & Holding Böblingen | Leibinn Consulting",
  },
  description:
    "Vermögensaufbau mit Investments, Off-Market-Immobilien und Holding-Strukturen. Leibinn Consulting berät Unternehmer und Privatpersonen bei Stuttgart. Erstgespräch kostenlos.",
  alternates: { canonical: "/" },
};

const painCards = [
  {
    title: "Geld liegt auf dem Konto und verliert real an Wert.",
    text: "Inflation kostet jedes Jahr Kaufkraft. Die Entscheidung, nichts zu tun, ist auch eine Entscheidung.",
  },
  {
    title: "Gute Immobilien tauchen nie auf Portalen auf.",
    text: "Die rentabelsten Objekte wechseln den Besitzer, bevor sie öffentlich werden. Wer nur auf Portalen sucht, sieht den Rest.",
  },
  {
    title: "Als Unternehmer verschenken Sie Struktur.",
    text: "Gewinne in der GmbH, Vermögen privat, keine Verbindung dazwischen: Ohne passende Struktur zahlen Sie mehr Steuern und tragen mehr Risiko als nötig.",
  },
];

const leistungen = [
  {
    slug: "investments" as const,
    href: "/investments",
    title: "Investments",
    text: "Strategien für den Vermögensaufbau: breite Streuung, klare Risikoverteilung, transparente Kosten. Die Anlageberatung übernehmen spezialisierte Partner, Leibinn Consulting entwickelt die Strategie und behält das Gesamtbild.",
  },
  {
    slug: "immobilien" as const,
    href: "/immobilien",
    title: "Off-Market-Immobilien",
    text: "Als eingetragener Immobilienmakler vermitteln wir Objekte, die nie auf Portalen erscheinen, in Regionen mit stabiler Mietnachfrage. Auf Wunsch mit Miet- und Hausverwaltung.",
  },
  {
    slug: "holding" as const,
    href: "/holding",
    title: "Holding-Strukturen & Unternehmensberatung",
    text: "Von der Frage, ob sich eine Holding für Sie lohnt, bis zur Gründung: Beratung, Begleitung und Umsetzung in einem durchgehenden Prozess.",
  },
  {
    slug: "finanzierung" as const,
    href: "/finanzierung",
    title: "Finanzierung",
    text: "Unabhängige Finanzierungsexperten aus dem Partnernetzwerk vergleichen die Konditionen mehrerer Banken. Für Sie heißt das: weniger Termine, ein koordinierter Prozess, verhandelte Zinsen.",
  },
  {
    slug: "steuern-recht" as const,
    href: "/steuern-recht",
    title: "Steuern & Recht",
    text: "Hier beraten wir nicht selbst. Wir vermitteln geprüfte Steuerberater und Anwälte aus unserem Netzwerk, passend zu Ihrer Struktur.",
  },
  {
    slug: "absicherung" as const,
    href: "/absicherung",
    title: "Absicherung",
    text: "Was aufgebaut wird, muss geschützt sein. Als Makler nach § 34d GewO sichern wir Vermögen, Immobilien und Betrieb ab, mit freier Auswahl aus dem Markt.",
  },
];

const steps: Step[] = [
  {
    title: "Erstgespräch & Bedarfsanalyse",
    plainText:
      "60 Minuten, kostenlos: Ihre Situation, Ihre Ziele, Ihre Risikobereitschaft. Sie gehen mit einer ersten Einschätzung raus, auch wenn Sie sich gegen eine Zusammenarbeit entscheiden.",
    text: "60 Minuten, kostenlos: Ihre Situation, Ihre Ziele, Ihre Risikobereitschaft. Sie gehen mit einer ersten Einschätzung raus, auch wenn Sie sich gegen eine Zusammenarbeit entscheiden.",
  },
  {
    title: "Strategieentwicklung",
    plainText:
      "Auf Basis der Analyse entsteht Ihre Strategie: Investments, Immobilien und Struktur aufeinander abgestimmt, mit konkreten Schritten und klaren Prioritäten. Sie erhalten sie schriftlich und begründet.",
    text: "Auf Basis der Analyse entsteht Ihre Strategie: Investments, Immobilien und Struktur aufeinander abgestimmt, mit konkreten Schritten und klaren Prioritäten. Sie erhalten sie schriftlich und begründet.",
  },
  {
    title: "Umsetzung",
    plainText:
      "Wir setzen gemeinsam um, Schritt für Schritt, mit Fokus auf Streuung und Risikomanagement. Sie unterschreiben nichts, was Sie nicht verstanden haben.",
    text: "Wir setzen gemeinsam um, Schritt für Schritt, mit Fokus auf Streuung und Risikomanagement. Sie unterschreiben nichts, was Sie nicht verstanden haben.",
  },
  {
    title: "Laufende Überprüfung",
    plainText:
      "Märkte und Lebensumstände ändern sich. Deshalb prüfen wir Ihre Strategie regelmäßig und passen an, wo es nötig ist.",
    text: "Märkte und Lebensumstände ändern sich. Deshalb prüfen wir Ihre Strategie regelmäßig und passen an, wo es nötig ist.",
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Was kostet die Beratung bei Leibinn Consulting?",
    a: "Das Erstgespräch ist kostenlos und unverbindlich. Bei einer Zusammenarbeit hängt die Vergütung vom Bereich ab: In der Immobilien- und Versicherungsvermittlung erfolgt sie in der Regel über Provisionen bzw. Courtagen, ohne zusätzliche Kosten für Sie. Alle Vergütungswege werden vor Beginn offen erklärt.",
  },
  {
    q: "Für wen ist Leibinn Consulting geeignet?",
    a: "Für Unternehmer und Selbstständige, die Vermögen, Immobilien und Firmenstruktur zusammendenken wollen, und für Privatpersonen, die strukturiert Vermögen aufbauen möchten: von Investments über Off-Market-Immobilien bis zur Holding. Ein bestimmtes Mindestvermögen ist keine Voraussetzung für das Erstgespräch.",
  },
  {
    q: "Was sind Off-Market-Immobilien?",
    a: "Off-Market-Immobilien sind Objekte, die verkauft werden, ohne jemals öffentlich inseriert zu sein. Der Zugang läuft über persönliche Netzwerke von Eigentümern, Verwaltern und Maklern. Leibinn Consulting vermittelt solche Objekte als eingetragener Immobilienmakler, bevorzugt in Regionen mit stabiler Mietnachfrage.",
  },
  {
    q: "Wie läuft das kostenlose Erstgespräch ab?",
    a: "Das Erstgespräch dauert 60 Minuten und findet online oder vor Ort in Böblingen statt. Besprochen werden Ihre aktuelle Situation, Ihre Ziele und Ihre Risikobereitschaft. Sie erhalten eine erste konkrete Einschätzung, unabhängig davon, ob Sie sich danach für eine Zusammenarbeit entscheiden.",
  },
  {
    q: "Warum alle Bereiche bei einem Ansprechpartner bündeln?",
    a: "Weil Vermögensentscheidungen zusammenhängen: Eine Holding verändert die Steuerlast, die Finanzierung bestimmt die Rendite der Immobilie, die Struktur entscheidet über das Risiko. Wer alles getrennt betreuen lässt, riskiert Widersprüche zwischen den Bausteinen. Ein Ansprechpartner mit Gesamtblick erkennt diese Wechselwirkungen, und Sie sparen Abstimmungsaufwand.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cedrik Leibinn",
  jobTitle: "Gründer und Inhaber",
  worksFor: { "@type": "Organization", name: site.name },
  address: { "@type": "PostalAddress", addressLocality: site.city },
};

export default function HomePage() {
  return (
    <>
      {/* Hero — Copy-Doc Startseite v3 */}
      <section className="relative -mt-18 overflow-hidden border-b border-line">
        <LogoFrameDecor variant="top" opacity={0.45} />
        <div className="relative mx-auto max-w-5xl px-6 pt-40 pb-10 text-center md:pt-48">
          <Reveal>
            <LogoMark className="logo-drift mx-auto mb-8 h-16 w-auto md:h-20" />
            <h1 className="text-4xl leading-tight font-bold tracking-tight text-balance md:text-6xl">
              <Scribble>Vermögensaufbau</Scribble> mit System:
              <br />
              Investments, Immobilien, Holding.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-9 max-w-3xl text-lg leading-relaxed text-ink-soft md:text-xl">
              Leibinn Consulting entwickelt Strategien für Vermögensaufbau,
              Immobilien-Investments und Holding-Strukturen für Unternehmer und
              Privatpersonen in der Region Stuttgart. Als eingetragener
              Immobilienmakler mit direktem Zugang zu Off-Market-Objekten.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-11">
              <CtaButton href="/kontakt">
                Kostenloses Erstgespräch buchen
              </CtaButton>
              <p className="mt-4 text-sm text-ink-faint">
                60 Minuten, unverbindlich, mit konkreter erster Einschätzung
              </p>
            </div>
          </Reveal>
        </div>
        <SkylineArt className="relative mx-auto -mb-px block w-full max-w-6xl px-6 text-azure-light/25" />
      </section>

      {/* Trust-Strip (Design-Mockup) — [PLATZHALTER] Partner/Auszeichnungen bestätigen */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-ink-faint uppercase">
            Ausgezeichnet und vernetzt
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-ink-faint">
            <li className="font-heading text-lg font-bold tracking-wide">
              Dimensional
            </li>
            <li className="font-heading text-lg font-bold tracking-wide">
              fondsfinanz
            </li>
            <li className="font-heading text-lg font-bold tracking-wide">
              Deutsche Makler Akademie
            </li>
          </ul>
        </div>
      </section>

      <StatStrip
        stats={[
          { value: "60 Min", label: "kostenloses Erstgespräch, online oder vor Ort" },
          { value: "50+", label: "laufend betreute Mandanten" },
          { value: "§ 34d", label: "Versicherungsmakler-Erlaubnis, GewO" },
          { value: "24 h", label: "Antwortzeit auf Ihre Anfrage" },
        ]}
      />

      {/* Problem-Sektion */}
      <Section wide>
        <SectionHeading kicker="Woran Vermögensaufbau scheitert" center>
          Nicht am Einkommen.
          <br />
          An der fehlenden Struktur.
        </SectionHeading>
        <CardGrid cards={painCards} />
      </Section>

      {/* Leistungsüberblick */}
      <Section tone="warm" wide>
        <SectionHeading kicker="Leistungen">
          Sechs Fachbereiche.
          <br />
          Ein Ansprechpartner.
        </SectionHeading>
        <p className="mt-8 max-w-3xl border-l-4 border-accent pl-6 text-lg leading-relaxed font-medium md:text-xl">
          Leibinn Consulting deckt sechs Bereiche ab: Investments,
          Off-Market-Immobilien, Holding-Strukturen, Finanzierung, die
          Vermittlung von Steuer- und Rechtsexperten sowie Absicherung. Die
          Bereiche greifen ineinander. Genau darin liegt der Unterschied zur
          Einzelberatung.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leistungen.map((l) => {
            const Icon = fachbereichIcons[l.slug];
            return (
              <Link
                key={l.href}
                href={l.href}
                className="group flex flex-col rounded-2xl border border-line bg-gradient-to-b from-cobalt to-cobalt/60 p-8 transition-all hover:-translate-y-1 hover:border-azure-light/60 hover:shadow-xl hover:shadow-black/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-azure/25 text-azure-light">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl leading-snug font-bold group-hover:text-fawn">
                  {l.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                  {l.text}
                </p>
                <IconArrowRight className="mt-5 h-5 w-5 text-fawn transition-transform group-hover:translate-x-1" />
              </Link>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/leistungen"
            className="font-medium text-fawn underline-offset-4 hover:underline"
          >
            Alle Leistungen ansehen →
          </Link>
        </div>
      </Section>

      {/* Social Proof — [PLATZHALTER] Google-Bewertungs-Widget ergänzt/ersetzt die Zitate (Copy-Doc) */}
      <Section wide>
        <SectionHeading kicker="Kundenstimmen" center>
          Was Mandanten über die
          <br />
          Zusammenarbeit sagen.
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          <Testimonial
            quote="Als Anwalt bin ich es gewohnt, komplexe Sachverhalte zu durchdringen. Bei Investments verlasse ich mich auf Herrn Leibinn, weil er transparent kommuniziert und jede Empfehlung nachvollziehbar begründet."
            name="Luka Šilić"
            role="Anwalt"
          />
          <Testimonial
            quote="Zeit ist als Selbstständiger mein wertvollstes Gut. Durch die klaren Strategien läuft mein Vermögensaufbau, ohne dass ich mich darum kümmern muss. Ich kann mich voll auf mein Geschäft konzentrieren."
            name="Tom Müller"
            role="selbstständiger Tätowierer"
          />
          <Testimonial
            quote="Kleine Extras wie die regelmäßige Überprüfung meiner bestehenden Verträge zeigen, dass Herr Leibinn langfristig interessiert ist, nicht am schnellen Abschluss."
            name="Winsome Okafor"
            role="Lehrerin"
          />
        </div>
      </Section>

      {/* Beratungsablauf */}
      <Section tone="warm">
        <SectionHeading kicker="So läuft die Zusammenarbeit">
          Wie läuft die Beratung bei Leibinn Consulting ab?
        </SectionHeading>
        <p className="mt-8 border-l-4 border-accent pl-6 text-lg leading-relaxed font-medium md:text-xl">
          Die Beratung folgt vier Schritten: kostenloses Erstgespräch mit
          Bedarfsanalyse, Entwicklung einer Strategie, gemeinsame Umsetzung und
          regelmäßige Überprüfung. Das Erstgespräch dauert 60 Minuten und
          findet online oder vor Ort in Böblingen statt. Sie entscheiden nach
          jedem Schritt selbst, ob es weitergeht.
        </p>
        <StepList steps={steps} />
      </Section>

      {/* Über Cedrik (Kurzversion) */}
      <Section wide>
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.4fr]">
          <PortraitPanel name="Cedrik Leibinn" role={`Gründer, ${site.name}`} />
          <div>
            <SectionHeading kicker="Ihr Ansprechpartner">
              Ein Name. Eine Verantwortung.
              <br />
              Cedrik Leibinn.
            </SectionHeading>
            <div className="mt-8 space-y-6 leading-relaxed text-ink-soft">
              <p>
                Leibinn Consulting wird von Cedrik Leibinn geführt:
                eingetragener Immobilienmakler
                {/* [PLATZHALTER] § 34c GewO, Nr. bestätigen (Copy-Doc) */} und
                Versicherungsmakler mit Erlaubnis nach § 34d Abs. 1 GewO
                (Vermittlerregister Nr. D-LLF9-5XQCE-01, IHK Region
                Stuttgart). Über 50 Mandanten setzen auf diese Betreuung.
              </p>
              <p>
                Sie sprechen vom Erstgespräch bis zur laufenden Betreuung mit
                derselben Person. Keine Übergaben, keine wechselnden
                Zuständigkeiten.
              </p>
            </div>
            <ul className="mt-7 space-y-2.5">
              {[
                "Fester Ansprechpartner, vom Erstgespräch bis zur laufenden Betreuung",
                "Eingetragener Immobilien- und Versicherungsmakler (§ 34d GewO)",
                "Über 50 laufend betreute Mandanten",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden
                    className="mt-1 h-4 w-4 shrink-0 text-fawn"
                  >
                    <path
                      d="M3 10.5l4.5 4.5L17 5.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[0.95rem] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/ueber-uns"
              className="mt-8 inline-block font-medium text-fawn underline-offset-4 hover:underline"
            >
              Mehr über Leibinn Consulting →
            </Link>
          </div>
        </div>
      </Section>

      <Faq title="Häufige Fragen" items={faqItems} />

      <FinalCta
        title={
          <>
            Der erste Schritt kostet nichts.
            <br />
            Nur 60 Minuten.
          </>
        }
        text="Im Erstgespräch analysieren wir Ihre Situation und Sie erhalten eine konkrete Einschätzung. Keine Verkaufspräsentation, keine Verpflichtung."
        ctaLabel="Kostenloses Erstgespräch buchen"
        ctaHref="/kontakt"
        microTrust="Antwort innerhalb von 24 Stunden. Termin online oder vor Ort."
      />

      <JsonLd data={personJsonLd} />
      <JsonLd data={howToJsonLd("Beratungsablauf bei Leibinn Consulting", steps)} />
    </>
  );
}
