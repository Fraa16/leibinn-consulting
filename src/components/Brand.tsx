/**
 * Logo als CSS-Maske: Farbe kommt aus `currentColor`, dadurch eine Datei
 * für helle und dunkle Flächen. `wordmark` = Bildmarke + Schriftzug
 * (Header), `lockup` = mit Zusatz „Investment Consulting“ (Footer).
 */
export function Logo({
  variant = "wordmark",
  className = "",
}: {
  variant?: "wordmark" | "lockup";
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label="Leibinn Consulting"
      className={`logo-mask ${variant === "wordmark" ? "logo-wordmark" : "logo-lockup"} ${className}`}
    />
  );
}

/**
 * Marken-Linie (Spur des Logo-Emblems) als getönte Maske.
 * Position, Breite, Farbe und Deckkraft kommen per className/style.
 */
export function BrandLine({
  shape = "a",
  className = "",
  color,
  opacity,
}: {
  shape?: "a" | "b";
  className?: string;
  color: string;
  opacity: number;
}) {
  return (
    <span
      aria-hidden
      className={`${shape === "a" ? "bl-a" : "bl-b"} ${className}`}
      style={{ background: color, opacity }}
    />
  );
}
