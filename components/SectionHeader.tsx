type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-6xl px-6 md:px-10">
      <div className="mb-6 flex items-center gap-4">
        <div className="h-px w-8 bg-white/40" />
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          {eyebrow}
        </p>
      </div>
      <h2 className="max-w-3xl font-display text-4xl italic leading-none text-text md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
