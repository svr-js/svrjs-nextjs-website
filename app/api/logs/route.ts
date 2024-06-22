import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";

// Handler for GET requests
export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("downloadsDatabase");
    const downloads = await db.collection("logs").find().toArray();
    return NextResponse.json(downloads, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch logs" },
      { status: 500 }
    );
  }
}
