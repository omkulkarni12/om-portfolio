import Image from "next/image";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.id === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">

      <div className="container-custom">

        {/* Hero */}

        <div className="relative h-[500px] overflow-hidden rounded-3xl border border-white/10">

          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />

        </div>

        <div className="mt-12">

  {/* Status */}

  <span className="rounded-full bg-blue-500/10 px-4 py-2 text-blue-400">
    {project.status}
  </span>

  {/* Title */}

  <h1 className="gradient-text mt-6 text-5xl font-black leading-tight lg:text-6xl">
    {project.title}
  </h1>

  {/* Subtitle */}

  <p className="mt-4 max-w-4xl text-xl leading-8 text-slate-400">
    {project.subtitle}
  </p>

  {/* Project Meta */}

  <div className="mt-8 flex flex-wrap gap-3">

    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
      {project.category}
    </span>

    <span className="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300">
      📅 {project.duration}
    </span>

    <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
      👨‍💻 {project.role}
    </span>

  </div>

</div>

        
        {/* Problem */}

        <section className="mt-20">

          <h2 className="mb-6 text-3xl font-bold">
            Problem Statement
          </h2>

          <p className="leading-8 text-slate-400">
            {project.problem}
          </p>

        </section>

        {/* Solution */}

        <section className="mt-20">

          <h2 className="mb-6 text-3xl font-bold">
            Solution
          </h2>

          <p className="leading-8 text-slate-400">
            {project.solution}
          </p>

        </section>

        {/* Technologies */}

<section className="mt-20">

  <h2 className="mb-8 text-3xl font-bold">
    Technologies Used
  </h2>

  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">

    {project.technologies.map((tech) => (
      <div
        key={tech}
        className="glass group flex items-center justify-center rounded-2xl border border-white/10 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/5"
      >
        <span className="font-medium text-slate-300 transition group-hover:text-blue-400">
          {tech}
        </span>
      </div>
    ))}

  </div>

</section>

        {/* Features */}

        <section className="mt-20">

          <h2 className="mb-8 text-3xl font-bold">
            Key Features
          </h2>

          <ul className="space-y-4">

            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />

                <span>{feature}</span>

              </li>
            ))}

          </ul>

        </section>

        {/* Contributions */}

        <section className="mt-20">

          <h2 className="mb-8 text-3xl font-bold">
            My Contributions
          </h2>

          <ul className="space-y-4">

            {project.contributions.map((item) => (
              <li
                key={item}
                className="flex gap-3"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />

                <span>{item}</span>

              </li>
            ))}

          </ul>

        </section>

        {/* Challenges */}

        <section className="mt-20">

          <h2 className="mb-8 text-3xl font-bold">
            Challenges
          </h2>

          <ul className="space-y-4">

            {project.challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-3"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />

                <span>{challenge}</span>

              </li>
            ))}

          </ul>

        </section>

        {/* Results */}

        <section className="mt-20">

          <h2 className="mb-8 text-3xl font-bold">
            Results
          </h2>

          <ul className="space-y-4">

            {project.results.map((result) => (
              <li
                key={result}
                className="flex gap-3"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-purple-500" />

                <span>{result}</span>

              </li>
            ))}

          </ul>

        </section>
        {/* Awards */}

{project.awards.length > 0 && (
  <section className="mt-20">

    <h2 className="mb-8 text-3xl font-bold">
      Awards & Recognition
    </h2>

    <div className="space-y-4">

      {project.awards.map((award) => (
        <div
          key={award}
          className="glass flex items-center gap-4 rounded-2xl p-5"
        >
          <span className="text-3xl">🏆</span>

          <p className="text-lg">
            {award}
          </p>
        </div>
      ))}

    </div>

  </section>
)}

<section className="mt-20 flex flex-wrap gap-5">

  <a
    href={project.github}
    className="rounded-xl bg-slate-800 px-6 py-3 font-semibold transition hover:bg-slate-700"
  >
    GitHub
  </a>

  <a
    href={project.demo}
    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
  >
    Live Demo
  </a>

</section>


      </div>

    </main>
  );
}