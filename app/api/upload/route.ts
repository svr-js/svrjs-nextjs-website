import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

// Force the API to use SSR instead of static generation
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json();
  const { fileName, version, downloadLink, fileSize } = body;

  const client = await clientPromise;
  const db = client.db("downloadsDatabase");

  const result = await db.collection("downloads").insertOne({
    date: new Date().toISOString().split("T")[0],
    fileName,
    version,
    downloadLink,
    fileSize
  });

  return NextResponse.json({ success: true, id: result.insertedId });
}
