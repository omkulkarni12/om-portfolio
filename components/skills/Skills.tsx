import SkillsGrid from "./SkillsGrid";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
    >
      <div className="container-custom">

        <div className="mb-20 text-center">

          <p className="font-semibold text-blue-400">
            SKILLS
          </p>

          <h2 className="gradient-text mt-4 text-5xl font-black">
            Technical Expertise
          </h2>

          <p className="mt-5 text-slate-400">
            Technologies, frameworks and engineering tools.
          </p>

        </div>

        <SkillsGrid />

      </div>
    </section>
  );
}