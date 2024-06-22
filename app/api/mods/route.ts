import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";

// Force the API to use SSR instead of static generation
export const dynamic = "force-dynamic";

// Handler for GET requests
export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("downloadsDatabase");
    const downloads = await db.collection("mods").find().toArray();
    return NextResponse.json(downloads, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch mods" },
      { status: 500 }
    );
  }
}
