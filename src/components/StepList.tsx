export type Step = { title: string; text: React.ReactNode; plainText: string };

export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="mt-12 space-y-10">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-6">
          <span
            aria-hidden
            className="font-heading text-4xl leading-none font-bold text-accent select-none md:text-5xl"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="pt-1">
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
