type InfoCardProps = {
  title: string;
  description: string;
};

export function InfoCard({ title, description }: InfoCardProps) {
  return (
    <article className="rounded-3xl border border-line bg-white p-6 shadow-panel">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate">{description}</p>
    </article>
  );
}
