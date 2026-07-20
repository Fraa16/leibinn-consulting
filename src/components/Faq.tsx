"use client";

import { useState } from "react";
import { JsonLd, faqJsonLd } from "./JsonLd";

export type FaqItem = { q: string; a: string };

/**
 * Akkordeon ohne eigenen Sektions-Rahmen — die Seite bestimmt Fläche
 * (dunkel oder .theme-light) und Layout. Token-Klassen flippen mit.
 * Es ist immer nur eine Antwort geöffnet.
 */
export function Faq({ title, items }: { title: string; items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-3xl leading-snug font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="mt-10 divide-y divide-line border-y border-line">
        {items.map((item, i) => (
          <details key={item.q} open={openIndex === i} className="group py-5">
            <summary
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex((prev) => (prev === i ? null : i));
              }}
              className="flex cursor-pointer list-none items-baseline justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden"
            >
              {item.q}
              <span
                aria-hidden
                className="text-2xl leading-none text-fawn transition-transform group-open:rotate-45 [.theme-light_&]:text-azure"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
              {item.a}
            </p>
          </details>
        ))}
      </div>
      <JsonLd data={faqJsonLd(items)} />
    </div>
  );
}
