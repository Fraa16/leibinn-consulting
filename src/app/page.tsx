import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { BrandLine } from "@/components/Brand";
import type { FaqEntry } from "@/components/FaqList";
import { FaqBlock } from "@/components/page/FaqBlock";
import { BookingSection } from "@/components/page/BookingSection";
import { PageShell } from "@/components/page/Blocks";
import { JsonLd, howToJsonLd } from "@/components/JsonLd";
import { LeistungenBento } from "@/components/home/LeistungenBento";
import { Wegweiser } from "@/components/home/Wegweiser";
import { TestimonialSlider, type Quote } from "@/components/home/TestimonialSlider";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconCalendar,
  IconCheck,
  IconShieldCheck,
} from "@/components/icons";
import { site, topicBySlug, topics, worlds, type TopicSlug } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Investments, Immobilien & Holding Böblingen | Leibinn Consulting",
  },
  description:
    "Vermögensaufbau mit Investments, Off-Market-Immobilien und Holding-Strukturen. Leibinn Consulting berät Unternehmer und Privatpersonen bei Stuttgart. Erstgespräch kostenlos.",
  alternates: { canonical: "/" },
};

/* ---------- Inhalte ---------- */

const stats = [
  { value: site.clients, label: "Mandanten betreut" },
  { value: "6", label: "Fachbereiche aus einer Hand" },
  { value: `${site.callMinutes} Min`, label: "Kostenloses Erstgespräch" },
  { value: "24 h", label: "Antwort auf Anfragen" },
];

const partners = ["Dimensional", "fondsfinanz", "Deutsche Makler Akademie"];

const pains: { title: string; text: string; topic: TopicSlug }[] = [
  {
    title: "Geld liegt auf dem Konto und verliert real an Wert.",
    text: "Inflation kostet jedes Jahr Kaufkraft. Die Entscheidung, nichts zu tun, ist auch eine Entscheidung.",
    topic: "investments",
  },
  {
    title: "Gute Immobilien tauchen nie auf Portalen auf.",
    text: "Die rentabelsten Objekte wechseln den Besitzer, bevor sie öffentlich werden. Wer nur auf Portalen sucht, sieht den Rest.",
    topic: "immobilien",
  },
  {
    title: "Als Unternehmer verschenken Sie Struktur.",
    text: "Gewinne in der GmbH, Vermögen privat, keine Verbindung dazwischen: Ohne passende Struktur zahlen Sie mehr Steuern und tragen mehr Risiko als nötig.",
    topic: "holding",
  },
];

const steps = [
  {
    title: "Erstgespräch",
    summary: `${site.callMinutes} Minuten, kostenlos, per Video oder Telefon.`,
    details:
      "Sie schildern kurz Ihre Situation, wir sagen ehrlich, ob und wo wir helfen können. Auch wenn es nicht passt, gehen Sie mit einer ersten Einschätzung raus.",
    photo: "/images/cedrik-smile.webp",
    alt: "Cedrik Leibinn, Gründer von Leibinn Consulting",
    pos: "object-[50%_28%]",
  },
  {
    title: "Analyse & Strategie",
    summary: "Ihre Situation im Detail, Ihr Plan auf Papier.",
    details:
      "Einkommen, Vermögen, Verträge, Ziele und Risikobereitschaft. Daraus entsteht Ihre Strategie: Investments, Immobilien und Struktur aufeinander abgestimmt, schriftlich und begründet.",
    photo: "/images/cedrik-kundengespraech.webp",
    alt: "Cedrik Leibinn im Beratungsgespräch mit einer Mandantin",
    pos: "object-[35%_35%]",
  },
  {
    title: "Umsetzung",
    summary: "Schritt für Schritt, gemeinsam umgesetzt.",
    details:
      "Mit Fokus auf Streuung und Risikomanagement, koordiniert mit unseren Partnern. Sie unterschreiben nichts, was Sie nicht verstanden haben.",
    photo: "/images/cedrik-praesentation.webp",
    alt: "Cedrik Leibinn präsentiert eine Strategie im Besprechungsraum",
    pos: "object-[60%_40%]",
  },
  {
    title: "Laufende Begleitung",
    summary: "Ihr Plan bleibt aktuell.",
    details:
      "Märkte und Lebensumstände ändern sich. Wir prüfen Ihre Strategie regelmäßig und passen an, wo es nötig ist.",
    photo: "/images/ffm-park.webp",
    alt: "Hochhäuser hinter Bäumen an einem sonnigen Tag",
    pos: "object-center",
  },
];

const reasons = [
  {
    title: "Ein fester Ansprechpartner",
    text: "Vom Erstgespräch bis zur laufenden Betreuung. Keine Übergaben, keine wechselnden Zuständigkeiten.",
  },
  {
    title: "Gesamtblick statt Einzelprodukt",
    text: "Investments, Immobilien und Struktur werden zusammen gedacht, damit sich die Bausteine nicht widersprechen.",
  },
  {
    title: "IHK-registriert",
    text: "Eingetragener Immobilienmakler und zugelassener Versicherungsmakler, IHK Region Stuttgart.",
  },
  {
    title: "Zugang off-market",
    text: "Objekte aus dem persönlichen Netzwerk, die nie auf Portalen erscheinen.",
  },
  {
    title: "Offene Vergütung",
    text: "Alle Vergütungswege werden vor Beginn erklärt. Was Sie zahlen, wissen Sie vorher.",
  },
  {
    title: "Online oder vor Ort",
    text: "Gespräche per Video, Telefon oder persönlich in Böblingen bei Stuttgart.",
  },
];

const quotes: Quote[] = [
  {
    quote:
      "Als Anwalt bin ich es gewohnt, komplexe Sachverhalte zu durchdringen. Bei Investments verlasse ich mich auf Herrn Leibinn, weil er transparent kommuniziert und jede Empfehlung nachvollziehbar begründet.",
    name: "Luka Šilić",
    role: "Anwalt",
    photo: "/images/luka-silic.webp",
  },
  {
    quote:
      "Zeit ist als Selbstständiger mein wertvollstes Gut. Durch die klaren Strategien läuft mein Vermögensaufbau, ohne dass ich mich darum kümmern muss. Ich kann mich voll auf mein Geschäft konzentrieren.",
    name: "Tom Müller",
    role: "Selbstständiger Tätowierer",
    photo: "/images/tom-mueller.webp",
  },
  {
    quote:
      "Kleine Extras wie die regelmäßige Überprüfung meiner bestehenden Verträge zeigen, dass Herr Leibinn langfristig interessiert ist, nicht am schnellen Abschluss.",
    name: "Winsome Okafor",
    role: "Lehrerin",
    photo: "/images/winsome-okafor.webp",
  },
];

const faqItems: FaqEntry[] = [
  {
    q: "Was kostet die Beratung bei Leibinn Consulting?",
    a: "Das Erstgespräch ist kostenlos und unverbindlich. Bei einer Zusammenarbeit hängt die Vergütung vom Bereich ab: In der Immobilien- und Versicherungsvermittlung erfolgt sie in der Regel über Provisionen bzw. Courtagen, ohne zusätzliche Kosten für Sie. Alle Vergütungswege werden vor Beginn offen erklärt.",
  },
  {
    q: "Wie läuft das kostenlose Erstgespräch ab?",
    a: "Das Erstgespräch dauert 15 Minuten und findet per Video oder Telefon statt. Sie schildern kurz Ihre Situation und Ihre Ziele, wir geben eine ehrliche erste Einschätzung, wo der größte Hebel liegt. Passt es, vereinbaren wir einen ausführlichen Analysetermin, online oder vor Ort in Böblingen. Kosten oder Verpflichtungen entstehen nicht.",
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
    q: "Warum alle Bereiche bei einem Ansprechpartner bündeln?",
    a: "Weil Vermögensentscheidungen zusammenhängen: Eine Holding verändert die Steuerlast, die Finanzierung bestimmt die Rendite der Immobilie, die Struktur entscheidet über das Risiko. Wer alles getrennt betreuen lässt, riskiert Widersprüche zwischen den Bausteinen. Ein Ansprechpartner mit Gesamtblick erkennt diese Wechselwirkungen, und Sie sparen Abstimmungsaufwand.",
  },
  {
    q: "Muss ich mich auf das Gespräch vorbereiten?",
    a: "Nein. Hilfreich ist ein grobes Bild Ihrer Situation: ungefähres Einkommen, vorhandene Anlagen, laufende Verpflichtungen, Ziele. Exakte Unterlagen brauchen wir erst, wenn es in die ausführliche Analyse geht.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cedrik Leibinn",
  jobTitle: "Gründer und Inhaber",
  worksFor: { "@type": "Organization", name: site.name },
  address: { "@type": "PostalAddress", addressLocality: site.city },
  image: `${site.url}/images/cedrik-standing.webp`,
};

/* ---------- Seite ---------- */

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Situation />
      <Leistungen />
      <WegweiserSection />
      <Ablauf />
      <Ueber />
      <Stimmen />
      <FaqBlock
        title={
          <>
            Gut zu wissen, <em>bevor wir sprechen.</em>
          </>
        }
        items={faqItems}
      />
      <BookingSection
        title={
          <>
            Sprechen wir über <em>Ihre Situation.</em>
          </>
        }
        lead={`${site.callMinutes} Minuten, kostenlos und unverbindlich. Danach wissen Sie, wo Ihr größter Hebel liegt und wie es weitergehen kann.`}
      />
      <JsonLd data={personJsonLd} />
      <JsonLd
        data={howToJsonLd(
          "Beratungsablauf bei Leibinn Consulting",
          steps.map((s) => ({ title: s.title, plainText: `${s.summary} ${s.details}` })),
        )}
      />
    </PageShell>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section
      id="top"
      className="lc-panel flex min-h-[calc(100svh-2*var(--inset))] flex-col !py-0"
    >
      {/* Skyline-Video (spielt einmal, friert ein) unter Navy-Verläufen */}
      <div aria-hidden className="absolute inset-0 -z-10 [filter:saturate(0.72)_contrast(1.04)]">
        <HeroVideo />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,17,31,0.94)_0%,rgba(8,17,31,0.8)_40%,rgba(8,17,31,0.4)_72%,rgba(8,17,31,0.3)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(8,17,31,0.96)_0%,rgba(8,17,31,0)_42%),linear-gradient(180deg,rgba(8,17,31,0.55)_0%,rgba(8,17,31,0)_22%)]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy-950/45 min-[1000px]:hidden" />
      <BrandLine
        shape="a"
        color="var(--color-copper-light)"
        opacity={0.1}
        className="-bottom-[8%] -left-[10%] w-[min(980px,80vw)]"
      />

      <div className="lc-wrap relative flex flex-1 flex-col pt-[calc(var(--header-h)+clamp(32px,4.5vw,64px))]">
        <div className="grid flex-1 items-center gap-12 min-[1000px]:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <div className="flex flex-col items-start">
            <Reveal>
              <p className="eyebrow">Investment Consulting · Böblingen bei Stuttgart</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-1 mt-8 max-w-[11.5em]">
                Vermögen strategisch aufbauen. <em>Gezielt absichern.</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead mt-8 max-w-[34em]">
                Investments, Off-Market-Immobilien, Holding-Strukturen,
                Finanzierung, betriebliche Vorsorge und Absicherung. Für
                Privatpersonen und Unternehmen, aus einer Hand und mit einem
                festen Ansprechpartner.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#termin" className="btn btn-lg btn-copper">
                  <IconCalendar className="h-[18px] w-[18px]" />
                  Kostenloses Erstgespräch buchen
                </a>
                <a href="#wegweiser" className="btn btn-lg btn-outline-dark">
                  Wegweiser starten
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex">
                    {quotes.map((q, n) => (
                      <Image
                        key={q.name}
                        src={q.photo}
                        alt=""
                        width={40}
                        height={40}
                        className={`h-10 w-10 rounded-full border-2 border-navy-950 object-cover ${n ? "-ml-2.5" : ""}`}
                      />
                    ))}
                  </div>
                  <div className="leading-tight">
                    <p className="text-[15px] font-semibold">{site.clients} Mandanten</p>
                    <p className="mt-1 text-[13px] text-on-dark-subtle">
                      vertrauen auf unsere Beratung
                    </p>
                  </div>
                </div>
                <span aria-hidden className="hidden h-9 w-px bg-white/12 sm:block" />
                <div className="flex items-center gap-3">
                  <IconShieldCheck className="h-[26px] w-[26px] text-copper-light" />
                  <div className="leading-tight">
                    <p className="text-[15px] font-semibold">IHK-registriert</p>
                    <p className="mt-1 text-[13px] text-on-dark-subtle">
                      Immobilien- und Versicherungsmakler
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Glas-Karte: Fachbereiche + Erstgespräch */}
          <Reveal delay={300} className="hidden min-[1000px]:block">
            <div className="ml-auto max-w-[400px] rounded-[26px] border border-white/12 bg-navy-950/55 p-2 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              <div className="flex items-center justify-between px-4 pt-4 pb-2">
                <span className="mono text-copper-light">Sechs Fachbereiche</span>
                <span className="mono text-on-dark-subtle">Ein Ansprechpartner</span>
              </div>
              <ul>
                {topics.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={t.href}
                      className="group flex items-center justify-between rounded-[14px] px-4 py-3 text-[15px] transition-colors hover:bg-white/6"
                    >
                      <span className="flex items-center gap-3">
                        <span className={`h-1.5 w-1.5 rounded-full ${worlds[t.world].dot}`} />
                        {t.label}
                      </span>
                      <IconArrowUpRight className="h-4 w-4 text-on-dark-subtle transition-colors group-hover:text-white" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-2 flex items-center gap-3 rounded-[20px] bg-ivory p-3.5 text-navy">
                <Image
                  src="/images/cedrik-avatar.webp"
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1 leading-tight">
                  <p className="text-[15px] font-semibold">Erstgespräch</p>
                  <p className="mt-1 text-[12.5px] text-subtle">
                    {site.callMinutes} Min · kostenlos · Video oder Telefon
                  </p>
                </div>
                <a
                  href="#termin"
                  aria-label="Termin wählen"
                  className="icon-btn h-11 w-11 bg-navy text-white hover:bg-copper hover:text-navy-950"
                >
                  <IconArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-t border-white/12 md:grid-cols-4">
          {stats.map((s, n) => (
            <div
              key={s.label}
              className={`py-7 md:py-9 ${n % 2 ? "pl-5 md:pl-0" : ""} ${n > 1 ? "border-t border-white/12 md:border-t-0" : ""}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-[clamp(32px,3.4vw,46px)] leading-none font-light tracking-[-0.04em] tnum">
                  {s.value}
                </span>
                <span className="mono mt-3 block text-on-dark-subtle">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- 01 Situation ---------- */

function Situation() {
  return (
    <section className="lc-section !pt-0">
      <div className="lc-wrap">
        <Reveal className="flex flex-col gap-4 border-b border-navy/12 py-9 md:flex-row md:items-center md:gap-12">
          <p className="mono shrink-0 text-subtle">Ausgezeichnet und vernetzt</p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-2">
            {partners.map((p) => (
              <li
                key={p}
                className="text-[clamp(17px,1.6vw,21px)] font-semibold tracking-[-0.02em] text-navy/45"
              >
                {p}
              </li>
            ))}
          </ul>
        </Reveal>

        <SectionHead
          className="mt-[clamp(72px,8vw,120px)]"
          eyebrow="Woran Vermögensaufbau scheitert"
          title={
            <>
              Nicht am Einkommen. <em>An der fehlenden Struktur.</em>
            </>
          }
          lead="Die meisten haben genug Einkommen, um Vermögen aufzubauen. Was fehlt, ist ein Plan, der Geld, Immobilien und Unternehmen zusammendenkt."
        />

        <Reveal className="relative mt-[clamp(48px,6vw,72px)] flex min-h-[clamp(320px,32vw,440px)] items-end overflow-hidden rounded-[28px] bg-navy-850">
          <Image
            src="/images/ffm-dom.webp"
            alt="Frankfurter Altstadt mit Dom vor der Skyline"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover object-[50%_40%]"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,26,45,0.92)_0%,rgba(13,26,45,0.6)_45%,rgba(13,26,45,0.05)_100%)]"
          />
          <p className="display-3 relative max-w-[19em] p-[clamp(24px,4vw,56px)] text-white">
            Vermögen entsteht nicht durch einzelne Produkte, sondern durch
            Entscheidungen, die zusammenpassen.
          </p>
        </Reveal>

        <ol className="mt-[clamp(48px,6vw,72px)] grid gap-x-10 gap-y-12 md:grid-cols-3">
          {pains.map((p, i) => {
            const t = topicBySlug(p.topic);
            const w = worlds[t.world];
            return (
              <Reveal as="li" key={p.title} delay={i * 90} className="flex flex-col border-t border-navy/12 pt-7">
                <div className="flex items-center justify-between">
                  <span className="mono text-subtle tnum">0{i + 1}</span>
                  <span className={`mono flex items-center gap-2 ${w.text}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${w.dot}`} />
                    {t.label}
                  </span>
                </div>
                <h3 className="mt-6 text-[clamp(21px,2vw,26px)] leading-[1.2] font-medium tracking-[-0.025em] text-navy">
                  {p.title}
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-body">{p.text}</p>
                <Link
                  href={t.href}
                  className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-copper-dark"
                >
                  Mehr zu {t.label}
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mt-[clamp(56px,6vw,80px)] flex flex-col gap-6 rounded-[24px] border border-sand bg-white p-[clamp(24px,3vw,36px)] md:flex-row md:items-center md:justify-between">
          <p className="text-[clamp(20px,1.8vw,24px)] leading-snug font-medium tracking-[-0.02em] text-navy">
            Klingt vertraut?{" "}
            <span className="text-body">Genau dafür gibt es das Erstgespräch.</span>
          </p>
          <a href="#termin" className="btn btn-lg btn-ink shrink-0">
            <IconCalendar className="h-[18px] w-[18px]" />
            Kostenloses Erstgespräch buchen
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 02 Leistungen ---------- */

function Leistungen() {
  return (
    <section id="leistungen" className="lc-panel">
      <BrandLine
        shape="b"
        color="var(--color-copper-light)"
        opacity={0.1}
        className="-top-6 -right-40 w-[min(1000px,90vw)]"
      />
      <div className="lc-wrap relative">
        <SectionHead
          eyebrow="Leistungen"
          title={
            <>
              Sechs Fachbereiche. <em>Ein Ansprechpartner.</em>
            </>
          }
          lead="Die Bereiche greifen ineinander: Eine Holding verändert die Steuerlast, die Finanzierung bestimmt die Rendite der Immobilie. Genau darin liegt der Unterschied zur Einzelberatung."
        >
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {Object.values(worlds).map((w) => (
              <li key={w.label} className="mono flex items-center gap-2 text-on-dark-body">
                <span className={`h-1.5 w-1.5 rounded-full ${w.dot}`} />
                {w.label}
              </li>
            ))}
          </ul>
        </SectionHead>
        <div className="mt-[clamp(48px,6vw,72px)]">
          <LeistungenBento />
        </div>
      </div>
    </section>
  );
}

/* ---------- 03 Wegweiser ---------- */

function WegweiserSection() {
  return (
    <section id="wegweiser" className="lc-section overflow-hidden">
      <BrandLine
        shape="a"
        color="var(--color-copper)"
        opacity={0.1}
        className="-bottom-24 -left-48 w-[min(900px,90vw)]"
      />
      <div className="lc-wrap relative">
        <SectionHead
          eyebrow="Wegweiser"
          title={
            <>
              Wo stehen Sie gerade? <em>Drei Fragen, eine klare Richtung.</em>
            </>
          }
          lead="Sechs Fachbereiche sind viel auf einmal. Beantworten Sie drei kurze Fragen und sehen Sie, wo bei Ihnen der größte Hebel liegt. Unverbindlich und ohne Anmeldung."
        />
        <Reveal className="mt-[clamp(48px,6vw,72px)]">
          <Wegweiser />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 04 Ablauf ---------- */

function Ablauf() {
  return (
    <section id="ablauf" className="lc-panel">
      <BrandLine
        shape="b"
        color="var(--color-copper-light)"
        opacity={0.12}
        className="-top-10 -right-48 w-[min(1000px,90vw)]"
      />
      <div className="lc-wrap relative">
        <SectionHead
          eyebrow="So läuft die Zusammenarbeit"
          title={
            <>
              Vier Schritte. <em>Sie entscheiden nach jedem.</em>
            </>
          }
          lead="Erst verstehen, dann planen, dann umsetzen. Und danach bleiben wir an Ihrer Seite, solange Sie es möchten."
        />

        <ol className="mt-[clamp(48px,6vw,72px)] grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-navy-850">
                <Image
                  src={s.photo}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1100px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className={`object-cover ${s.pos}`}
                />
              </div>
              <div className="mt-7 flex items-center gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] font-semibold tnum ${
                    i === 0
                      ? "bg-copper-light text-navy-950"
                      : "border border-white/20 text-copper-light"
                  }`}
                >
                  {i + 1}
                </span>
                <span aria-hidden className="h-px flex-1 bg-white/12" />
              </div>
              <p className="mono mt-6 text-copper-light">Schritt 0{i + 1}</p>
              <h3 className="mt-3 text-[clamp(24px,2.2vw,28px)] leading-tight font-medium tracking-[-0.025em]">
                {s.title}
              </h3>
              <p className="mt-3 text-[16px] leading-snug text-on-dark">{s.summary}</p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-on-dark-body">{s.details}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <ul className="flex flex-wrap gap-2">
            {["Fester Ansprechpartner", "Strategie schriftlich", "Keine Verpflichtung"].map(
              (c) => (
                <li
                  key={c}
                  className="flex items-center gap-2 rounded-full bg-white/6 px-4 py-2.5 text-[14px] text-on-dark"
                >
                  <IconCheck className="h-4 w-4 text-copper-light" />
                  {c}
                </li>
              ),
            )}
          </ul>
          <a href="#termin" className="btn btn-lg btn-white self-start lg:self-auto">
            Kostenloses Erstgespräch buchen
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- 05 Über Cedrik ---------- */

function Ueber() {
  return (
    <section id="ueber" className="lc-section overflow-hidden">
      <div className="lc-wrap grid items-center gap-[clamp(56px,7vw,112px)] min-[1000px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Reveal className="relative mx-auto w-full max-w-[520px] px-4 pt-6 sm:px-8">
          <BrandLine
            shape="a"
            color="var(--color-copper)"
            opacity={0.7}
            className="-top-10 -left-12 z-10 w-[50%]"
          />
          <BrandLine
            shape="b"
            color="var(--color-copper-light)"
            opacity={0.9}
            className="top-[36%] -right-12 z-10 w-[40%]"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-navy-850">
            <Image
              src="/images/cedrik-standing.webp"
              alt="Cedrik Leibinn, Gründer von Leibinn Consulting"
              fill
              sizes="(min-width: 1000px) 40vw, 90vw"
              className="object-cover object-[50%_18%]"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-[20px] bg-white/80 p-4 pl-5 text-navy backdrop-blur-xl">
              <div className="leading-tight">
                <p className="text-[16px] font-semibold">Cedrik Leibinn</p>
                <p className="mono mt-1.5 text-[10px] text-subtle">
                  Gründer · Ihr Ansprechpartner
                </p>
              </div>
              <a
                href="#termin"
                aria-label="Erstgespräch mit Cedrik Leibinn buchen"
                className="icon-btn h-12 w-12 bg-navy text-white hover:bg-copper hover:text-navy-950"
              >
                <IconCalendar className="h-5 w-5" />
              </a>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Ihr Ansprechpartner</p>
            <h2 className="display-2 mt-6">
              Ein Name. <em>Eine Verantwortung.</em>
            </h2>
            <p className="lead mt-6 max-w-[36rem]">
              Leibinn Consulting wird von Cedrik Leibinn geführt: eingetragener
              Immobilienmakler und zugelassener Versicherungsmakler mit Sitz in
              Böblingen bei Stuttgart. Mehr als 55 Mandanten setzen auf diese
              Betreuung.
            </p>
          </Reveal>
          <ol className="mt-10 grid border-t border-navy/12 sm:grid-cols-2 sm:gap-x-10">
            {reasons.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 50} className="border-b border-navy/12 py-5">
                <div className="flex gap-4">
                  <span className="mono pt-1 text-copper-dark tnum">0{i + 1}</span>
                  <div>
                    <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-navy">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-body">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <Link
              href="/ueber-uns"
              className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-copper-dark"
            >
              Mehr über Leibinn Consulting
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- 06 Kundenstimmen ---------- */

function Stimmen() {
  return (
    <section id="stimmen" className="lc-panel">
      <Image
        src="/images/ffm-towers.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[50%_30%]"
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(13,26,45,0.84)_0%,rgba(13,26,45,0.97)_100%)]"
      />
      <div className="lc-wrap relative">
        <SectionHead
          eyebrow="Kundenstimmen"
          title={
            <>
              Was Mandanten über die <em>Zusammenarbeit sagen.</em>
            </>
          }
          lead="Drei von mehr als 55 Mandanten, in ihren eigenen Worten."
        />
        <Reveal delay={120} className="mt-[clamp(48px,6vw,72px)] border-t border-white/10 pt-10">
          <TestimonialSlider items={quotes} />
        </Reveal>
      </div>
    </section>
  );
}

