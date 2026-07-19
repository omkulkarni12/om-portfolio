import PublicationGrid from "./PublicationGrid";

export default function Publication() {
  return (
    <section
      id="publications"
      className="section"
    >
      <div className="container-custom">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Publications
          </p>

          <h2 className="mb-5 text-4xl font-bold text-white">
            Research Publications
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-400">
            Published research contributions focusing on Artificial
            Intelligence, Internet of Things, Environmental
            Sustainability, Smart Cities, and emerging engineering
            technologies.
          </p>
        </div>

        <PublicationGrid />
      </div>
    </section>
  );
}