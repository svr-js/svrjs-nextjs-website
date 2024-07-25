import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export const GET = async (
	req: NextRequest,
	{ params }: { params: { slug: string } }
) => {
	const client = await clientPromise;
	const db = client.db();
	const { slug } = params;

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
