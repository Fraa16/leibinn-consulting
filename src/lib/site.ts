export const site = {
  name: "Leibinn Consulting",
  // [PLATZHALTER] Domain bestätigen, bevor die Seite live geht (Canonical-URLs, Sitemap, OG)
  url: "https://www.leibinn-consulting.de",
  region: "Region Stuttgart",
  // [PLATZHALTER] Echte Kontaktdaten einsetzen
  email: "kontakt@leibinn-consulting.de",
  phone: "+49 711 000000",
} as const;

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "Investments", href: "/investments" },
  { label: "Immobilien", href: "/immobilien" },
  { label: "Holding", href: "/holding" },
  { label: "Absicherung", href: "/absicherung" },
  { label: "Finanzierung", href: "/finanzierung" },
  { label: "Über uns", href: "/ueber-uns" },
];

export const footerNav: NavItem[] = [
  ...navItems,
  { label: "Steuern & Recht", href: "/steuern-recht" },
  { label: "Kontakt", href: "/kontakt" },
];

export const legalNav: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

/** Anliegen-Optionen für das Kontaktformular; CTA-Buttons verweisen per ?anliegen=<key> */
export const anliegenOptions = [
  { key: "strategie-gespraech", label: "Strategie-Gespräch (Investments)" },
  { key: "objekt-zugang", label: "Objekt-Zugang (Off-Market-Immobilien)" },
  { key: "struktur-check", label: "Struktur-Check (Holding)" },
  { key: "vertragscheck", label: "Vertragscheck (Absicherung)" },
  { key: "konditions-check", label: "Konditions-Check (Finanzierung)" },
  { key: "sonstiges", label: "Sonstiges" },
] as const;

export type AnliegenKey = (typeof anliegenOptions)[number]["key"];

export function kontaktHref(anliegen?: AnliegenKey) {
  return anliegen ? `/kontakt?anliegen=${anliegen}` : "/kontakt";
}
