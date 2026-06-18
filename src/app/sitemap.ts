import type { MetadataRoute } from "next";
import { SALON } from "@/config/salon";

const pages = [
  { path: "/", priority: 1.0, changeFreq: "weekly" as const },
  { path: "/services", priority: 0.9, changeFreq: "monthly" as const },
  { path: "/promotions", priority: 0.8, changeFreq: "weekly" as const },
  { path: "/about", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/gallery", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/reviews", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/faq", priority: 0.6, changeFreq: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
  { path: "/gift-cards", priority: 0.6, changeFreq: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFreq }) => ({
    url: `${SALON.website}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));
}
