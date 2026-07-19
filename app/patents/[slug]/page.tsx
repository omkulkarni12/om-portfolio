import { notFound } from "next/navigation";
import { patents } from "@/data/patents";
import {
  Calendar,
  Cpu,
  Lightbulb,
  Users,
  Trophy,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

interface PatentPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return patents.map((patent) => ({
    slug: patent.slug,
  }));
}

export default async function PatentDetailsPage({
  params,
}: PatentPageProps) {
  const { slug } = await params;
  const patent = patents.find((p) => p.slug === slug);

  if (!patent) {
    notFound();
  }

  const statusColor = {
    "Patent Filed":
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    "Under Process":
      "bg-amber-500/10 text-amber-400 border border-amber-500/20",
    Published:
      "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    Granted:
      "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  };

  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto max-w-7xl px-6">

        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        {/* HERO */}

        <section className="rounded-3xl border border-border bg-card p-10 shadow-sm">

          <span
            className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
              statusColor[patent.status]
            }`}
          >
            {patent.status}
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            {patent.title}
          </h1>

          <p className="mt-5 text-lg text-muted-foreground max-w-4xl">
            {patent.subtitle}
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">

            <div>
              <p className="text-sm text-muted-foreground">
                Patent Type
              </p>

              <p className="mt-1 font-semibold">
                {patent.type}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Domain
              </p>

              <p className="mt-1 font-semibold">
                {patent.domain}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Organization
              </p>

              <p className="mt-1 font-semibold">
                {patent.organization}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Filing Year
              </p>

              <p className="mt-1 font-semibold">
                {patent.filingYear}
              </p>
            </div>

          </div>

        </section>

        {/* PATENT DOCUMENT / CERTIFICATE */}
        {patent.images && patent.images.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">
              Patent Certificate / Document
            </h2>
            <div className="max-w-3xl border border-border rounded-3xl overflow-hidden bg-card/50 p-6 backdrop-blur-sm flex justify-center shadow-lg">
              <img
                src={patent.images[0]}
                alt={`${patent.title} Certificate`}
                className="w-full h-auto rounded-2xl object-contain max-h-[800px] border border-border/40 shadow-inner"
              />
            </div>
          </section>
        )}

        {/* OVERVIEW */}

        <section className="mt-16">

          <h2 className="text-3xl font-bold">
            Overview
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {patent.abstract}
          </p>

        </section>

        {/* PROBLEM */}

        <section className="mt-16">

          <div className="flex items-center gap-3">

            <Cpu className="text-primary" />

            <h2 className="text-3xl font-bold">
              Problem Statement
            </h2>

          </div>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {patent.problem}
          </p>

        </section>

        {/* INNOVATION */}

        <section className="mt-16">

          <div className="flex items-center gap-3">

            <Lightbulb className="text-primary" />

            <h2 className="text-3xl font-bold">
              Innovation
            </h2>

          </div>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {patent.innovation}
          </p>

        </section>

        {/* TECHNOLOGIES */}

        <section className="mt-16">

          <h2 className="text-3xl font-bold">
            Technology Stack
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">

            {patent.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}

          </div>

        </section>

        {/* INVENTORS */}

        <section className="mt-16">

          <div className="flex items-center gap-3">

            <Users className="text-primary" />

            <h2 className="text-3xl font-bold">
              Inventors
            </h2>

          </div>

          <ul className="mt-6 space-y-3">

            {patent.inventors.map((inventor) => (
              <li key={inventor}>
                • {inventor}
              </li>
            ))}

          </ul>

        </section>

        {/* FUTURE SCOPE */}

        <section className="mt-16">

          <h2 className="text-3xl font-bold">
            Future Scope
          </h2>

          <ul className="mt-6 space-y-3">

            {patent.futureScope.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}

          </ul>

        </section>

        {/* ACHIEVEMENTS */}

        <section className="mt-16 mb-24">

          <div className="flex items-center gap-3">

            <Trophy className="text-primary" />

            <h2 className="text-3xl font-bold">
              Achievements
            </h2>

          </div>

          <div className="mt-8 flex flex-wrap gap-3">

            {patent.achievements.map((achievement) => (
              <span
                key={achievement}
                className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400"
              >
                ✓ {achievement}
              </span>
            ))}

          </div>

        </section>

      </div>
    </main>
  );
}