import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";

export default function About() {
  return (
    <section
      id="about"
      className="section relative"
    >
      <div className="container-custom">

        <div className="mb-16 text-center">

          <p className="text-blue-400 font-semibold">
            ABOUT ME
          </p>

          <h2 className="mt-4 text-5xl font-black gradient-text">
            Engineering Intelligence
          </h2>

          <p className="mt-5 text-slate-400">
            Building innovative engineering solutions
            powered by Artificial Intelligence.
          </p>

        </div>

        <div className="grid gap-20 lg:grid-cols-2">

          <AboutContent />

          <AboutCards />

        </div>

      </div>
    </section>
  );
}