export const site = {
  name: "Leibinn Consulting",
  url: "https://leibinn-consulting.de",
  city: "Böblingen",
  region: "Böblingen bei Stuttgart",
  email: "beratung@leibinn-consulting.de",
  phone: "+49 176 34529336",
  address: "Konrad-Zuse-Straße 98, 71034 Böblingen",
  /**
   * Calendly-Event für das 15-Minuten-Erstgespräch. In Vercel über
   * NEXT_PUBLIC_CALENDLY_URL setzbar; Fallback ist das bisherige Event.
   */
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    "https://calendly.com/beratung-leibinn-consulting/60min",
  owner: "Cedrik Leibinn",
  clients: "55+",
  callMinutes: 15,
} as const;

/** Footer-Entity-Satz (GEO, sitewide, identisch auf /ueber-uns) */
export const entitySentence =
  "Leibinn Consulting ist ein Beratungsunternehmen für Investments, Off-Market-Immobilien, Holding-Strukturen, Finanzierung und Absicherung mit Sitz in Böblingen bei Stuttgart, geführt von Cedrik Leibinn (eingetragener Immobilienmakler und zugelassener Versicherungsmakler).";

export type NavItem = { label: string; href: string };

/**
 * Drei „Welten“ der Marke. Jede Welt trägt den Akzent ihrer Landingpage,
 * damit Hauptseite und Landingpages sichtbar zusammengehören.
 */
export const worlds = {
  privat: {
    label: "Privates Vermögen",
    dot: "bg-petrol",
    text: "text-petrol-dark",
    textOnDark: "text-petrol-light",
    tint: "bg-petrol-tint",
    hex: "#2F7A7E",
    hexLight: "#86BDBF",
  },
  immobilien: {
    label: "Immobilien",
    dot: "bg-copper",
    text: "text-copper-dark",
    textOnDark: "text-copper-light",
    tint: "bg-copper-tint",
    hex: "#B8875A",
    hexLight: "#D6AE84",
  },
  unternehmen: {
    label: "Unternehmen",
    dot: "bg-indigo",
    text: "text-indigo-dark",
    textOnDark: "text-indigo-light",
    tint: "bg-indigo-tint",
    hex: "#4A4FB0",
    hexLight: "#9CC0E8",
  },
} as const;

export type WorldKey = keyof typeof worlds;

/** Die 6 Fachbereiche, Reihenfolge = Gewichtung laut Copy-Doc Leistungen-Hub */
export const topics = [
  {
    slug: "investments",
    label: "Investments",
    href: "/investments",
    world: "privat",
    anliegen: "strategie-gespraech",
    teaser:
      "Vermögensaufbau mit Strategie: breite Streuung, klare Risikoverteilung, transparente Kosten. Spezialisierte Partner übernehmen die Anlageberatung, wir behalten das Gesamtbild.",
  },
  {
    slug: "immobilien",
    label: "Off-Market-Immobilien",
    href: "/immobilien",
    world: "immobilien",
    anliegen: "objekt-zugang",
    teaser:
      "Als eingetragener Immobilienmakler vermitteln wir Objekte, die nie auf Portalen erscheinen, in Regionen mit stabiler Mietnachfrage.",
  },
  {
    slug: "holding",
    label: "Holding-Strukturen",
    href: "/holding",
    world: "unternehmen",
    anliegen: "struktur-check",
    teaser:
      "Von der Frage, ob sich eine Holding für Sie lohnt, bis zur Gründung: Beratung, Begleitung und Umsetzung aus einer Hand.",
  },
  {
    slug: "finanzierung",
    label: "Finanzierung",
    href: "/finanzierung",
    world: "immobilien",
    anliegen: "konditions-check",
    teaser:
      "Experten aus unserem Partnernetzwerk vergleichen die Konditionen mehrerer Banken. Weniger Termine, ein koordinierter Prozess.",
  },
  {
    slug: "bav-bkv",
    label: "bAV / bKV",
    href: "/bav-bkv",
    world: "unternehmen",
    anliegen: "bav-bkv",
    teaser:
      "Betriebliche Altersvorsorge und Krankenversicherung als Benefit, der Fachkräfte gewinnt und bindet. Steuerlich optimiert, verwaltungsarm.",
  },
  {
    slug: "absicherung",
    label: "Absicherung",
    href: "/absicherung",
    world: "privat",
    anliegen: "vertragscheck",
    teaser:
      "Was aufgebaut wird, muss geschützt sein. Als zugelassener Makler sichern wir Vermögen, Immobilien und Betrieb ab, mit freier Auswahl aus dem Markt.",
  },
] as const satisfies readonly {
  slug: string;
  label: string;
  href: string;
  world: WorldKey;
  anliegen: string;
  teaser: string;
}[];

export type Topic = (typeof topics)[number];
export type TopicSlug = Topic["slug"];

export function topicBySlug(slug: TopicSlug): Topic {
  return topics.find((t) => t.slug === slug)!;
}

export const leistungenItems: NavItem[] = topics.map(({ label, href }) => ({
  label,
  href,
}));

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
  { key: "bav-bkv", label: "bAV / bKV" },
  { key: "unklar", label: "Weiß ich noch nicht" },
] as const;

export const statusOptions = ["Angestellt", "Selbstständig", "Unternehmer"] as const;
export const gespraechOptions = ["Video", "Telefon"] as const;

export type AnliegenKey = (typeof anliegenOptions)[number]["key"];

export function kontaktHref(anliegen?: AnliegenKey) {
  return anliegen ? `/kontakt?anliegen=${anliegen}` : "/kontakt";
}
