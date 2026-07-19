import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight">Impressum</h1>
      <div className="mt-10 space-y-8 leading-relaxed text-ink-soft [&_a]:text-fawn [&_a]:underline [&_a]:underline-offset-2 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
        <div>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p className="mt-3">
            Leibinn Consulting / Cedrik Leibinn
            <br />
            Konrad-Zuse-Straße 98
            <br />
            71034 Böblingen
          </p>
          <p className="mt-3">
            Telefon: <a href="tel:+4917634529336">+49 176 34529336</a>
            <br />
            E-Mail:{" "}
            <a href="mailto:beratung@leibinn-consulting.de">
              beratung@leibinn-consulting.de
            </a>
          </p>
          <p className="mt-3">Geschäftsführung: Cedrik Leibinn</p>
        </div>

        <div>
          <h2>Inhaltlich verantwortlich i.S.d. § 18 Abs. 2 MStV</h2>
          <p className="mt-3">Cedrik Leibinn (Anschrift wie oben)</p>
        </div>

        <div>
          <h2>Rechtliche Informationen</h2>
          <p className="mt-3">
            Erlaubnis: nach § 34d Abs. 1 Gewerbeordnung (Versicherungsmakler)
            <br />
            Aufsichtsbehörde: Industrie- und Handelskammer Region Stuttgart,
            Jägerstraße 30, 70174 Stuttgart
          </p>
          <p className="mt-3">
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
          <p className="mt-3">
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
          <p className="mt-3">
            Berufsbezeichnung: Versicherungsmakler mit Erlaubnis nach § 34d
            Abs. 1 Gewerbeordnung, Bundesrepublik Deutschland
            <br />
            Zuständige Berufskammer: Industrie- und Handelskammer Region
            Stuttgart, Jägerstraße 30, 70174 Stuttgart
          </p>
        </div>

        <div>
          <h2>Berufsrechtliche Regelungen</h2>
          <p className="mt-3">Die berufsrechtlichen Regelungen umfassen:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>§ 34d Gewerbeordnung (GewO)</li>
            <li>
              Verordnung über die Versicherungsvermittlung und -beratung
              (VersVermV)
            </li>
          </ul>
          <p className="mt-3">
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
          <p className="mt-3">
            Definition: Nachhaltigkeitsrisiken (ESG-Risiken) sind Ereignisse
            oder Bedingungen aus den Bereichen Umwelt, Soziales und
            Unternehmensführung, die negative Auswirkungen auf den Wert von
            Investitionen haben können.
          </p>
          <p className="mt-3">Beispiele:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Umwelt: Extremwetterereignisse durch den Klimawandel</li>
            <li>Soziales: Nichteinhaltung arbeitsrechtlicher Standards</li>
            <li>
              Unternehmensführung: Korruption oder mangelnde Steuerehrlichkeit
            </li>
          </ul>
          <p className="mt-3">
            Vergütung und Nachhaltigkeitsfaktoren: Die Vergütung für die
            Vermittlung von Finanzprodukten wird grundsätzlich nicht durch
            Nachhaltigkeitsrisiken beeinflusst. Anbieter, die
            Nachhaltigkeitsrisiken berücksichtigen, könnten eine höhere
            Vergütung bieten, sofern dies den Kundeninteressen nicht
            widerspricht.
          </p>
        </div>
      </div>
    </section>
  );
}
