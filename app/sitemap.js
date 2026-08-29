import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    "",
    "/best-ear-protection",
    "/hearing-safety-guides",
    "/range-nrr-card",
    "/noise-level-database",
    "/osha-hearing-protection",
    "/blog",
    "/about",
    "/contact",
    "/affiliate-disclosure",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
