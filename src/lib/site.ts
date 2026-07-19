export const site = {
  name: "Leibinn Consulting",
  url: "https://leibinn-consulting.de",
  city: "Böblingen",
  region: "Böblingen bei Stuttgart",
  email: "beratung@leibinn-consulting.de",
  phone: "+49 176 34529336",
  address: "Konrad-Zuse-Straße 98, 71034 Böblingen",
  calendlyUrl: "https://calendly.com/beratung-leibinn-consulting/60min",
  owner: "Cedrik Leibinn",
} as const;

/** Footer-Entity-Satz (GEO, sitewide, identisch auf /ueber-uns) — Copy-Doc Startseite v3 */
export const entitySentence =
  "Leibinn Consulting ist ein Beratungsunternehmen für Investments, Off-Market-Immobilien, Holding-Strukturen, Finanzierung und Absicherung mit Sitz in Böblingen bei Stuttgart, geführt von Cedrik Leibinn (eingetragener Immobilienmakler und zugelassener Versicherungsmakler).";

export type NavItem = { label: string; href: string };

/** Die 6 Fachbereiche, Reihenfolge = Gewichtung laut Copy-Doc Leistungen-Hub */
export const leistungenItems: NavItem[] = [
  { label: "Investments", href: "/investments" },
  { label: "Off-Market-Immobilien", href: "/immobilien" },
  { label: "Holding-Strukturen", href: "/holding" },
  { label: "Finanzierung", href: "/finanzierung" },
  { label: "Steuern & Recht", href: "/steuern-recht" },
  { label: "Absicherung", href: "/absicherung" },
];

export const navItems: NavItem[] = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
];

export const footerNav: NavItem[] = [
  { label: "Leistungen", href: "/leistungen" },
  ...leistungenItems,
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Kontakt", href: "/kontakt" },
];

export const legalNav: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

/**
 * Vorqualifizierungs-Frage 1 („Worum geht es hauptsächlich?“, Copy-Doc /kontakt).
 * CTA-Buttons der Fachseiten verweisen per ?anliegen=<key>.
 */
export const anliegenOptions = [
  { key: "strategie-gespraech", label: "Investments" },
  { key: "objekt-zugang", label: "Immobilien" },
  { key: "struktur-check", label: "Holding & Unternehmen" },
  { key: "konditions-check", label: "Finanzierung" },
  { key: "vertragscheck", label: "Absicherung" },
  { key: "experten-vermittlung", label: "Steuern & Recht" },
  { key: "unklar", label: "Weiß ich noch nicht" },
] as const;

export const statusOptions = ["Angestellt", "Selbstständig", "Unternehmer"] as const;
export const gespraechOptions = ["Online", "Vor Ort in Böblingen"] as const;

export type AnliegenKey = (typeof anliegenOptions)[number]["key"];

export function kontaktHref(anliegen?: AnliegenKey) {
  return anliegen ? `/kontakt?anliegen=${anliegen}` : "/kontakt";
}
