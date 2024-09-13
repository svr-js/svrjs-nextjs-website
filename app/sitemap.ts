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
    "/newsletter",
    "/docs/mods/mod-files",
    "/docs/mods/introduction",
    "/docs/mods/mod-loading-order",
    "/docs/mods/mod-development",
    "/docs/mods/mod-development-legacy",
    "/docs/mod-notes",
    "/docs/requirements",
    "/docs/server-side-javascript/svrjs-ssjs",
    "/docs/server-side-javascript/migration",
    "/docs/api/svrjs-api-legacy",
    "/docs/api/svrjs-api",
    "/docs/config/cgi-scgi-jsgi-php",
    "/docs/config/cli-options",
    "/docs/config/reverse-proxy-config",
    "/docs/config/configuration",
    "/docs/config/redirects",
    "/docs/config/forward-proxy-notes",
    "/docs/config/fastcgi-php-fpm",
    "/docs/config/user-management",
    "/docs/config/environment",
    "/docs/config/virtual-hosts",
    "/docs/config/http-auth",
    "/docs/config/page-customization",
    "/docs/config/client-secure",
    "/docs/config/custom-error",
    "/docs/getting-started/svrjs-commands",
    "/docs/getting-started/updating-svrjs",
    "/docs/getting-started/svrjs-utilities",
    "/docs/getting-started/features",
    "/docs/getting-started/svrjs-files",
    "/docs/getting-started/installation"
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
