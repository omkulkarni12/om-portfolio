import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section relative overflow-hidden"
    >
      <div className="container-custom">

        <div className="mb-20 text-center">

          <p className="font-semibold tracking-widest text-blue-400">
            PROJECTS
          </p>

          <h2 className="gradient-text mt-4 text-5xl font-black">
            Featured Engineering Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Artificial Intelligence, Robotics,
            Electric Vehicles, Industrial Automation
            and Full Stack Engineering projects.
          </p>

        </div>

        <ProjectsGrid />

        {/* Looking for More / Upcoming Features */}
        <div className="mt-20">
          <div className="glass rounded-[32px] border border-white/10 p-8 md:p-12 relative overflow-hidden bg-neutral-900/40 backdrop-blur-md">
            {/* Ambient Background Glows */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px] -z-10" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px] -z-10" />

            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
              <div>
                <span className="inline-flex rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 uppercase tracking-widest border border-blue-500/20">
                  What's Next
                </span>

                <h3 className="mt-4 text-3xl md:text-4xl font-extrabold text-white">
                  Looking for more? or Upcoming Features
                </h3>

                <p className="mt-4 text-slate-300 leading-8 text-sm md:text-base">
                  I am actively working on new innovations in AI, Robotics, and Smart Engineering. 
                  Below are some of the upcoming platforms and research developments being developed 
                  under <strong>Raghava Innovations</strong>.
                </p>
                
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 hover:scale-[1.02] shadow-lg shadow-blue-500/20"
                  >
                    Discuss a Project
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Upcoming cards grid */}
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-blue-500/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🔋</span>
                    <h4 className="text-sm font-bold text-white">Rydezo EV Platform</h4>
                  </div>
                  <p className="mt-2 text-xs text-slate-400 leading-5">
                    An intelligent AI-powered Electric Vehicle fleet management and battery state analytics interface.
                  </p>
                  <span className="mt-3 inline-block text-[10px] font-semibold tracking-wider text-amber-400 uppercase">
                    🟡 Under Development
                  </span>
                </div>

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 hover:border-blue-500/20 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🛰️</span>
                    <h4 className="text-sm font-bold text-white">AI Edge Navigation v2</h4>
                  </div>
                  <p className="mt-2 text-xs text-slate-400 leading-5">
                    Integrating low-latency semantic segmentation and obstacle avoidance for autonomous drones on edge CPU/GPU.
                  </p>
                  <span className="mt-3 inline-block text-[10px] font-semibold tracking-wider text-blue-400 uppercase">
                    🔵 Research Phase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}