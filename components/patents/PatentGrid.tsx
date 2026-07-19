import { patents } from "@/data/patents";
import PatentCard from "./PatentCard";

export default function PatentGrid() {
  const featuredPatents = patents.filter((patent) => patent.featured);

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
      {featuredPatents.map((patent) => (
        <PatentCard key={patent.id} patent={patent} />
      ))}
    </div>
  );
}