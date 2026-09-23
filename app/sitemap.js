import { articles } from "@/lib/articles";
import { contentUpdated, site } from "@/lib/site";

function lastModified(iso) {
  return new Date(`${iso}T00:00:00.000Z`);
}

export default function sitemap() {
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
    lastModified: lastModified(contentUpdated),
    changeFrequency: path === "" || path === "/blog" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${site.url}/blog/${article.slug}`,
    lastModified: lastModified(article.updatedISO || contentUpdated),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
