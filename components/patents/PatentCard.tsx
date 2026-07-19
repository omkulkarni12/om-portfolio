import Link from "next/link";
import { Patent } from "@/types/patent";

interface PatentCardProps {
  patent: Patent;
}

const statusStyles = {
  "Patent Filed":
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  "Under Process":
    "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  Published:
    "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  Granted:
    "bg-purple-500/10 text-purple-400 border border-purple-500/20",
};

export default function PatentCard({ patent }: PatentCardProps) {
  return (
    <div className="group h-full rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40">
      <div className="flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[patent.status]}`}
          >
            {patent.status}
          </span>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300">
            {patent.type}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-bold text-white">
          {patent.title}
        </h3>

        <p className="mb-5 text-sm text-gray-400">
          {patent.subtitle}
        </p>

        <div className="mb-5">
          <p className="text-xs uppercase text-gray-500">
            Domain
          </p>

          <p className="mt-1 text-sm text-gray-300">
            {patent.domain}
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {patent.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-white/10 pt-4">
          <p className="text-sm text-gray-400">
            {patent.filingYear}
          </p>

          <p className="text-sm text-gray-400">
            {patent.organization}
          </p>

          <Link
            href={`/patents/${patent.slug}`}
            className="mt-4 inline-block font-medium text-blue-400"
          >
            View Patent →
          </Link>
        </div>
      </div>
    </div>
  );
}