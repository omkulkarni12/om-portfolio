import { skillCategories } from "@/data/skills";
import SkillCard from "./SkillCard";

export default function SkillsGrid() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {skillCategories.map((category) => (
        <SkillCard
          key={category.title}
          category={category}
        />
      ))}
    </div>
  );
}