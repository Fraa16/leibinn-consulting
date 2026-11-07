import type { Metadata } from "next";
import { LegalPage } from "@/components/page/LegalPage";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <LegalPage
      title="Impressum"
      current="/impressum"
      lead="Anbieterangaben, Zulassungen und Registereintrag von Leibinn Consulting auf einen Blick."
    >
        <div>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            Leibinn Consulting / Cedrik Robin Leibinn
            <br />
            Konrad-Zuse-Straße 98
            <br />
            71034 Böblingen
          </p>
          <p>
            Telefon: <a href="tel:+4917634529336">+49 176 34529336</a>
            <br />
            E-Mail:{" "}
            <a href="mailto:beratung@leibinn-consulting.de">
              beratung@leibinn-consulting.de
            </a>
          </p>
          <p>Geschäftsführung: Cedrik Robin Leibinn</p>
        </div>

        <div>
          <h2>Inhaltlich verantwortlich i.S.d. § 18 Abs. 2 MStV</h2>
          <p>Cedrik Robin Leibinn (Anschrift wie oben)</p>
        </div>

        <div>
          <h2>Rechtliche Informationen</h2>
          <p>
            Erlaubnis: nach § 34d Abs. 1 Gewerbeordnung (Versicherungsmakler)
            <br />
            Erlaubnis: nach § 34c Abs. 1 Gewerbeordnung (Immobilienmakler)
            <br />
            Aufsichtsbehörde: Industrie- und Handelskammer Region Stuttgart,
            Jägerstraße 30, 70174 Stuttgart
          </p>
          <p>
            Vermittlerregister:{" "}
            <a
              href="https://www.vermittlerregister.info"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.vermittlerregister.info
            </a>
            <br />
            Registrierungs-Nr.: D-LLF9-5XQCE-01
          </p>
        </div>

        <div>
          <h2>Streitbeilegung</h2>
          <p>
            Beschwerdeverfahren via Online-Streitbeilegung für Verbraucher
            (OS):{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              ec.europa.eu/consumers/odr
            </a>
            . Wir sind zur Teilnahme am Streitschlichtungsverfahren
            verpflichtet. Eine Liste mit den Kontaktdaten der anerkannten
            Streitschlichtungsstellen finden Sie unter der angegebenen Website.
          </p>
        </div>

        <div>
          <h2>Berufsbezeichnung und Berufskammer</h2>
          <p>
            Berufsbezeichnungen: Versicherungsmakler (Erlaubnis nach § 34d
            Abs. 1 Gewerbeordnung) und Immobilienmakler (Erlaubnis nach § 34c
            Abs. 1 Gewerbeordnung), Bundesrepublik Deutschland
            <br />
            Zuständige Berufskammer: Industrie- und Handelskammer Region
            Stuttgart, Jägerstraße 30, 70174 Stuttgart
          </p>
        </div>

        <div>
          <h2>Berufsrechtliche Regelungen</h2>
          <p>Die berufsrechtlichen Regelungen umfassen:</p>
          <ul>
            <li>§ 34d Gewerbeordnung (GewO)</li>
            <li>
              Verordnung über die Versicherungsvermittlung und -beratung
              (VersVermV)
            </li>
            <li>§ 34c Gewerbeordnung (GewO)</li>
            <li>Makler- und Bauträgerverordnung (MaBV)</li>
          </ul>
          <p>
            Diese Regelungen können auf der Website{" "}
            <a
              href="https://www.gesetze-im-internet.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.gesetze-im-internet.de
            </a>{" "}
            eingesehen werden.
          </p>
        </div>

        <div>
          <h2>Nachhaltigkeitsrisiken</h2>
          <p>
            Definition: Nachhaltigkeitsrisiken (ESG-Risiken) sind Ereignisse
            oder Bedingungen aus den Bereichen Umwelt, Soziales und
            Unternehmensführung, die negative Auswirkungen auf den Wert von
            Investitionen haben können.
          </p>
          <p>Beispiele:</p>
          <ul>
            <li>Umwelt: Extremwetterereignisse durch den Klimawandel</li>
            <li>Soziales: Nichteinhaltung arbeitsrechtlicher Standards</li>
            <li>
              Unternehmensführung: Korruption oder mangelnde Steuerehrlichkeit
            </li>
          </ul>
          <p>
            Vergütung und Nachhaltigkeitsfaktoren: Die Vergütung für die
            Vermittlung von Finanzprodukten wird grundsätzlich nicht durch
            Nachhaltigkeitsrisiken beeinflusst. Anbieter, die
            Nachhaltigkeitsrisiken berücksichtigen, könnten eine höhere
            Vergütung bieten, sofern dies den Kundeninteressen nicht
            widerspricht.
          </p>
        </div>
    </LegalPage>
  );
}
