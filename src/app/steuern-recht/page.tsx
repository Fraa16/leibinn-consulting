import type { Metadata } from "next";
import Link from "next/link";
import { SplitHero } from "@/components/SplitHero";
import { QuestionSection } from "@/components/QuestionSection";
import { Faq, type FaqItem } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { kontaktHref } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Steuerberater & Anwälte vermittelt | Leibinn Consulting",
  },
  description:
    "Geprüfte Steuerberater und Rechtsanwälte aus dem Netzwerk, passend zu Holding, Immobilien und Vermögensstruktur. Vermittlung durch Leibinn Consulting.",
  alternates: { canonical: "/steuern-recht" },
};

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
      <SplitHero
        kicker="Steuern & Recht"
        slug="steuern-recht"
        fact="0 €"
        factLabel="Die Vermittlung selbst kostet Sie nichts"
        title={
          <>
            Steuern & Recht: Wir beraten hier nicht. Wir vermitteln die
            Richtigen.
          </>
        }
        sub="Steuerliche und rechtliche Beratung gehört in die Hände von Steuerberatern und Rechtsanwälten. Leibinn Consulting vermittelt geprüfte Experten aus dem eigenen Netzwerk, passend zu Ihrer Struktur, und koordiniert die Zusammenarbeit, damit Strategie, Steuern und Recht nicht aneinander vorbeilaufen."
        ctaLabel="Experten-Vermittlung anfragen"
        ctaHref={kontaktHref("experten-vermittlung")}
      />

      <QuestionSection
        title="Warum ein vermittelter Experte statt eigener Suche?"
        answer="Weil die Passung entscheidet: Ein Steuerberater, der Holding-Strukturen täglich betreut, arbeitet anders als einer, der hauptsächlich Einkommensteuererklärungen erstellt. Leibinn Consulting kennt die Spezialisierung der Netzwerkpartner aus laufender Zusammenarbeit und vermittelt den Experten, der zu Ihrem Fall passt, statt den nächstgelegenen aus dem Branchenverzeichnis."
      >
        <p>
          Der zweite Vorteil ist die Koordination. Wenn Strategie, Struktur und
          steuerliche Gestaltung aus einer abgestimmten Zusammenarbeit kommen,
          entfallen die typischen Reibungsverluste: doppelte Erklärungen,
          widersprüchliche Empfehlungen, verlorene Zeit zwischen den
          Beteiligten. Sie erzählen Ihre Situation einmal, nicht dreimal.
        </p>
        <div className="rounded-xl bg-accent-tint p-6">
          <p className="text-sm font-semibold tracking-[0.15em] text-accent uppercase">
            Typische Anlässe
          </p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/holding" className="text-accent underline underline-offset-2">
                Holding-Gründung und Einbringung bestehender Anteile
              </Link>
            </li>
            <li>
              <Link href="/immobilien" className="text-accent underline underline-offset-2">
                Immobilienkauf über eine Gesellschaft
              </Link>
            </li>
            <li>Gestaltungsfragen bei wachsendem Vermögen</li>
          </ul>
        </div>
      </QuestionSection>

      <Faq title="Häufige Fragen" items={faqItems} />

      <FinalCta
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
