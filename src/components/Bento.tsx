import Link from "next/link";
import { GoldFrameDecor } from "@/components/Brand";

/**
 * Asymmetrische Bento-Grids. Spans kommen als Klassen aus der Seite
 * (z. B. "md:col-span-7 md:row-span-2"), Flächen als Varianten.
 * Faustregel pro Grid: höchstens eine fawn- und eine azure-Zelle.
 */

const surfaces = {
  cobalt:
    "surface-dark border border-line bg-gradient-to-b from-cobalt to-twilight-soft",
  deep: "surface-dark border border-line bg-twilight-deep",
  azure: "bg-azure text-white",
  fawn: "bg-fawn text-twilight-deep",
  white: "bg-white text-[#191838]",
  outline: "border border-line-strong text-ink",
} as const;

export type BentoSurface = keyof typeof surfaces;

export function Bento({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 gap-5 md:grid-cols-12 ${className}`}>
      {children}
    </div>
  );
}

export function BentoCell({
  surface = "cobalt",
  className = "",
  href,
  children,
}: {
  surface?: BentoSurface;
  className?: string;
  href?: string;
  children: React.ReactNode;
}) {
  const base = `group relative isolate flex flex-col overflow-hidden rounded-2xl p-7 md:p-8 ${surfaces[surface]} ${className}`;
  const decor = surface === "fawn" ? <GoldFrameDecor variant="arc" /> : null;
  if (href) {
    return (
      <Link
        href={href}
        className={`${base} transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25`}
      >
        {decor}
        {children}
      </Link>
    );
  }
  return (
    <div className={base}>
      {decor}
      {children}
    </div>
  );
}
