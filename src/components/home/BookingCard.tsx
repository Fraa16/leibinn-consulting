"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { IconCalendar, IconMail, IconPhone } from "../icons";
import { FOCUS_EVENT, type FocusDetail } from "./Wegweiser";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Buchungskarte mit Zwei-Klick-Lösung: Calendly (USA) wird erst nach
 * ausdrücklichem Klick geladen. Vorher geht keine Anfrage an Dritte.
 */
export function BookingCard({
  showAlternatives = true,
}: {
  /** „Lieber direkt?“-Leiste (Telefon, E-Mail, Formular) anzeigen */
  showAlternatives?: boolean;
}) {
  const [consent, setConsent] = useState(false);
  const [ready, setReady] = useState(false);
  const [focus, setFocus] = useState<string | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Fokus aus dem Wegweiser übernehmen
  useEffect(() => {
    const onFocus = (e: Event) =>
      setFocus((e as CustomEvent<FocusDetail>).detail?.label ?? null);
    window.addEventListener(FOCUS_EVENT, onFocus);
    return () => window.removeEventListener(FOCUS_EVENT, onFocus);
  }, []);

  useEffect(() => {
    if (!consent || !widgetRef.current) return;
    const url = new URL(site.calendlyUrl);
    url.searchParams.set("hide_event_type_details", "1");
    url.searchParams.set("hide_gdpr_banner", "1");
    url.searchParams.set("primary_color", "8a5e36");
    url.searchParams.set("text_color", "0d1a2d");
    url.searchParams.set("background_color", "ffffff");
    const init = () => {
      if (window.Calendly && widgetRef.current) {
        widgetRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: url.toString(),
          parentElement: widgetRef.current,
        });
        setReady(true);
      }
    };
    if (window.Calendly) {
      const id = requestAnimationFrame(init);
      return () => cancelAnimationFrame(id);
    }
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = CALENDLY_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", init);
    return () => script?.removeEventListener("load", init);
  }, [consent]);

  return (
    <div className="rounded-[24px] bg-white p-[clamp(20px,3vw,32px)] text-navy shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-4 border-b border-ivory-deep pb-5">
        <Image
          src="/images/cedrik-avatar.webp"
          alt=""
          width={52}
          height={52}
          className="h-[52px] w-[52px] rounded-full object-cover shadow-[0_0_0_3px_#fff,0_0_0_4px_var(--color-copper)]"
        />
        <div className="min-w-0">
          <p className="text-[16px] font-semibold">Erstgespräch mit Cedrik Leibinn</p>
          <p className="mt-1 text-[13px] text-subtle">
            {site.callMinutes} Min · Video oder Telefon · kostenlos
          </p>
        </div>
      </div>

      {focus && (
        <p className="mt-5 flex items-center gap-2 rounded-xl bg-copper-tint px-4 py-3 text-[14px]">
          <span className="mono text-copper-dark">Ihr Fokus</span>
          <span className="font-semibold">{focus}</span>
        </p>
      )}

      {!consent ? (
        <div className="flex flex-col items-start py-7">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ivory text-navy">
            <IconCalendar className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-[22px] leading-tight font-semibold tracking-[-0.02em]">
            Termin direkt online wählen
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-body">
            Die Terminbuchung läuft über Calendly. Erst mit Klick auf „Kalender
            laden“ wird der Kalender geladen; dabei werden Daten an Calendly LLC
            (USA) übertragen. Details in der{" "}
            <Link href="/datenschutz" className="text-navy underline underline-offset-2">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <button
            type="button"
            onClick={() => setConsent(true)}
            className="btn btn-lg btn-ink mt-6 w-full"
          >
            <IconCalendar className="h-[18px] w-[18px]" />
            Kalender laden
          </button>
        </div>
      ) : (
        <div className="relative -mx-2 mt-2 sm:-mx-4">
          {!ready && (
            <p className="mono absolute inset-x-0 top-10 text-center text-subtle">
              Kalender wird geladen …
            </p>
          )}
          <div ref={widgetRef} className="h-[680px] w-full" />
        </div>
      )}

      {showAlternatives && (
      <div className="mt-2 border-t border-ivory-deep pt-5">
        <p className="mono text-subtle">Lieber direkt?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="btn h-11 border border-sand-deep px-4 text-[14px] font-medium hover:bg-ivory"
          >
            <IconPhone className="h-4 w-4" />
            Anrufen
          </a>
          <a
            href={`mailto:${site.email}`}
            className="btn h-11 border border-sand-deep px-4 text-[14px] font-medium hover:bg-ivory"
          >
            <IconMail className="h-4 w-4" />
            E-Mail
          </a>
          <Link
            href="/kontakt"
            className="btn h-11 border border-sand-deep px-4 text-[14px] font-medium hover:bg-ivory"
          >
            Kontaktformular
          </Link>
        </div>
      </div>
      )}
    </div>
  );
}
