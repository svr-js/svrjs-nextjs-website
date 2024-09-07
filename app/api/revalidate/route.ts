import { isValidSignature, SIGNATURE_HEADER_NAME } from "@sanity/webhook";
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
      revalidatePath(`/blog/${body.slug.current}`);
      revalidatePath("/blog", "page");
      revalidatePath("/blog/page/[id]", "page");
      return NextResponse.json({
        message: `Revalidated "${body._type}" with slug "${body.slug}"`
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
