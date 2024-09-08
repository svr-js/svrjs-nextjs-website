/**
 * This code is responsible for revalidating the cache when a post or author is updated.
 *
 * It is set up to receive a validated GROQ-powered Webhook from Sanity.io:
 * https://www.sanity.io/docs/webhooks
 *
 * 1. Go to the API section of your Sanity project on sanity.io/manage or run `npx sanity hook create`
 * 2. Click "Create webhook"
 * 3. Set the URL to https://YOUR_NEXTJS_SITE_URL/api/revalidate
 * 4. Dataset: Choose desired dataset or leave at default "all datasets"
 * 5. Trigger on: "Create", "Update", and "Delete"
 * 6. Filter: _type == "blog"
 * 7. Projection: Leave empty
 * 8. Status: Enable webhook
 * 9. HTTP method: POST
 * 10. HTTP Headers: Leave empty
 * 11. API version: v2023-08-08
 * 12. Include drafts: No
 * 13. Secret: Set to the same value as SANITY_REVALIDATE_SECRET (create a random secret if you haven't yet)
 * 14. Save the cofiguration
 */

import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { client } from "@/lib/sanity";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const secret = `${process.env.SANITY_WEBHOOK_SECRET}`;

export async function POST(req: NextRequest) {
  const body = await req.json();
  const rawBody = JSON.stringify(body);

  if (
    !(await isValidSignature(
      rawBody,
      req.headers.get(SIGNATURE_HEADER_NAME) ?? "",
      secret.trim()
    ))
  ) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  try {
    if (body._type == "blog") {
      if (body.slug.current) {
        revalidatePath(`/blog/${body.slug.current}`);
        revalidatePath("/sitemap.xml");
        revalidatePath("/rss.xml");
      }
      revalidatePath("/blog");

      // Change in /blog/page/[id] route and in BlogCards component too!
      const cardsPerPage = 6;

      const totalPostsQuery = `count(*[_type == 'blog'])`;
      const totalPosts: number = await client.fetch(
        totalPostsQuery,
        {},
        { cache: "no-store" }
      );

      const totalPages = Math.ceil(totalPosts / cardsPerPage);
      for (let i = 1; i <= totalPages + 1; i++) {
        revalidatePath(`/blog/page/${i.toString()}`);
      }

      return NextResponse.json({
        message: `Revalidated "${body._type}" with slug "${body.slug.current}"`
      });
    }

    return NextResponse.json({ message: "No managed type" });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
