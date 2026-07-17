import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/CtaButton";
import { LightSection } from "@/components/Theme";
import { PullStat } from "@/components/Editorial";
import { Faq, type FaqItem } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { IconArrowRight } from "@/components/icons";
import { kontaktHref } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Steuerberater & Anwälte vermittelt | Leibinn Consulting",
  },
  description:
    "Geprüfte Steuerberater und Rechtsanwälte aus dem Netzwerk, passend zu Holding, Immobilien und Vermögensstruktur. Vermittlung durch Leibinn Consulting.",
  alternates: { canonical: "/steuern-recht" },
};

const anlaesse = [
  {
    label: "Holding-Gründung und Einbringung bestehender Anteile",
    href: "/holding",
  },
  { label: "Immobilienkauf über eine Gesellschaft", href: "/immobilien" },
  { label: "Gestaltungsfragen bei wachsendem Vermögen", href: null },
];

const faqItems: FaqItem[] = [
  {
    q: "Berät Leibinn Consulting selbst zu Steuern oder Recht?",
    a: "Nein, bewusst nicht. Steuerberatung und Rechtsberatung sind gesetzlich Steuerberatern und Rechtsanwälten vorbehalten. Leibinn Consulting vermittelt geprüfte Experten aus dem Netzwerk und koordiniert deren Arbeit mit Ihrer Gesamtstrategie. Diese klare Trennung schützt Sie und ist Teil des Konzepts.",
  },
  {
    q: "Was kostet die Vermittlung?",
    a: "Die Vermittlung selbst kostet Sie nichts. Die Experten rechnen ihre Leistung direkt und transparent mit Ihnen ab, nach den üblichen Vergütungsordnungen ihres Berufsstands. Sie erhalten vor Beauftragung eine Einschätzung des Aufwands und entscheiden dann selbst.",
  },
  {
    q: "Wie werden die Netzwerkpartner ausgewählt?",
    a: "Nach Spezialisierung und nach Erfahrung aus laufender Zusammenarbeit: Partner, deren Arbeit wir aus gemeinsamen Mandaten kennen, bleiben im Netzwerk. Entscheidend ist die Passung zum Fall, ein Holding-Spezialist für die Struktur, ein Immobilienrechtler für den Kaufvertrag.",
  },
  {
    q: "Muss ich meinen bestehenden Steuerberater wechseln?",
    a: "Nein. Wenn Ihr Steuerberater Ihre Struktur abdeckt, arbeiten wir mit ihm zusammen und binden ihn in die Strategie ein. Die Vermittlung ist ein Angebot für alle, deren Berater fehlt oder deren Fall eine Spezialisierung braucht.",
  },
];

export default function SteuernRechtPage() {
  return (
    <>
      {/* Hero — minimal, 0 € als Anker */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-8">
            <p className="text-sm font-semibold tracking-[0.25em] text-fawn uppercase">
              Steuern & Recht
            </p>
            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-balance md:text-6xl">
              Wir beraten hier nicht.
              <br />
              Wir vermitteln die Richtigen.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Steuerliche und rechtliche Beratung gehört in die Hände von
              Steuerberatern und Rechtsanwälten. Leibinn Consulting vermittelt
              geprüfte Experten aus dem eigenen Netzwerk, passend zu Ihrer
              Struktur, und koordiniert die Zusammenarbeit, damit Strategie,
              Steuern und Recht nicht aneinander vorbeilaufen.
            </p>
            <div className="mt-9">
              <CtaButton href={kontaktHref("experten-vermittlung")}>
                Experten-Vermittlung anfragen
              </CtaButton>
            </div>
          </div>
          <PullStat
            value="0 €"
            label="Die Vermittlung selbst kostet Sie nichts"
            className="hidden md:col-span-3 md:col-start-10 md:block"
          />
        </div>
      </section>

      {/* 01 · Warum — weiß, Zweispalter + Anlässe-Liste */}
      <LightSection className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="flex items-baseline gap-3 text-sm font-semibold tracking-[0.2em] uppercase">
                <span className="font-heading text-azure">01</span>
                <span className="text-ink-faint">Die Passung</span>
              </p>
              <h2 className="mt-5 text-3xl leading-[1.12] font-bold tracking-tight md:text-4xl">
                Warum ein vermittelter Experte statt eigener Suche?
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="border-l-4 border-azure pl-6 text-lg leading-relaxed font-medium">
                Weil die Passung entscheidet: Ein Steuerberater, der
                Holding-Strukturen täglich betreut, arbeitet anders als einer,
                der hauptsächlich Einkommensteuererklärungen erstellt. Leibinn
                Consulting kennt die Spezialisierung der Netzwerkpartner aus
                laufender Zusammenarbeit und vermittelt den Experten, der zu
                Ihrem Fall passt, statt den nächstgelegenen aus dem
                Branchenverzeichnis.
              </p>
              <p className="mt-8 leading-relaxed text-ink-soft">
                Der zweite Vorteil ist die Koordination. Wenn Strategie,
                Struktur und steuerliche Gestaltung aus einer abgestimmten
                Zusammenarbeit kommen, entfallen die typischen
                Reibungsverluste: doppelte Erklärungen, widersprüchliche
                Empfehlungen, verlorene Zeit zwischen den Beteiligten. Sie
                erzählen Ihre Situation einmal, nicht dreimal.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <p className="text-sm font-semibold tracking-[0.2em] text-ink-faint uppercase">
              Typische Anlässe
            </p>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {anlaesse.map((anlass) => (
                <li key={anlass.label}>
                  {anlass.href ? (
                    <Link
                      href={anlass.href}
                      className="group flex items-center justify-between gap-6 py-5 transition-colors hover:text-azure"
                    >
                      <span className="font-heading text-xl font-bold md:text-2xl">
                        {anlass.label}
                      </span>
                      <IconArrowRight className="h-6 w-6 shrink-0 text-azure transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <p className="flex items-center justify-between gap-6 py-5">
                      <span className="font-heading text-xl font-bold md:text-2xl">
                        {anlass.label}
                      </span>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </LightSection>

      {/* 02 · FAQ */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-12 md:py-24">
          <p className="font-heading text-sm font-semibold tracking-[0.2em] text-fawn uppercase md:col-span-3">
            02 · FAQ
          </p>
          <div className="md:col-span-9">
            <Faq title="Häufige Fragen" items={faqItems} />
          </div>
        </div>
      </section>

      <CtaBanner
        title={
          <>
            Der richtige Experte.
            <br />
            Ohne Suche.
          </>
        }
        text="Schildern Sie im kostenlosen Erstgespräch Ihren Fall, wir nennen Ihnen den passenden Experten aus dem Netzwerk und koordinieren die Zusammenarbeit."
        ctaLabel="Experten-Vermittlung anfragen"
        ctaHref={kontaktHref("experten-vermittlung")}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Steuern & Recht", path: "/steuern-recht" },
        ])}
      />
    </>
  );
}
