# Leibinn Consulting – Website

Marketing-Website für Leibinn Consulting: Vermögensaufbau, Off-Market-Immobilien, Holding-Strukturen, Absicherung und Finanzierung (Region Stuttgart).

**Stack:** Next.js (App Router) · Tailwind CSS 4 · TypeScript · Fonts: Playfair Display + Lora (lokal via `next/font`, DSGVO-freundlich) · Akzentfarbe `#2652E9`

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build (statisch generiert)
```

## Deployment (Vercel)

Repo bei [vercel.com/new](https://vercel.com/new) importieren – Next.js wird automatisch erkannt, keine Sonderkonfiguration nötig. Umgebungsvariablen aus `.env.example` im Vercel-Dashboard setzen, sobald das Kontaktformular aktiv werden soll.

## Kontaktformular

`src/app/api/contact/route.ts` versendet Anfragen über [Resend](https://resend.com). Ohne `RESEND_API_KEY` ist das Formular inaktiv und verweist auf E-Mail/Telefon. Aktivieren:

1. Resend-Konto anlegen, Domain verifizieren
2. `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` in Vercel setzen

CTA-Buttons übergeben ihr Anliegen per Query-Parameter (z. B. `/kontakt?anliegen=struktur-check`) und wählen es im Formular vor. Optionen: `src/lib/site.ts`.

## Inhalte & Struktur

Copy stammt wortgetreu aus den Copy-Dokumenten (v1). Wiederverwendbare Sektionen in `src/components/` (Hero, QuestionSection, StepList, CardGrid, Faq inkl. FAQPage-Schema, FinalCta, Disclaimer …).

| Seite | Status |
| --- | --- |
| `/` (Start) | Interim (Hero-Copy aus Screenshot) – wartet auf Copy-Dokument |
| `/investments`, `/immobilien`, `/holding`, `/absicherung`, `/finanzierung` | Fertig nach Copy v1 |
| `/steuern-recht`, `/ueber-uns` | Platzhalter (noindex) – warten auf Copy-Dokumente |
| `/kontakt` | Funktional, Interim-Copy |
| `/impressum`, `/datenschutz` | Gerüst mit PLATZHALTERN, vor Go-live juristisch füllen |

## Offene PLATZHALTER (vor Go-live)

Alle Stellen sind im Code mit `[PLATZHALTER]` markiert (`grep -r PLATZHALTER src/`):

1. **Domain** bestätigen → `src/lib/site.ts` (Canonical-URLs, Sitemap, OG)
2. **Kontaktdaten** (E-Mail, Telefon) → `src/lib/site.ts`
3. **Logo-Datei** einsetzen → `src/components/SiteHeader.tsx` (aktuell Wortmarke)
4. **Regionen** in FAQ auf `/immobilien` (Vorgabe „von Cedrik“ aus Copy-Doc)
5. **Schufa-Aussage** auf `/finanzierung` prüfen, ob zusagbar (Copy-Doc-Hinweis)
6. **§ 34c-Eintragung** ins Impressum, bevor `/immobilien` live geht
7. **Impressum & Datenschutz** vollständig befüllen und prüfen lassen
8. **Fotos** (Porträt/Team) für `/ueber-uns` → `public/images/`
