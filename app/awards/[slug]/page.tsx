import { notFound } from "next/navigation";
import { awards } from "@/data/awards";
import { Trophy, Calendar, Sparkles, Cpu } from "lucide-react";
import Link from "next/link";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return awards.map((award) => ({
    slug: award.slug,
  }));
}

export default async function AwardDetailsPage({ params }: Props) {
  const { slug } = await params;
  const award = awards.find((item) => item.slug === slug);

  if (!award) {
    notFound();
  }

  const categoryColor = {
    Research: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    Competition: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    Innovation: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    Leadership: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    Academic: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    Professional: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
  };

  return (
    <main className="min-h-screen bg-background py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          ← Back to Portfolio
        </Link>

        <section className="glass rounded-3xl border border-white/10 p-10 bg-neutral-900/40 backdrop-blur-md">
          <span className={`inline-flex rounded-full px-4 py-1 text-sm font-semibold ${categoryColor[award.category]}`}>
            {award.category}
          </span>

          <h1 className="mt-6 text-4xl font-black text-white leading-tight md:text-5xl">
            {award.title}
          </h1>

          <p className="mt-4 text-xl text-blue-400 font-medium">
            {award.organization}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <p className="text-sm text-slate-500">Year</p>
              <p className="mt-1 font-semibold text-white">{award.year}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Event / Date</p>
              <p className="mt-1 font-semibold text-white">{award.date}</p>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="mb-6 text-2xl font-bold text-white flex items-center gap-3">
            <Trophy className="text-yellow-400" />
            Description
          </h2>
          <div className="leading-8 text-slate-300 text-lg flex flex-col gap-4">
            <p>{award.description}</p>
            {award.link && (
              <a
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                View LinkedIn Post →
              </a>
            )}
          </div>
        </section>

        {award.achievements && award.achievements.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-2xl font-bold text-white flex items-center gap-3">
              <Sparkles className="text-blue-400" />
              Key Achievements
            </h2>
            <ul className="space-y-4">
              {award.achievements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✔</span>
                  <span className="text-slate-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {award.technologies && award.technologies.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-2xl font-bold text-white flex items-center gap-3">
              <Cpu className="text-cyan-400" />
              Technologies Involved
            </h2>
            <div className="flex flex-wrap gap-3">
              {award.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
