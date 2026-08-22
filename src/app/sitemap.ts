import { MetadataRoute } from "next";
import { eventsData } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://techhelp4u.in";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/events`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/initiatives`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/community`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/collaborations`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/team`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];

  const dynamicEventRoutes: MetadataRoute.Sitemap = eventsData.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(event.createdAt || new Date()),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...dynamicEventRoutes];
}
