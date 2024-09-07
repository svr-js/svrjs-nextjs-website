import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { revalidatePath } from "next/cache";

// Force the API to use SSR instead of static generation
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json();
  const { version, date, bullets } = body;

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const result = await db.collection("logs").insertOne({
    version,
    date,
    bullets
  });

  revalidatePath("/changelog");

  return NextResponse.json({ success: true, id: result.insertedId });
}
