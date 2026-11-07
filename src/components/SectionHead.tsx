import { Reveal } from "./Reveal";

/**
 * Sektionskopf der Markenfamilie: links Eyebrow + H2, rechts Lead,
 * unten bündig (align-items: end). Unter 900 px gestapelt.
 */
export function SectionHead({
  eyebrow,
  title,
  lead,
  children,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Zusatz unter dem Lead (z. B. Legende, Toggle) */
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal
      className={`grid items-end gap-x-[clamp(40px,6vw,112px)] gap-y-6 min-[900px]:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] ${className}`}
    >
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display-2 mt-6">{title}</h2>
      </div>
      {(lead || children) && (
        <div className="max-w-[34rem] min-[900px]:pb-2">
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
      )}
    </Reveal>
  );
}
