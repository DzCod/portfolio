import type { MetadataRoute } from "next";
import { getLocalizedUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getLocalizedUrl("en"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: getLocalizedUrl("en"),
          fr: getLocalizedUrl("fr"),
        },
      },
    },
    {
      url: getLocalizedUrl("fr"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: getLocalizedUrl("en"),
          fr: getLocalizedUrl("fr"),
        },
      },
    },
  ];
}
