import type { Metadata } from "next";
import Image from "next/image";
import { LightSection } from "@/components/Theme";
import { Bento, BentoCell } from "@/components/Bento";
import { EditorialHeader } from "@/components/Editorial";
import { Faq, type FaqItem } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { PhotoBand } from "@/components/PhotoBand";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { PortraitPanel } from "@/components/VisualPanel";
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

const faqItems: FaqItem[] = [
  {
    q: "Wer ist Cedrik Leibinn?",
    a: "Cedrik Leibinn ist Gründer und Inhaber von Leibinn Consulting in Böblingen bei Stuttgart. Er ist eingetragener Immobilienmakler und zugelassener Versicherungsmakler (Vermittlerregister Nr. D-LLF9-5XQCE-01) und betreut über 50 Mandanten zu Investments, Immobilien und Holding-Strukturen.",
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
  identifier: "Vermittlerregister Nr. D-LLF9-5XQCE-01",
};

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero — Magazinprofil, Porträt versetzt */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-7 md:self-center">
            <p className="text-sm font-semibold tracking-[0.25em] text-fawn uppercase">
              Über uns
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-balance md:text-6xl">
              Ein Berater. Ein Gesamtbild.
              <br />
              Cedrik Leibinn.
            </h1>
            {/* Erster Absatz = Footer-Entity-Satz (GEO-Pflicht) */}
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              {entitySentence}
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:translate-y-8">
            <PortraitPanel
              name="Cedrik Leibinn"
              role={`Gründer, ${site.name}`}
              src="/images/cedrik-portrait.webp"
            />
          </div>
        </div>
      </section>

      {/* Editorial-Band — Cedrik am Fenster */}
      <PhotoBand
        src="/images/cedrik-window.webp"
        alt="Cedrik Leibinn am Panoramafenster der Kanzleiräume"
        focus="right"
        height="lg"
      >
        <p className="max-w-lg font-heading text-2xl leading-snug font-medium text-white text-balance md:text-3xl">
          Vom ersten Gespräch bis zur laufenden Betreuung: dieselbe Person.
        </p>
      </PhotoBand>

      {/* 01 · Story — weiß, Pull-Quote am Rand */}
      <LightSection className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-3">
            <p className="flex items-baseline gap-3 text-sm font-semibold tracking-[0.2em] uppercase">
              <span className="font-heading text-azure">01</span>
              <span className="text-ink-faint">Die Story</span>
            </p>
            <p className="mt-8 font-heading text-2xl leading-snug font-bold text-azure italic md:mt-16">
              „Jeder kennt sein Produkt. Niemand kennt das Gesamtbild.“
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-5">
            <h2 className="text-3xl leading-[1.12] font-bold tracking-tight md:text-4xl">
              Vermögensfragen enden nicht an Produktgrenzen.
            </h2>
            <div className="mt-8 space-y-5 leading-relaxed text-ink-soft">
              <p>
                Wer Vermögen aufbaut, bekommt in Deutschland viele Berater:
                einen für das Depot, einen für die Immobilie, einen für die
                Versicherungen, einen Steuerberater für die Struktur. Jeder
                kennt sein Produkt. Niemand kennt das Gesamtbild.
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
                Heute betreue ich über 50 Mandanten, vom angestellten
                Akademiker bis zum Unternehmer mit Holding-Struktur. Der
                gemeinsame Nenner: Sie wollen einen Ansprechpartner, der ihre
                Entscheidungen zusammendenkt, statt sie in Produktschubladen zu
                sortieren.
              </p>
              <figure className="mt-8 overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/images/cedrik-kundengespraech.webp"
                  alt="Cedrik Leibinn im Beratungsgespräch mit einer Mandantin"
                  width={2400}
                  height={1600}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </LightSection>

      {/* 02 · Zulassungen — dunkles Fakten-Bento */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <EditorialHeader
            no="02"
            kicker="Schwarz auf weiss"
            title={
              <>
                Beraten darf jeder sagen.
                <br />
                Nachweisen nicht.
              </>
            }
            intro="Der Maklerstatus ist mehr als eine Formalie: Ein Makler arbeitet rechtlich im Auftrag seiner Kunden, nicht im Auftrag einer Gesellschaft. Was empfohlen wird, muss zur Situation passen und wird begründet. Prüfen Sie das gern nach, der Registereintrag ist öffentlich."
          />
          <Bento className="mt-14">
            <BentoCell surface="cobalt" className="md:col-span-5">
              <p className="text-sm font-semibold tracking-wide text-ink-faint uppercase">
                Vermittlerregister
              </p>
              <p className="mt-3 font-heading text-2xl font-bold">
                Nr. D-LLF9-5XQCE-01
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                öffentlich prüfbar unter vermittlerregister.info
              </p>
            </BentoCell>
            <BentoCell surface="deep" className="md:col-span-4">
              <p className="text-sm font-semibold tracking-wide text-ink-faint uppercase">
                Versicherungsmakler
              </p>
              <p className="mt-3 font-heading text-2xl font-bold">
                Behördlich zugelassen
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Aufsichtsbehörde: IHK Region Stuttgart
              </p>
            </BentoCell>
            <BentoCell surface="outline" className="md:col-span-3">
              <p className="text-sm font-semibold tracking-wide text-ink-faint uppercase">
                Immobilienmakler
              </p>
              <p className="mt-3 font-heading text-xl font-bold">
                Eingetragen
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Immobilienvermittlung als eingetragener Makler
              </p>
            </BentoCell>
            <BentoCell surface="azure" className="md:col-span-4">
              <p className="font-heading text-6xl font-bold">50+</p>
              <p className="mt-2 text-white/85">laufend betreute Mandanten</p>
            </BentoCell>
            <BentoCell surface="fawn" className="md:col-span-8 md:flex-row md:items-center md:justify-between md:gap-8">
              <div>
                <p className="text-sm font-semibold tracking-wide text-twilight-deep/60 uppercase">
                  Standort
                </p>
                <p className="mt-2 font-heading text-2xl font-bold">
                  Böblingen bei Stuttgart
                </p>
              </div>
              <p className="mt-3 max-w-sm text-twilight-deep/75 md:mt-0">
                Beratung online und vor Ort — dadurch ist die Zusammenarbeit
                deutschlandweit möglich.
              </p>
            </BentoCell>
          </Bento>
        </div>
      </section>

      {/* 03 · Prinzipien — weiß, 2×2 versetzt */}
      <LightSection className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <EditorialHeader
            no="03"
            kicker="Wie wir arbeiten"
            title={
              <>
                Vier Prinzipien.
                <br />
                Keine Ausnahmen.
              </>
            }
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-2">
            {prinzipien.map((prinzip, i) => (
              <li
                key={prinzip.title}
                className={`rounded-2xl border border-line bg-paper-warm p-8 md:p-10 ${i % 2 === 1 ? "md:translate-y-8" : ""}`}
              >
                <span className="font-heading text-5xl font-bold text-azure/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading text-xl leading-snug font-bold">
                  {prinzip.title}
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  {prinzip.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </LightSection>

      {/* 04 · FAQ */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:py-24">
          <p className="font-heading text-sm font-semibold tracking-[0.2em] text-fawn uppercase md:col-span-3">
            04 · FAQ
          </p>
          <div className="md:col-span-9">
            <Faq title="Häufige Fragen" items={faqItems} />
          </div>
        </div>
      </section>

      <CtaBanner
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
