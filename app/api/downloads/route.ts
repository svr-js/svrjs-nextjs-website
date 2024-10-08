import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";

// Force the API to use SSR instead of static generation
export const dynamic = "force-dynamic";

// Handler for GET requests
export async function GET(req: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const downloads = await db.collection("downloads").find().toArray();
    // console.log("Downloads fetched:", downloads);
    return NextResponse.json(downloads, { status: 200 });
  } catch (error) {
    console.log(`Error Messge ${error}`);
    return NextResponse.json(
      { error: "Failed to fetch downloads" },
      { status: 500 }
    );
  }
}
