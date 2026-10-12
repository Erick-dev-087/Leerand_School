import type { MetadataRoute } from "next";

/**
 * Generates /robots.txt via Next.js metadata API.
 * Allows all crawlers, points to the sitemap, and blocks
 * crawling of internal Next.js assets.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/", "/api/"],
      },
    ],
    sitemap: "https://leerandschool.ac.ke/sitemap.xml",
  };
}
