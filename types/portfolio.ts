export interface PortfolioStats {
  projects: number;
  internships: number;
  certifications: number;
  patents: number;
  publications: number;
  awards: number;
}

export interface PortfolioData {
  // Basic Information
  name: string;
  firstName: string;
  lastName: string;

  // Professional
  designation: string[];
  tagline: string;
  bio: string;
  company: string;
  role: string;
  experience: string;
  availability: string;
  currentCompany: string;
  brand: string;

  // Contact
  email: string;
  phone: string;
  location: string;

  // Social Profiles
  github: string;
  linkedin: string;
  website: string;
  scholar: string;
  orcid: string;
  leetcode: string;
  hackerrank: string;
  medium: string;

  // Resume
  resume: string;

  // Statistics
  stats: PortfolioStats;
}