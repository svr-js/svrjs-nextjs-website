import { getAllBlogPostSlugs } from "@/lib/getBlogPost";
import clientPromise from "@/lib/db";

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
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  const blogRoutes = blogPostSlugs.map((slug) => ({
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${slug.slug}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

  let changelogRoutes: any[] = [];
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const slugs = await db.collection("pages").find().toArray();
    changelogRoutes = slugs.map((slug) => ({
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/changelog/${slug.slug}`,
      lastModified: new Date().toISOString().split("T")[0]
    }));
  } catch (err) {}

  return [...baseRoutes, ...blogRoutes, ...changelogRoutes];
}
