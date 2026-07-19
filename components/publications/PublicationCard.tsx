import Link from "next/link";
import type { Publication } from "@/types/publication";

interface PublicationCardProps {
  publication: Publication;
}

const statusStyles: Record<
  Publication["status"],
  string
> = {
  Published:
    "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",

  "Under Review":
    "bg-amber-500/10 text-amber-400 border border-amber-500/20",

  "In Preparation":
    "bg-blue-500/10 text-blue-400 border border-blue-500/20",
};

export default function PublicationCard({
  publication,
}: PublicationCardProps) {
  return (
    <div className="group h-full rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">
      <div className="flex h-full flex-col p-6">
        <div className="mb-5 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              statusStyles[publication.status]
            }`}
          >
            {publication.status}
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
            {publication.type}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
          {publication.title}
        </h3>

        <p className="mb-5 text-sm text-gray-400">
          {publication.journal}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {publication.researchArea.slice(0, 4).map((area) => (
            <span
              key={area}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-white/10 pt-4">
          <div className="mb-4 flex items-center justify-between text-sm text-gray-400">
            <span>{publication.year}</span>
            <span>{publication.publisher}</span>
          </div>

          <Link
            href={`/publications/${publication.slug}`}
            className="inline-flex items-center gap-2 font-medium text-blue-400 transition-all duration-300 hover:gap-3"
          >
            Read Publication →
          </Link>
        </div>
      </div>
    </div>
  );
}