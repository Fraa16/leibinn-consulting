export type Step = { title: string; text: React.ReactNode; plainText: string };

/** Ablauf als Timeline mit Verbindungslinie. */
export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="mt-12">
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex gap-6 pb-12 last:pb-0">
          {i < steps.length - 1 && (
            <span
              aria-hidden
              className="absolute top-12 left-6 h-[calc(100%-3.5rem)] w-px bg-line"
            />
          )}
          <span
            aria-hidden
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-paper font-heading text-lg font-bold text-accent"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="pt-2.5">
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
