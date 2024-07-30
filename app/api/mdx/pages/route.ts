import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export const GET = async (req: NextRequest) => {
	const client = await clientPromise;
	const db = client.db();

	try {
		const pages = await db.collection("pages").find().toArray();
		return NextResponse.json(pages, { status: 200 });
	} catch (error) {
		console.error("Error fetching pages:", error);
		return NextResponse.json(
			{ message: "Failed to fetch pages" },
			{ status: 500 }
		);
	}
};

export const POST = async (req: NextRequest) => {
	const client = await clientPromise;
	const db = client.db();
	const { title, slug, content } = await req.json();

	if (!slug) {
		return NextResponse.json(
			{ message: "Missing required fields" },
			{ status: 400 }
		);
	}

	try {
		const newPage = { title, slug, content };
		const result = await db.collection("pages").insertOne(newPage);
		return NextResponse.json(newPage, { status: 201 });
	} catch (error) {
		console.error("Error creating page:", error);
		return NextResponse.json(
			{ message: "Failed to create page" },
			{ status: 500 }
		);
	}
};
