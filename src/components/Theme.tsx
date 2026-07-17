/** Weiße Breaker-Sektion: flippt alle Token im Teilbaum (globals.css). */
export function LightSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`theme-light ${className}`}>
      {children}
    </section>
  );
}
