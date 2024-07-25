import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export const GET = async () => {
	const client = await clientPromise;
	const db = client.db();
	const pages = await db.collection("pages").find().toArray();
	return NextResponse.json(pages, { status: 200 });
};

export const PUT = async (
	req: NextRequest,
	{ params }: { params: { slug: string } }
) => {
	const client = await clientPromise;
	const db = client.db();
	const { slug } = params;
	const { title, content } = await req.json();

	if (!slug) {
		return NextResponse.json({ message: "Slug is required" }, { status: 400 });
	}

	const result = await db
		.collection("pages")
		.findOneAndUpdate(
			{ slug },
			{ $set: { title, content } },
			{ returnDocument: "after" }
		);

	if (result && result.value) {
		const page = result.value;
		return NextResponse.json(page, { status: 200 });
	} else {
		return NextResponse.json({ message: "Page not found" }, { status: 404 });
	}
};

export const POST = async (req: NextRequest) => {
	const client = await clientPromise;
	const db = client.db();
	const { title, slug, content } = await req.json();

	if (!title || !slug || !content) {
		return NextResponse.json(
			{ message: "Missing required fields" },
			{ status: 400 }
		);
	}

	const newPage = { title, slug, content };
	const result = await db.collection("pages").insertOne(newPage);
	return NextResponse.json(newPage, { status: 201 });
};
