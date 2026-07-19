import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";


export default function ProjectsGrid() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {featuredProjects.map((project, index) => (
        <div
          key={project.id}
          className="animate-fade-up"
          style={{
            animationDelay: `${index * 100}ms`,
            animationFillMode: "both",
          }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}