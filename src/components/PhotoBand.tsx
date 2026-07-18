import Image from "next/image";

/**
 * Vollflächiges Foto-Band mit Navy-Verlauf (Markentönung + Lesbarkeit).
 * Optionaler Overlay-Inhalt (z. B. Zitat) links unten.
 */
export function PhotoBand({
  src,
  alt,
  focus = "center",
  height = "md",
  children,
}: {
  src: string;
  alt: string;
  focus?: "center" | "top" | "right" | "left";
  height?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}) {
  const h =
    height === "lg"
      ? "h-[60vh] min-h-96"
      : height === "sm"
        ? "h-64 md:h-80"
        : "h-96 md:h-[30rem]";
  const objectPos = {
    center: "object-center",
    top: "object-top",
    right: "object-right",
    left: "object-left",
  }[focus];

  return (
    <section className={`relative w-full overflow-hidden ${h}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={`object-cover ${objectPos}`}
      />
      {/* Navy-Tönung + Verlauf für Übergang und Textkontrast */}
      <div
        aria-hidden
        className="absolute inset-0 bg-twilight/45 mix-blend-multiply"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-twilight via-twilight/30 to-twilight/10"
      />
      {children && (
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-6 pb-10 md:pb-14">
          {children}
        </div>
      )}
    </section>
  );
}
