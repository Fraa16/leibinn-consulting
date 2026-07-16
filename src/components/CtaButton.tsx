import Link from "next/link";

export function CtaButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "inverted";
}) {
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-dark"
      : "bg-white text-ink hover:bg-paper-warm";
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-8 py-3.5 text-base font-medium tracking-wide transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}
