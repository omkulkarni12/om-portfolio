export interface Project {
  id: string;

  title: string;

  subtitle: string;

  status:
    | "Completed"
    | "Prototype"
    | "Prototype Completed"
    | "Research"
    |"Research Completed"
    | "Patent Filed"
    | "Under Development"
    | "TECHgium 9 Recognition";

  category: string;

  duration: string;

  role: string;

  team: string;

  technologies: string[];

  problem: string;

  solution: string;

  contributions: string[];

  features: string[];

  challenges: string[];

  results: string[];

  github: string;

  demo: string;

  images: string[];

  patent: string;

  publication: string;

  awards: string[];

  featured: boolean;
}