import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { Scribble } from "@/components/Scribble";
import { LightSection } from "@/components/Theme";
import { Bento, BentoCell } from "@/components/Bento";
import { EditorialHeader } from "@/components/Editorial";
import { BigSteps } from "@/components/BigSteps";
import { Testimonial } from "@/components/Testimonial";
import { Faq, type FaqItem } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd, howToJsonLd } from "@/components/JsonLd";
import { PortraitPanel } from "@/components/VisualPanel";
import { LogoMark } from "@/components/Brand";
import { HeroVideo } from "@/components/HeroVideo";
import { Reveal } from "@/components/Reveal";
import { fachbereichIcons, IconArrowRight } from "@/components/icons";
import { site } from "@/lib/site";
import type { Step } from "@/components/StepList";

export const metadata: Metadata = {
  title: {
    absolute: "Investments, Immobilien & Holding Böblingen | Leibinn Consulting",
  },
  description:
    "Vermögensaufbau mit Investments, Off-Market-Immobilien und Holding-Strukturen. Leibinn Consulting berät Unternehmer und Privatpersonen bei Stuttgart. Erstgespräch kostenlos.",
  alternates: { canonical: "/" },
};

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
  image: `${site.url}/images/cedrik-portrait.webp`,
};

export default function HomePage() {
  return (
    <>
      {/* 00 · Hero — Skyline-Video (spielt einmal, friert ein), Text asymmetrisch darüber */}
      <section className="relative -mt-18 flex min-h-[92vh] flex-col overflow-hidden border-b border-line">
        <HeroVideo />
        {/* Navy-Overlays: Tint über der ganzen Fläche + dunkler hinter der Headline links + Verlauf nach unten */}
        <div
          aria-hidden
          className="absolute inset-0 bg-twilight/55"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-twilight via-twilight/75 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-twilight to-transparent"
        />
        <div className="relative mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-end gap-12 px-6 pt-40 pb-16 md:grid-cols-12 md:pb-20">
          <div className="md:col-span-8">
            <Reveal>
              <p className="text-sm font-semibold tracking-[0.25em] text-fawn uppercase">
                Vermögensaufbau · Region Stuttgart
              </p>
              <h1 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
                <Scribble>Vermögensaufbau</Scribble> mit System: Investments,
                Immobilien, Holding.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
                Leibinn Consulting entwickelt Strategien für Vermögensaufbau,
                Immobilien-Investments und Holding-Strukturen für Unternehmer
                und Privatpersonen in der Region Stuttgart. Als eingetragener
                Immobilienmakler mit direktem Zugang zu Off-Market-Objekten.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <CtaButton href="/kontakt">
                  Kostenloses Erstgespräch buchen
                </CtaButton>
                <CtaButton href="/leistungen" variant="secondary">
                  Leistungen ansehen
                </CtaButton>
              </div>
              <p className="mt-4 text-sm text-ink-faint">
                60 Minuten, unverbindlich, mit konkreter erster Einschätzung
              </p>
            </Reveal>
          </div>
          <div className="hidden md:col-span-3 md:col-start-10 md:flex md:flex-col md:justify-center md:gap-4">
            <Reveal delay={300}>
              <LogoMark className="logo-drift mb-6 h-20 w-auto" />
            </Reveal>
            {[
              ["60 Min", "kostenloses Erstgespräch"],
              ["50+", "laufend betreute Mandanten"],
              ["24 h", "Antwortzeit auf Anfragen"],
            ].map(([value, label], i) => (
              <Reveal key={value} delay={360 + i * 90}>
                <div className="rounded-xl border border-line bg-twilight-deep/70 px-5 py-4">
                  <p className="font-heading text-2xl font-bold text-fawn">
                    {value}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-soft">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        {/* Trust-Strip (Partner vom Kunden bestätigt) */}
        <div className="relative border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-2 px-6 py-5 text-ink-faint">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase">
              Ausgezeichnet und vernetzt
            </span>
            <span className="font-heading text-base font-bold">Dimensional</span>
            <span className="font-heading text-base font-bold">fondsfinanz</span>
            <span className="font-heading text-base font-bold">
              Deutsche Makler Akademie
            </span>
          </div>
        </div>
      </section>

      {/* 01 · Problem — weißer Breaker, versetzte Karten */}
      <LightSection className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <EditorialHeader
            no="01"
            kicker="Woran Vermögensaufbau scheitert"
            title={
              <>
                Nicht am Einkommen.
                <br />
                An der fehlenden Struktur.
              </>
            }
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              [
                "Geld liegt auf dem Konto und verliert real an Wert.",
                "Inflation kostet jedes Jahr Kaufkraft. Die Entscheidung, nichts zu tun, ist auch eine Entscheidung.",
                "",
              ],
              [
                "Gute Immobilien tauchen nie auf Portalen auf.",
                "Die rentabelsten Objekte wechseln den Besitzer, bevor sie öffentlich werden. Wer nur auf Portalen sucht, sieht den Rest.",
                "md:-translate-y-6",
              ],
              [
                "Als Unternehmer verschenken Sie Struktur.",
                "Gewinne in der GmbH, Vermögen privat, keine Verbindung dazwischen: Ohne passende Struktur zahlen Sie mehr Steuern und tragen mehr Risiko als nötig.",
                "md:translate-y-6",
              ],
            ].map(([title, text, offset]) => (
              <Reveal key={title} className={offset}>
                <div className="h-full rounded-2xl border border-line bg-paper-warm p-8">
                  <h3 className="text-xl leading-snug font-bold">{title}</h3>
                  <p className="mt-4 leading-relaxed text-ink-soft">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </LightSection>

      {/* 02 · Leistungen — asymmetrisches Bento */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <EditorialHeader
            no="02"
            kicker="Leistungen"
            title={
              <>
                Sechs Fachbereiche.
                <br />
                Ein Ansprechpartner.
              </>
            }
            intro="Leibinn Consulting deckt sechs Bereiche ab: Investments, Off-Market-Immobilien, Holding-Strukturen, Finanzierung, die Vermittlung von Steuer- und Rechtsexperten sowie Absicherung. Die Bereiche greifen ineinander. Genau darin liegt der Unterschied zur Einzelberatung."
          />
          <Bento className="mt-14">
            <BentoCell
              href="/investments"
              surface="cobalt"
              className="md:col-span-7 md:min-h-72"
            >
              <CellIcon slug="investments" />
              <h3 className="mt-auto pt-10 font-heading text-2xl font-bold group-hover:text-fawn">
                Investments
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                Strategien für den Vermögensaufbau: breite Streuung, klare
                Risikoverteilung, transparente Kosten. Die Anlageberatung
                übernehmen spezialisierte Partner, Leibinn Consulting
                entwickelt die Strategie und behält das Gesamtbild.
              </p>
              <CellArrow />
            </BentoCell>
            <BentoCell
              href="/immobilien"
              surface="azure"
              className="md:col-span-5 md:min-h-72"
            >
              <CellIcon slug="immobilien" light />
              <h3 className="mt-auto pt-10 font-heading text-2xl font-bold">
                Off-Market-Immobilien
              </h3>
              <p className="mt-3 leading-relaxed text-white/80">
                Als eingetragener Immobilienmakler vermitteln wir Objekte, die
                nie auf Portalen erscheinen, in Regionen mit stabiler
                Mietnachfrage. Auf Wunsch mit Miet- und Hausverwaltung.
              </p>
              <CellArrow light />
            </BentoCell>
            <BentoCell
              href="/holding"
              surface="white"
              className="md:col-span-5"
            >
              <CellIcon slug="holding" azure />
              <h3 className="mt-6 font-heading text-xl font-bold">
                Holding-Strukturen & Unternehmensberatung
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-[#191838]/70">
                Von der Frage, ob sich eine Holding für Sie lohnt, bis zur
                Gründung: Beratung, Begleitung und Umsetzung in einem
                durchgehenden Prozess.
              </p>
              <CellArrow azure />
            </BentoCell>
            <BentoCell
              href="/finanzierung"
              surface="cobalt"
              className="md:col-span-4"
            >
              <CellIcon slug="finanzierung" />
              <h3 className="mt-6 font-heading text-xl font-bold group-hover:text-fawn">
                Finanzierung
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                Unabhängige Finanzierungsexperten aus dem Partnernetzwerk
                vergleichen die Konditionen mehrerer Banken: weniger Termine,
                ein koordinierter Prozess, verhandelte Zinsen.
              </p>
              <CellArrow />
            </BentoCell>
            <BentoCell
              href="/steuern-recht"
              surface="outline"
              className="md:col-span-3"
            >
              <CellIcon slug="steuern-recht" />
              <h3 className="mt-6 font-heading text-xl font-bold group-hover:text-fawn">
                Steuern & Recht
              </h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                Hier beraten wir nicht selbst. Wir vermitteln geprüfte
                Steuerberater und Anwälte aus unserem Netzwerk, passend zu
                Ihrer Struktur.
              </p>
              <CellArrow />
            </BentoCell>
            <BentoCell
              href="/absicherung"
              surface="fawn"
              className="md:col-span-8"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-heading text-xl font-bold">
                    Absicherung
                  </h3>
                  <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-twilight-deep/75">
                    Was aufgebaut wird, muss geschützt sein. Als zugelassener Makler
                    sichern wir Vermögen, Immobilien und Betrieb ab,
                    mit freier Auswahl aus dem Markt.
                  </p>
                </div>
                <IconArrowRight className="mt-1 h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1" />
              </div>
            </BentoCell>
            <BentoCell surface="outline" className="items-center justify-center md:col-span-4">
              <Link
                href="/leistungen"
                className="font-medium text-fawn underline-offset-4 hover:underline"
              >
                Alle Leistungen ansehen →
              </Link>
            </BentoCell>
          </Bento>
        </div>
      </section>

      {/* 03 · Ablauf — weißer Breaker mit BigSteps */}
      <LightSection className="border-y border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <EditorialHeader
            no="03"
            kicker="So läuft die Zusammenarbeit"
            title="Wie läuft die Beratung bei Leibinn Consulting ab?"
            intro="Die Beratung folgt vier Schritten: kostenloses Erstgespräch mit Bedarfsanalyse, Entwicklung einer Strategie, gemeinsame Umsetzung und regelmäßige Überprüfung. Das Erstgespräch dauert 60 Minuten und findet online oder vor Ort in Böblingen statt. Sie entscheiden nach jedem Schritt selbst, ob es weitergeht."
          />
          <div className="mt-10">
            <BigSteps steps={steps} />
          </div>
        </div>
      </LightSection>

      {/* 04 · Kundenstimmen — Feature + Stack */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <EditorialHeader
            no="04"
            kicker="Kundenstimmen"
            title={
              <>
                Was Mandanten über die
                <br />
                Zusammenarbeit sagen.
              </>
            }
          />
          {/* [PLATZHALTER] Google-Bewertungs-Widget ergänzt/ersetzt die Zitate (Copy-Doc) */}
          <div className="mt-14 grid gap-6 md:grid-cols-12">
            <Testimonial
              featured
              className="md:col-span-7"
              quote="Als Anwalt bin ich es gewohnt, komplexe Sachverhalte zu durchdringen. Bei Investments verlasse ich mich auf Herrn Leibinn, weil er transparent kommuniziert und jede Empfehlung nachvollziehbar begründet."
              name="Luka Šilić"
              role="Anwalt"
              photo="/images/luka-silic.webp"
            />
            <div className="flex flex-col gap-6 md:col-span-5">
              <Testimonial
                quote="Zeit ist als Selbstständiger mein wertvollstes Gut. Durch die klaren Strategien läuft mein Vermögensaufbau, ohne dass ich mich darum kümmern muss. Ich kann mich voll auf mein Geschäft konzentrieren."
                name="Tom Müller"
                role="selbstständiger Tätowierer"
                photo="/images/tom-mueller.webp"
              />
              <Testimonial
                quote="Kleine Extras wie die regelmäßige Überprüfung meiner bestehenden Verträge zeigen, dass Herr Leibinn langfristig interessiert ist, nicht am schnellen Abschluss."
                name="Winsome Okafor"
                role="Lehrerin"
                photo="/images/winsome-okafor.webp"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 05 · Über Cedrik — weißer Breaker, Porträt versetzt */}
      <LightSection className="border-y border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4 md:-translate-y-4">
            <PortraitPanel
              name="Cedrik Leibinn"
              role={`Gründer, ${site.name}`}
              src="/images/cedrik-portrait.webp"
            />
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <EditorialHeader
              no="05"
              kicker="Ihr Ansprechpartner"
              wide
              title={
                <>
                  Ein Name. Eine Verantwortung.
                  <br />
                  Cedrik Leibinn.
                </>
              }
            />
            <div className="mt-8 space-y-5 leading-relaxed text-ink-soft">
              <p>
                Leibinn Consulting wird von Cedrik Leibinn geführt:
                eingetragener Immobilienmakler und zugelassener
                Versicherungsmakler mit Sitz in Böblingen bei Stuttgart. Über
                50 Mandanten setzen auf diese Betreuung.
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
                "Eingetragener Immobilien- und Versicherungsmakler, IHK Region Stuttgart",
                "Über 50 laufend betreute Mandanten",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden
                    className="mt-1 h-4 w-4 shrink-0 text-azure"
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
              className="mt-8 inline-block font-medium text-azure underline-offset-4 hover:underline"
            >
              Mehr über Leibinn Consulting →
            </Link>
          </div>
        </div>
      </LightSection>

      {/* 06 · FAQ — dunkel, asymmetrisch platziert */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:py-28">
          <p className="font-heading text-sm font-semibold tracking-[0.2em] text-fawn uppercase md:col-span-3">
            06 · FAQ
          </p>
          <div className="md:col-span-9">
            <Faq title="Häufige Fragen" items={faqItems} />
          </div>
        </div>
      </section>

      <CtaBanner
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

function CellIcon({
  slug,
  light,
  azure,
}: {
  slug: keyof typeof fachbereichIcons;
  light?: boolean;
  azure?: boolean;
}) {
  const Icon = fachbereichIcons[slug];
  const tone = light
    ? "bg-white/15 text-white"
    : azure
      ? "bg-azure/10 text-azure"
      : "bg-azure/25 text-azure-light";
  return (
    <span
      className={`flex h-12 w-12 items-center justify-center rounded-xl ${tone}`}
    >
      <Icon className="h-6 w-6" />
    </span>
  );
}

function CellArrow({ light, azure }: { light?: boolean; azure?: boolean }) {
  const tone = light ? "text-white" : azure ? "text-azure" : "text-fawn";
  return (
    <IconArrowRight
      className={`mt-5 h-5 w-5 ${tone} transition-transform group-hover:translate-x-1`}
    />
  );
}
