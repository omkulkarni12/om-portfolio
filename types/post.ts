export interface Post {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category:
    | "Projects"
    | "Research"
    | "Artificial Intelligence"
    | "Machine Learning"
    | "Robotics"
    | "Automotive"
    | "Electrical Engineering"
    | "Entrepreneurship"
    | "Career"
    | "Personal Journey"
    | "Engineering Thoughts"
    | "Tutorials";
  date: string;
  year: number;
  readingTime: string;
  image: string;
  featured: boolean;
  content: string;
  technologies?: string[];
  relatedProjectSlug?: string;
  references?: string[];
  toc?: Array<{ id: string; text: string }>;
}
