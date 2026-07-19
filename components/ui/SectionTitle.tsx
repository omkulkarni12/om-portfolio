interface SectionTitleProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function SectionTitle({
  title,
  subtitle,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-20 text-center">
      <p className="font-semibold tracking-widest text-blue-400">
        {subtitle}
      </p>

      <h2 className="gradient-text mt-4 text-5xl font-black">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
        {description}
      </p>
    </div>
  );
}