import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export const GET = async (req: NextRequest) => {
	const client = await clientPromise;
	const db = client.db();
	const { searchParams } = new URL(req.url);
	const slug = searchParams.get("slug");

	if (!slug) {
		return NextResponse.json({ message: "Slug is required" }, { status: 400 });
	}

	const page = await db.collection("pages").findOne({ slug });
	if (page) {
		return NextResponse.json(page, { status: 200 });
	} else {
		return NextResponse.json({ message: "Page not found" }, { status: 404 });
	}
};

export const PUT = async (req: NextRequest) => {
	const client = await clientPromise;
	const db = client.db();
	const { searchParams } = new URL(req.url);
	const slug = searchParams.get("slug");
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
