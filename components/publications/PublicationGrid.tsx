import { publications } from "@/data/publications";
import PublicationCard from "./PublicationCard";

export default function PublicationGrid() {
  const featuredPublications = publications.filter(
    (publication) => publication.featured
  );

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {featuredPublications.map((publication) => (
        <PublicationCard
          key={publication.id}
          publication={publication}
        />
      ))}
    </div>
  );
}