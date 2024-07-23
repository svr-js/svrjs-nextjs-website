import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function GET() {
	try {
		const client = await clientPromise;
		const db = client.db();
		const pages = await db.collection("pages").find({}).toArray();
		return NextResponse.json(pages, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to load pages" },
			{ status: 500 }
		);
	}
}

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { title, slug, content } = body;

		const client = await clientPromise;
		const db = client.db();
		const result = await db
			.collection("pages")
			.insertOne({ title, slug, content });

		if (result.acknowledged) {
			const newPage = await db
				.collection("pages")
				.findOne({ _id: result.insertedId });
			return NextResponse.json(newPage, { status: 201 });
		} else {
			return NextResponse.json(
				{ error: "Failed to create page" },
				{ status: 500 }
			);
		}
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to create page" },
			{ status: 500 }
		);
	}
}
