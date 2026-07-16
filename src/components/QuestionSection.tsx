import { Section, SectionHeading } from "./Section";

/**
 * AEO-Muster aus den Copy-Dokumenten: H2 als Frage, darunter die
 * hervorgehobene Direct-Answer, danach vertiefender Text.
 */
export function QuestionSection({
  kicker,
  title,
  answer,
  tone,
  children,
}: {
  kicker?: string;
  title: React.ReactNode;
  answer: string;
  tone?: "default" | "warm";
  children?: React.ReactNode;
}) {
  return (
    <Section tone={tone}>
      <SectionHeading kicker={kicker}>{title}</SectionHeading>
      <p className="mt-8 border-l-4 border-accent pl-6 text-lg leading-relaxed font-medium md:text-xl">
        {answer}
      </p>
      {children && (
        <div className="mt-8 space-y-6 leading-relaxed text-ink-soft">
          {children}
        </div>
      )}
    </Section>
  );
}
