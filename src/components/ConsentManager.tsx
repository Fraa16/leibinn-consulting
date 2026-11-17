"use client";

import { useEffect } from "react";
import { initConsent } from "@/lib/consent";

/**
 * Cookie-Banner, Meta Pixel und LinkedIn Insight Tag (erst nach Einwilligung);
 * optional Google Analytics 4 und Google Ads, sobald deren IDs gesetzt sind.
 * Gleiches Modul auf allen Leibinn-Seiten; die IDs kommen aus den
 * Vercel-Umgebungsvariablen. Ohne IDs wird nichts geladen.
 */
export function ConsentManager() {
  useEffect(() => {
    initConsent({
      site: "main",
      metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
      linkedinPartnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID,
      linkedinConversionLead: process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_LEAD,
      linkedinConversionBooking: process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_BOOKING,
      ga4Id: process.env.NEXT_PUBLIC_GA4_ID,
      googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
      googleAdsLabelLead: process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL_LEAD,
      googleAdsLabelBooking: process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL_BOOKING,
      leadsApiUrl: process.env.NEXT_PUBLIC_LEADS_API_URL,
    });
  }, []);
  return null;
}
