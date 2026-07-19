export type PublicationStatus =
  | "Published"
  | "Under Review"
  | "In Preparation";

export interface Publication {
  id: number;
  slug: string;

  title: string;

  journal: string;
  volume: string;
  issue: string;
  pages: string;

  year: number;

  status: PublicationStatus;
  type: string;

  publisher: string;
  issn: string;

  authors: string[];

  researchArea: string[];

  abstract: string;

  keywords: string[];

  highlights: string[];

  links: {
    journal?: string;
    doi?: string;
    pdf?: string;
  };

  featured: boolean;
}