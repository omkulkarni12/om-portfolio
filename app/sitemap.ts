import { MetadataRoute } from "next";
import { awards } from "@/data/awards";
import { patents } from "@/data/patents";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://om-portfolio.dev";

  // Static routes
  const staticRoutes = [
    "",
    "/innovation-log",
    "/story",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic award routes
  const awardRoutes = awards.map((award) => ({
    url: `${baseUrl}/awards/${award.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic patent routes
  const patentRoutes = patents.map((patent) => ({
    url: `${baseUrl}/patents/${patent.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic publication routes
  const publicationRoutes = publications.map((pub) => ({
    url: `${baseUrl}/publications/${pub.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic blog post routes
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/innovation-log/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...awardRoutes,
    ...patentRoutes,
    ...projectRoutes,
    ...publicationRoutes,
    ...blogRoutes,
  ];
}
