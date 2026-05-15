import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"

export const revalidate = false
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_INFO.url,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_INFO.url}/llms.txt`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${SITE_INFO.url}/llms-full.txt`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.4,
    },
    {
      url: `${SITE_INFO.url}/about.md`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_INFO.url}/experience.md`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${SITE_INFO.url}/projects.md`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: `${SITE_INFO.url}/awards.md`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.2,
    },
    {
      url: `${SITE_INFO.url}/certifications.md`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.2,
    },
  ]
}
