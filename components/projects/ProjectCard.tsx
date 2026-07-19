import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const getStatusBadgeStyles = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500/10 text-green-400 border border-green-500/20";
      case "prototype completed":
        return "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
      case "research completed":
        return "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20";
      case "patent filed":
        return "bg-purple-500/10 text-purple-400 border border-purple-500/20";
      case "under development":
        return "bg-amber-500/10 text-amber-400 border border-amber-500/20";
      default:
        return "bg-blue-500/10 text-blue-400 border border-blue-500/20";
    }
  };

  return (
    <div className="glass group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] h-full flex flex-col">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />

        <div className="absolute left-5 top-5">
          <span
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider ${getStatusBadgeStyles(
              project.status
            )}`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col justify-between p-7">
        <div className="space-y-4">
          {/* Category */}
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-400">
            {project.category}
          </p>

          <h3 className="text-xl font-extrabold leading-snug text-white transition-colors duration-300 group-hover:text-blue-400">
            {project.title}
          </h3>

          <p className="text-sm leading-6 text-slate-400 line-clamp-2">
            {project.subtitle}
          </p>

          {project.awards.length > 0 && (
            <div className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/25 bg-yellow-500/5 px-3 py-1 text-xs font-semibold text-yellow-400">
              🏆 {project.awards[0]}
            </div>
          )}
        </div>

        <div className="mt-6 space-y-5">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-white/5 bg-slate-800/40 px-3 py-1 text-xs text-slate-300 transition-colors duration-200 hover:border-blue-500/20 hover:text-blue-300"
              >
                {tech}
              </span>
            ))}

            {project.technologies.length > 4 && (
              <span className="rounded-xl border border-blue-500/10 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-300">
                +{project.technologies.length - 4} More
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-auto">
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              📅 {project.duration}
            </div>

            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600/90 hover:bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:gap-3 hover:scale-[1.02]"
            >
              View Project
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}