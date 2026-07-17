import Link from "next/link";

export function CtaButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-fawn text-twilight-deep shadow-lg shadow-black/25 hover:bg-fawn-light hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30"
      : "border border-line-strong text-frost hover:border-azure-light hover:text-azure-light";
  return (
    <Link
      href={href}
      className={`inline-block rounded-full px-8 py-3.5 text-base font-semibold tracking-wide transition-all duration-200 ${styles}`}
    >
      {children}
    </Link>
  );
}
