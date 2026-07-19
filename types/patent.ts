export type PatentStatus =
  | "Patent Filed"
  | "Under Process"
  | "Published"
  | "Granted";

export interface Patent {
  id: string;
  slug: string;

  title: string;
  subtitle: string;

  status: PatentStatus;

  type: string;

  domain: string;

  organization: string;

  role: string;

  filingYear: string;

  applicationNumber?: string;

  abstract: string;

  problem: string;

  innovation: string;

  technologies: string[];

  inventors: string[];

  futureScope: string[];

  achievements: string[];

  images: string[];

  featured: boolean;
}