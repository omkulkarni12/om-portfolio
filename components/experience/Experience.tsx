import ExperienceTimeline from "./ExperienceTimeline";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom">

        <div className="mb-20 text-center">
          <p className="font-semibold text-blue-400">
            EXPERIENCE
          </p>

          <h2 className="gradient-text mt-4 text-5xl font-black">
            Professional Journey
          </h2>

          <p className="mt-5 text-slate-400">
            My internships, engineering work, and research experience.
          </p>
        </div>

        <ExperienceTimeline />

      </div>
    </section>
  );
}