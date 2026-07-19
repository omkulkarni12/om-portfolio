export interface Experience {
  id: string;
  company: string;
  logo: string;
  role: string;
  duration: string;
  location: string;
  type?: string;
  technologies?: string[];
  description: string[];
  achievements?: string[];
  website?: string;
}