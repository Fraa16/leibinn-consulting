"use client";

import { useState } from "react";
import Image from "next/image";
import { IconArrowLeft, IconArrowRight } from "../icons";

export type Quote = { quote: string; name: string; role: string; photo: string };

/** Ein großes Zitat zur Zeit, Zähler, Fortschrittsbalken, Vor/Zurück. */
export function TestimonialSlider({ items }: { items: Quote[] }) {
  const [i, setI] = useState(0);
  const go = (d: number) => setI((v) => (v + d + items.length) % items.length);
  const q = items[i];

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-5">
        <span className="mono text-copper-light tnum">
          {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <div aria-hidden className="flex gap-1.5">
          {items.map((_, n) => (
            <span
              key={n}
              className={`h-[3px] w-14 rounded-full transition-colors duration-300 ${
                n === i ? "bg-copper-light" : "bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>

      <figure aria-live="polite" className="mt-10 min-h-[340px] max-w-[60rem] md:min-h-[290px]">
        <blockquote
          key={i}
          className="animate-[fade_0.5s_ease] text-[clamp(22px,2.6vw,38px)] leading-[1.25] font-normal tracking-[-0.03em] text-balance text-white"
        >
          „{q.quote}“
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-4">
          <Image
            src={q.photo}
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 rounded-full object-cover"
          />
          <span>
            <span className="block text-[16px] font-semibold text-white">{q.name}</span>
            <span className="mt-0.5 block text-[14px] text-on-dark-body">{q.role}</span>
          </span>
        </figcaption>
      </figure>

      <div className="mt-10 flex gap-3">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Vorherige Kundenstimme"
          className="icon-btn h-14 w-14 border border-white/20 text-white hover:border-white"
        >
          <IconArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Nächste Kundenstimme"
          className="icon-btn h-14 w-14 bg-copper-light text-navy-950 hover:bg-white"
        >
          <IconArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
