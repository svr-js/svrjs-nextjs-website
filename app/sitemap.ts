import { getAllBlogPostSlugs } from "@/lib/getBlogPost";

export default async function sitemap() {
  const blogPostSlugs = await getAllBlogPostSlugs();

  const baseRoutes = [
    "/",
    "/blog",
    "/changelog",
    "/contact",
    "/contribute",
    "/downloads",
    "/mods",
    "/privacy",
    "/tos",
    "/vulnerabilities",
    "/newsletter"
  ].map((route) => ({
    url: `https://svrjs.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  const blogRoutes = blogPostSlugs.map((slug) => ({
    url: `https://svrjs.vercel.app/blog/${slug.slug}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  return [...baseRoutes, ...blogRoutes];
}
