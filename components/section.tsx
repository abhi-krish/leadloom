type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  tone?: "default" | "muted";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={tone === "muted" ? "bg-mist/80 py-20 sm:py-24" : "py-20 sm:py-24"}
    >
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-lg leading-8 text-slate">{description}</p>
          ) : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
