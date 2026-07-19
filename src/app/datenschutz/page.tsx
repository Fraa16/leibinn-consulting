import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

type Section = { h: string; p?: string[]; ul?: string[] };

const sections: Section[] = [
  {
    h: "Verantwortlicher",
    p: [
      "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
      "Leibinn Consulting / Cedrik Leibinn, Konrad-Zuse-Straße 98, 71034 Böblingen. Telefon: +49 176 34529336. E-Mail: beratung@leibinn-consulting.de.",
    ],
  },
  {
    h: "Eingesetzte Dienste",
    p: [
      "Hosting: Diese Website wird bei Vercel Inc. gehostet; dabei werden Server-Logfiles (u. a. IP-Adresse) auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet.",
      "Kontaktformular: Über das Formular übermittelte Angaben (Name, E-Mail, Telefon, Anliegen, Nachricht) werden zur Bearbeitung Ihrer Anfrage verarbeitet (Art. 6 Abs. 1 lit. b DSGVO). Der Versand erfolgt über einen E-Mail-Dienstleister als Auftragsverarbeiter.",
      "Terminbuchung: Für die Buchung eines Erstgesprächs ist Calendly (Calendly LLC) eingebunden. Beim Öffnen der Buchung werden Daten an Calendly übertragen; es gelten zusätzlich die Datenschutzhinweise von Calendly.",
      "Schriftarten werden lokal ausgeliefert (keine Verbindung zu Google Fonts).",
    ],
  },
  {
    h: "Art der von uns erhobenen Daten",
    p: [
      "Vollständige Details zu jeder Art von verarbeiteten personenbezogenen Daten werden in den dafür vorgesehenen Abschnitten dieser Datenschutzerklärung oder punktuell durch Erklärungstexte bereitgestellt, die vor der Datenerhebung angezeigt werden.",
      "Personenbezogene Daten können vom Nutzer freiwillig angegeben oder, im Falle von Nutzungsdaten, automatisch erhoben werden, wenn diese Anwendung genutzt wird.",
      "Sofern nicht anders angegeben, ist die Angabe aller angeforderten Daten obligatorisch. Weigert sich der Nutzer, die Daten anzugeben, kann dies dazu führen, dass die Dienste nicht zur Verfügung gestellt werden können. Die Nutzer sind für alle personenbezogenen Daten Dritter verantwortlich, die über diese Anwendung beschafft, veröffentlicht oder weitergegeben werden.",
    ],
  },
  {
    h: "Art und Ort der Datenverarbeitung",
    p: [
      "Verarbeitungsmethoden: Der Anbieter verarbeitet die personenbezogenen Daten der Nutzer auf ordnungsgemäße Weise und ergreift angemessene Sicherheitsmaßnahmen, um den unbefugten Zugriff und die unbefugte Weiterleitung, Veränderung oder Vernichtung von Daten zu vermeiden. Zusätzlich zum Verantwortlichen können auch andere Personen intern oder – als Auftragsverarbeiter benannt – extern (z. B. technische Dienstleister, Hosting-Anbieter, IT-Unternehmen) Zugriff auf die Daten haben.",
      "Ort: Die Daten werden in der Niederlassung des Anbieters und an allen anderen Orten verarbeitet, an denen sich die beteiligten Stellen befinden. Je nach Standort der Nutzer können Datenübertragungen die Übertragung in ein anderes Land beinhalten.",
      "Speicherdauer: Sofern nicht anders festgelegt, werden personenbezogene Daten so lange verarbeitet und gespeichert, wie es der Zweck erfordert, zu dem sie erhoben wurden, und ggf. aufgrund einer rechtlichen Verpflichtung oder Einwilligung länger aufbewahrt.",
    ],
  },
  {
    h: "Rechtsgrundlagen der Verarbeitung",
    p: [
      "Der Anbieter darf personenbezogene Daten nur verarbeiten, wenn einer der folgenden Punkte zutrifft:",
    ],
    ul: [
      "Die Nutzer haben ihre Einwilligung für einen oder mehrere bestimmte Zwecke erteilt.",
      "Die Datenerhebung ist für die Erfüllung eines Vertrages und/oder für vorvertragliche Maßnahmen erforderlich.",
      "Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich.",
      "Die Verarbeitung ist zur Wahrung berechtigter Interessen des Anbieters oder eines Dritten erforderlich.",
    ],
  },
  {
    h: "Ihre Rechte nach der DSGVO",
    p: ["Die Nutzer haben im gesetzlich zulässigen Umfang insbesondere das Recht:"],
    ul: [
      "erteilte Einwilligungen jederzeit zu widerrufen,",
      "der Verarbeitung ihrer Daten zu widersprechen,",
      "Auskunft über ihre Daten zu erhalten,",
      "Daten überprüfen und berichtigen zu lassen,",
      "die Einschränkung der Verarbeitung zu verlangen,",
      "die Löschung ihrer Daten zu verlangen,",
      "ihre Daten zu erhalten und übertragen zu lassen (Datenübertragbarkeit),",
      "Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.",
    ],
  },
  {
    h: "Widerspruchsrecht",
    p: [
      "Werden personenbezogene Daten im öffentlichen Interesse oder zur Wahrung berechtigter Interessen des Anbieters verarbeitet, kann der Nutzer dieser Verarbeitung aus Gründen seiner besonderen Situation widersprechen.",
      "Der Verarbeitung für Zwecke der Direktwerbung können Nutzer jederzeit unentgeltlich und ohne Angabe von Gründen widersprechen.",
    ],
  },
  {
    h: "Wie die Rechte ausgeübt werden können",
    p: [
      "Alle Anfragen zur Ausübung der Nutzerrechte können über die oben angegebenen Kontaktdaten gestellt werden. Diese Anfragen sind kostenlos und werden so früh wie möglich, spätestens innerhalb eines Monats, beantwortet.",
    ],
  },
  {
    h: "Systemprotokolle und Wartung",
    p: [
      "Diese Anwendung und Dienste von Dritten können zu Betriebs- und Wartungszwecken Dateien erfassen, die die stattfindende Interaktion aufzeichnen (Systemprotokolle), oder andere personenbezogene Daten (z. B. IP-Adresse) zu diesem Zweck verwenden.",
    ],
  },
  {
    h: "Änderungen dieser Datenschutzerklärung",
    p: [
      "Der Anbieter behält sich vor, jederzeit Änderungen an dieser Datenschutzerklärung vorzunehmen. Nutzern wird nahegelegt, diese Seite regelmäßig aufzurufen. Soweit Änderungen eine auf Einwilligung basierte Datennutzung betreffen, wird – soweit erforderlich – eine neue Einwilligung eingeholt.",
    ],
  },
];

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight">
        Datenschutzerklärung
      </h1>
      <div className="mt-10 space-y-8 leading-relaxed text-ink-soft [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink">
        {sections.map((s) => (
          <div key={s.h}>
            <h2>{s.h}</h2>
            {s.p?.map((para, i) => (
              <p key={i} className="mt-3">
                {para}
              </p>
            ))}
            {s.ul && (
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {s.ul.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
