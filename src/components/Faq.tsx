import { Section, SectionHeading } from "./Section";
import { JsonLd, faqJsonLd } from "./JsonLd";

export type FaqItem = { q: string; a: string };

export function Faq({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <Section tone="warm">
      <SectionHeading>{title}</SectionHeading>
      <div className="mt-10 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-baseline justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden
                className="text-2xl leading-none text-fawn transition-transform group-open:rotate-45"
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
    </Section>
  );
}
