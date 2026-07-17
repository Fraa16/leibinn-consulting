import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#01005d",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Vermögensaufbau, ganzheitlich beraten`,
    template: `%s | ${site.name}`,
  },
  description:
    "Ganzheitliche Beratung für Vermögensaufbau: Investments, Off-Market-Immobilien, Holding-Strukturen, Absicherung und Finanzierung. Region Stuttgart.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
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
      className={`${playfair.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <JsonLd data={organizationJsonLd} />
      </body>
    </html>
  );
}
