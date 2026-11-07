import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { FaqEntry } from "@/components/FaqList";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";
import { BrandLine } from "@/components/Brand";
import { TestimonialSlider, type Quote } from "@/components/home/TestimonialSlider";
import { PageHero } from "@/components/page/PageHero";
import { BookingSection } from "@/components/page/BookingSection";
import { FaqBlock } from "@/components/page/FaqBlock";
import { PageShell } from "@/components/page/Blocks";
import { IconArrowRight, IconShieldCheck } from "@/components/icons";
import { entitySentence, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Über uns: Cedrik Leibinn | Leibinn Consulting Böblingen",
  },
  description:
    "Leibinn Consulting aus Böblingen: Cedrik Leibinn berät zu Investments, Immobilien und Holding-Strukturen. Zulassungen, Arbeitsweise und Prinzipien im Überblick.",
  alternates: { canonical: "/ueber-uns" },
};

const prinzipien = [
  {
    title: "Dieselbe Person, vom ersten Gespräch bis zur laufenden Betreuung.",
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

const credentials = [
  { label: "Unabhängig", title: "Makler im Auftrag des Kunden", text: "Freie Auswahl aus dem Markt, keine Bindung an eine Gesellschaft." },
  { label: "Versicherungsmakler", title: "Behördlich zugelassen", text: "Aufsichtsbehörde: IHK Region Stuttgart." },
  { label: "Immobilienmakler", title: "Eingetragen", text: "Immobilienvermittlung als eingetragener Makler." },
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
    q: "Wer ist Cedrik Leibinn?",
    a: "Cedrik Leibinn ist Gründer und Inhaber von Leibinn Consulting in Böblingen bei Stuttgart. Er ist eingetragener Immobilienmakler und zugelassener Versicherungsmakler und betreut mehr als 55 Mandanten zu Investments, Immobilien und Holding-Strukturen.",
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
  image: `${site.url}/images/cedrik-portrait.webp`,
};

function CredentialsCard() {
  return (
    <div className="rounded-2xl border border-white/6 bg-navy-950/60 p-4">
      <p className="text-[13px] font-medium text-on-dark">Zulassungen</p>
      <ul className="mt-3 space-y-2">
        {["Eingetragener Immobilienmakler", "Zugelassener Versicherungsmakler", "IHK Region Stuttgart"].map((t) => (
          <li key={t} className="flex items-center gap-2.5 rounded-lg bg-white/4 px-3 py-2.5 text-[12.5px] text-on-dark">
            <IconShieldCheck className="h-4 w-4 shrink-0 text-acc-light" />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function UeberUnsPage() {
  return (
    <PageShell>
      <PageHero
        crumbs={[{ label: "Start", href: "/" }, { label: "Über uns" }]}
        eyebrow="Über uns"
        title={
          <>
            Ein Berater. Ein Gesamtbild. <em>Cedrik Leibinn.</em>
          </>
        }
        lead={entitySentence}
        primary={{ label: "Kostenloses Erstgespräch buchen", href: "#termin" }}
        secondary={{ label: "Die Story", href: "#story" }}
        image={{
          src: "/images/cedrik-portrait.webp",
          alt: "Cedrik Leibinn, Gründer von Leibinn Consulting",
          pos: "object-[50%_20%]",
        }}
        floating={<CredentialsCard />}
        facts={[
          { value: site.clients, label: "Mandanten betreut" },
          { value: "2023", label: "Gegründet" },
          { value: "6", label: "Fachbereiche aus einer Hand" },
          { value: "Böblingen", label: "Bei Stuttgart" },
        ]}
      />

      {/* Story */}
      <section id="story" className="lc-section">
        <div className="lc-wrap">
          <Reveal className="relative flex min-h-[clamp(300px,34vw,460px)] items-end overflow-hidden rounded-[28px] bg-navy-850">
            <Image
              src="/images/cedrik-window.webp"
              alt="Cedrik Leibinn am Panoramafenster seines Büros"
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover object-[75%_30%]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,26,45,0.9)_0%,rgba(13,26,45,0.55)_45%,rgba(13,26,45,0)_80%)]"
            />
            <p className="display-3 relative max-w-[15em] p-[clamp(24px,4vw,56px)] text-white">
              Vom ersten Gespräch bis zur laufenden Betreuung: dieselbe Person.
            </p>
          </Reveal>

          <div className="mt-[clamp(64px,8vw,112px)] grid items-start gap-12 min-[1000px]:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] min-[1000px]:gap-20">
            <Reveal className="min-[1000px]:sticky min-[1000px]:top-[calc(var(--header-h)+40px)]">
              <p className="eyebrow">Die Story</p>
              <p className="mt-8 text-[clamp(26px,2.6vw,36px)] leading-[1.15] font-light tracking-[-0.03em] text-acc-dark italic">
                „Jeder kennt sein Produkt. Niemand kennt das Gesamtbild.“
              </p>
              <div className="mt-8 flex items-center gap-3">
                <Image
                  src="/images/cedrik-avatar.webp"
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <span className="leading-tight">
                  <span className="block text-[15px] font-semibold text-navy">Cedrik Leibinn</span>
                  <span className="mono mt-1 block text-[10px] text-subtle">Gründer und Inhaber</span>
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-2 text-navy">
                Vermögensfragen enden <em>nicht an Produktgrenzen.</em>
              </h2>
              <div className="mt-8 space-y-5 text-[16.5px] leading-relaxed text-body">
                <p>
                  Wer Vermögen aufbaut, bekommt in Deutschland viele Berater:
                  einen für das Depot, einen für die Immobilie, einen für die
                  Versicherungen, einen Steuerberater für die Struktur. Jeder
                  kennt sein Produkt. Niemand kennt das Gesamtbild.
                </p>
                <p>
                  Leibinn Consulting ist die Antwort auf genau dieses Problem. Ich
                  habe zuvor in einer Investmentberatung gearbeitet und dort
                  gesehen, wo die Lücken liegen: gute Einzelprodukte, aber
                  niemand, der das Gesamtbild zusammenhält. 2023 habe ich Leibinn
                  Consulting gegründet, um genau das zu ändern: unabhängige
                  Beratung aus einer Hand, entlang des Gesamtbilds statt entlang
                  von Produktkategorien.
                </p>
                <p>
                  Heute betreue ich mehr als 55 Mandanten, vom angestellten
                  Akademiker bis zum Unternehmer mit Holding-Struktur. Der
                  gemeinsame Nenner: Sie wollen einen Ansprechpartner, der ihre
                  Entscheidungen zusammendenkt, statt sie in Produktschubladen zu
                  sortieren.
                </p>
              </div>
              <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[24px] bg-navy-850">
                <Image
                  src="/images/cedrik-kundengespraech.webp"
                  alt="Cedrik Leibinn im Beratungsgespräch mit einer Mandantin"
                  fill
                  sizes="(min-width: 1000px) 55vw, 100vw"
                  className="object-cover object-[35%_35%]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Zulassungen */}
      <section className="lc-panel">
        <BrandLine shape="b" color="var(--acc-light)" opacity={0.12} className="-top-10 -right-48 w-[min(1000px,90vw)]" />
        <div className="lc-wrap relative">
          <SectionHead
            eyebrow="Schwarz auf weiß"
            title={
              <>
                Beraten darf jeder sagen. <em>Nachweisen nicht.</em>
              </>
            }
            lead="Der Maklerstatus ist mehr als eine Formalie: Ein Makler arbeitet rechtlich im Auftrag seiner Kunden, nicht im Auftrag einer Gesellschaft. Was empfohlen wird, muss zur Situation passen und wird begründet. Prüfen Sie das gern nach, der Registereintrag ist öffentlich."
          />
          <div className="mt-[clamp(48px,6vw,72px)] grid gap-4 md:grid-cols-3">
            {credentials.map((c, i) => (
              <Reveal key={c.label} delay={i * 80} className="flex flex-col rounded-[24px] border border-white/10 bg-navy-850 p-[clamp(22px,2.4vw,32px)]">
                <span className="flex items-center gap-2.5">
                  <IconShieldCheck className="h-5 w-5 text-acc-light" />
                  <span className="mono text-on-dark-subtle">{c.label}</span>
                </span>
                <h3 className="mt-7 text-[clamp(21px,2vw,26px)] leading-tight font-medium tracking-[-0.02em]">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-on-dark-body">{c.text}</p>
              </Reveal>
            ))}
            <Reveal className="flex flex-col justify-between gap-6 rounded-[24px] bg-acc-light p-[clamp(22px,2.4vw,32px)] text-navy-950">
              <span className="text-[clamp(56px,6vw,84px)] leading-none font-light tracking-[-0.05em] tnum">{site.clients}</span>
              <span className="mono text-navy-950/70">Laufend betreute Mandanten</span>
            </Reveal>
            <Reveal delay={80} className="flex flex-col justify-between gap-6 rounded-[24px] border border-white/14 p-[clamp(22px,2.4vw,32px)] md:col-span-2 md:flex-row md:items-end">
              <div>
                <p className="mono text-on-dark-subtle">Standort</p>
                <p className="mt-3 text-[clamp(24px,2.4vw,32px)] font-normal tracking-[-0.03em]">Böblingen bei Stuttgart</p>
                <p className="mt-3 max-w-[28rem] text-[15px] leading-relaxed text-on-dark-body">
                  Beratung online und vor Ort, dadurch ist die Zusammenarbeit
                  deutschlandweit möglich.
                </p>
              </div>
              <Link href="/impressum" className="btn btn-outline-dark shrink-0">
                Registereintrag ansehen
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Prinzipien */}
      <section className="lc-section">
        <div className="lc-wrap">
          <SectionHead
            eyebrow="Wie wir arbeiten"
            title={
              <>
                Vier Prinzipien. <em>Keine Ausnahmen.</em>
              </>
            }
          />
          <ol className="mt-[clamp(48px,6vw,72px)] grid gap-4 md:grid-cols-2">
            {prinzipien.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 80}
                className={`flex flex-col rounded-[24px] p-[clamp(26px,3vw,40px)] ${
                  i === 0 ? "bg-navy text-white" : "border border-sand bg-white text-navy"
                }`}
              >
                <span className={`mono ${i === 0 ? "text-acc-light" : "text-acc-dark"}`}>Prinzip 0{i + 1}</span>
                <h3 className="mt-8 text-[clamp(22px,2.2vw,28px)] leading-tight font-normal tracking-[-0.025em]">{p.title}</h3>
                <p className={`mt-4 text-[15.5px] leading-relaxed ${i === 0 ? "text-on-dark-body" : "text-body"}`}>{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Stimmen */}
      <section className="lc-panel">
        <Image src="/images/ffm-towers.webp" alt="" fill sizes="100vw" className="-z-10 object-cover object-[50%_30%]" />
        <span aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(13,26,45,0.84)_0%,rgba(13,26,45,0.97)_100%)]" />
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

      <FaqBlock
        title={
          <>
            Häufige Fragen <em>über uns.</em>
          </>
        }
        items={faqItems}
      />

      <BookingSection
        title={
          <>
            Lernen Sie den Menschen kennen, <em>nicht nur die Website.</em>
          </>
        }
        lead="Das Erstgespräch dauert 15 Minuten, kostet nichts und findet per Video oder Telefon statt. Danach wissen Sie, ob die Zusammenarbeit passt. Wir übrigens auch."
      />

      <JsonLd data={breadcrumbJsonLd([{ name: "Über uns", path: "/ueber-uns" }])} />
      <JsonLd data={personJsonLd} />
    </PageShell>
  );
}
