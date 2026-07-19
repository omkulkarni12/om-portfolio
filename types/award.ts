export interface Award {
  id: number;
  slug: string;
  title: string;
  organization: string;
  category: "Research" | "Competition" | "Innovation" | "Leadership" | "Academic" | "Professional";
  date: string;
  year: number;
  description: string;
  achievements: string[];
  technologies: string[];
  featured: boolean;
  image: string;
  link?: string;
}
