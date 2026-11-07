import type { Metadata, Viewport } from "next";
import { Host_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/lib/site";

// next/font lädt die Schriften beim Build und liefert sie selbst aus:
// keine Anfrage an Google-Server im Browser (DSGVO).
const hostGrotesk = Host_Grotesk({
  variable: "--font-host",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d1a2d",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: Vermögensaufbau, ganzheitlich beraten`,
    template: `%s | ${site.name}`,
  },
  description:
    "Ganzheitliche Beratung für Vermögensaufbau: Investments, Off-Market-Immobilien, Holding-Strukturen, Finanzierung, bAV/bKV und Absicherung. Böblingen bei Stuttgart.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    url: site.url,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name}: Vermögen strategisch aufbauen, gezielt absichern`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "FinancialService", "RealEstateAgent"],
  name: site.name,
  url: site.url,
  areaServed: site.region,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: "DE",
  },
  founder: { "@type": "Person", name: site.owner },
  description:
    "Beratungsunternehmen für Investments, Off-Market-Immobilien, Holding-Strukturen, Finanzierung und Absicherung mit Sitz in Böblingen bei Stuttgart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${hostGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <JsonLd data={organizationJsonLd} />
        <Analytics />
      </body>
    </html>
  );
}
