import { portfolio } from "@/data/portfolio";

export default function HeroStats() {
  const stats = [
    {
      label: "Projects",
      value: portfolio.stats.projects,
    },
    {
      label: "Patents",
      value: portfolio.stats.patents,
    },
    {
      label: "Publications",
      value: portfolio.stats.publications,
    },
    {
      label: "Awards",
      value: portfolio.stats.awards,
    },
  ];

  return (
    <section className="mt-20">
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="glass rounded-3xl border border-white/10 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-blue-500/30"
          >
            <h3 className="gradient-text text-4xl font-bold md:text-5xl">
              {item.value}+
            </h3>

            <p className="mt-3 text-sm font-medium tracking-wide text-slate-400 uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}