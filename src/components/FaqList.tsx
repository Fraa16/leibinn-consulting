import { JsonLd, faqJsonLd } from "./JsonLd";
import { IconPlus } from "./icons";

export type FaqEntry = { q: string; a: string };

/**
 * FAQ mit nativem <details name>: immer nur eine Antwort offen, ganz ohne
 * JavaScript. Die erste ist standardmäßig geöffnet. Inklusive FAQPage-Schema.
 */
export function FaqList({
  items,
  name = "faq",
}: {
  items: FaqEntry[];
  name?: string;
}) {
  return (
    <div className="border-t border-navy/12">
      {items.map((item, i) => (
        <details
          key={item.q}
          name={name}
          open={i === 0}
          className="faq-item group border-b border-navy/12"
        >
          <summary className="flex items-start justify-between gap-6 py-6 md:py-7">
            <span className="flex min-w-0 gap-5">
              <span className="mono w-6 shrink-0 pt-[7px] text-subtle tnum">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 text-[clamp(18px,1.6vw,22px)] leading-snug font-medium tracking-[-0.015em] text-navy hyphens-auto">
                {item.q}
              </span>
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/18 text-navy transition-[transform,background-color,color,border-color] duration-300 group-open:rotate-45 group-open:border-navy group-open:bg-navy group-open:text-white">
              <IconPlus className="h-[18px] w-[18px]" />
            </span>
          </summary>
          <p className="-mt-1 max-w-[42rem] pb-7 pl-11 sm:pr-16 text-[16px] leading-relaxed text-body">
            {item.a}
          </p>
        </details>
      ))}
      <JsonLd data={faqJsonLd(items)} />
    </div>
  );
}
