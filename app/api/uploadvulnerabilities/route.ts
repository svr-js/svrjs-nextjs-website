import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

// Force the API to use SSR instead of static generation
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
	const body = await request.json();
	const { version, date, bullets } = body;

	const client = await clientPromise;
	const db = client.db("downloadsDatabase");

	const result = await db.collection("vulnerabilities").insertOne({
		version,
		bullets,
	});

	return NextResponse.json({ success: true, id: result.insertedId });
}
