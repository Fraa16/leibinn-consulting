import type { Step } from "./StepList";

/**
 * Prozess mit übergroßen Serifenzahlen, Zeilen abwechselnd links/rechts
 * versetzt — bewusst asymmetrischer Rhythmus.
 */
export function BigSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="mt-4 divide-y divide-line">
      {steps.map((step, i) => {
        const right = i % 2 === 1;
        return (
          <li key={step.title} className="grid gap-4 py-10 md:grid-cols-12 md:py-12">
            <span
              aria-hidden
              className={`font-heading text-6xl leading-none font-bold text-azure-light/60 [.theme-light_&]:text-azure/35 select-none md:text-8xl ${
                right
                  ? "md:order-2 md:col-span-3 md:col-start-10 md:text-right"
                  : "md:col-span-3"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div
              className={
                right
                  ? "md:order-1 md:col-span-7 md:col-start-2"
                  : "md:col-span-7 md:col-start-5"
              }
            >
              <h3 className="font-heading text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">
                {step.text}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
