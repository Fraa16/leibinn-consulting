import Image from "next/image";

/**
 * Marken-Assets aus den gelieferten Logo-Frames (public/brand/).
 * logo-mark-white.png / logo-lockup-white.png: aus frame-21 extrahierte,
 * gefüllte weiße Marke bzw. Wort-Bild-Marke — direkt für dunkle Flächen.
 * frame-01/02: Linien-Ornamente für Sektionshintergründe (dunkel gezeichnet,
 * .frame-on-dark hellt sie auf). frame-21 NICHT als Dekor verwenden: enthält
 * Wortmarke und Platzhalter-URL als Wasserzeichen.
 */

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-mark-white.png"
      alt=""
      aria-hidden
      width={240}
      height={165}
      className={className}
    />
  );
}

/** Wort-Bild-Marke „Leibinn Consulting — Investment Consulting“ (weiß). */
export function LogoLockup({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-lockup-white.png"
      alt="Leibinn Consulting – Investment Consulting"
      width={500}
      height={280}
      className={className}
    />
  );
}

const decorVariants = {
  /** große Kurven oben (frame-01) */
  top: { src: "/brand/frame-01.png", className: "top-0 left-1/2 -translate-x-1/2 w-[140%] max-w-none" },
  /** Schwingen unten rechts (frame-02) */
  corner: { src: "/brand/frame-02.png", className: "right-0 bottom-0 w-[70%]" },
} as const;

export function LogoFrameDecor({
  variant,
  opacity = 0.5,
}: {
  variant: keyof typeof decorVariants;
  opacity?: number;
}) {
  const decor = decorVariants[variant];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={decor.src}
        alt=""
        style={{ opacity }}
        className={`frame-on-dark absolute select-none ${decor.className}`}
      />
    </div>
  );
}

const goldDecorVariants = {
  /** Flügel-Mark (frame-02) als Eck-Akzent unten rechts */
  corner: { src: "/brand/frame-02.png", className: "-right-8 -bottom-10 w-[62%] max-w-none" },
  /** Ribbon-Kurve (frame-01) quer oben rechts */
  arc: { src: "/brand/frame-01.png", className: "-top-10 -right-8 w-[70%] max-w-none" },
} as const;

/**
 * Weiches Marken-Fragment für goldene Container. Kein .frame-on-dark-Filter:
 * mix-blend-multiply lässt das blaue Linien-Artwork tonal in die Goldfläche
 * einsinken. `-z-10` hält das Dekor unter dem (nicht-positionierten) Textinhalt,
 * ohne dass die Kinder ein z-Wrapping brauchen.
 */
export function GoldFrameDecor({
  variant = "corner",
  opacity = 0.55,
}: {
  variant?: keyof typeof goldDecorVariants;
  opacity?: number;
}) {
  const decor = goldDecorVariants[variant];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={decor.src}
        alt=""
        style={{ opacity }}
        className={`absolute select-none mix-blend-multiply ${decor.className}`}
      />
    </div>
  );
}
