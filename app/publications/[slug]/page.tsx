import { notFound } from "next/navigation";
import { publications } from "@/data/publications";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return publications.map((publication) => ({
    slug: publication.slug,
  }));
}

export default async function PublicationPage({ params }: Props) {
  const { slug } = await params;
  const publication = publications.find(
    (item) => item.slug === slug
  );

  if (!publication) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-400">
        {publication.status}
      </span>

      <h1 className="mt-6 text-5xl font-bold text-white">
        {publication.title}
      </h1>

      <p className="mt-6 text-lg text-gray-400">
        {publication.journal}
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Info title="Publisher" value={publication.publisher} />
        <Info title="Year" value={publication.year.toString()} />
        <Info title="Volume" value={publication.volume} />
        <Info title="Issue" value={publication.issue} />
        <Info title="Pages" value={publication.pages} />
        <Info title="ISSN" value={publication.issn} />
      </div>

      <section className="mt-14">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Abstract
        </h2>

        <p className="leading-8 text-gray-300">
          {publication.abstract}
        </p>
      </section>

      <section className="mt-14">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Research Areas
        </h2>

        <div className="flex flex-wrap gap-3">
          {publication.researchArea.map((area) => (
            <span
              key={area}
              className="rounded-full bg-blue-500/10 px-4 py-2 text-blue-300"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Highlights
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-gray-300">
          {publication.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Authors
        </h2>

        <div className="flex flex-wrap gap-3">
          {publication.authors.map((author) => (
            <span
              key={author}
              className="rounded-full border border-white/10 px-4 py-2 text-gray-300"
            >
              {author}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
      <p className="text-sm uppercase tracking-wider text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-white">{value}</p>
    </div>
  );
}