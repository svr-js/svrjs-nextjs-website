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

export const PUT = async (
	req: NextRequest,
	{ params }: { params: { slug: string } }
) => {
	const client = await clientPromise;
	const db = client.db();
	const { slug } = params;

	if (!slug) {
		return NextResponse.json({ message: "Slug is required" }, { status: 400 });
	}

	const { title, content } = await req.json();

	if (typeof title !== "string" || typeof content !== "string") {
		return NextResponse.json(
			{ message: "Invalid title or content" },
			{ status: 400 }
		);
	}

	try {
		// it works here ig
		const result = await db
			.collection("pages")
			.findOneAndUpdate(
				{ slug },
				{ $set: { title, content } },
				{ returnDocument: "after" }
			);

		// i hate my life fr fr
		console.log("Update Result:", result);
		// result returns like

		// Update Result: {
		// 	_id: new ObjectId('66a2946b2b91eef505eef943'),
		// 	title: 'TEST PAGE',
		// 	slug: 'test-page',
		// 	content: 'asd]---\n' +
		// 	  '---\n' +
		// 	  '\n' +
		// 	  'this is basic heading ?\n' +
		// 	  '\n' +
		// 	  '**HELLO**\n' +
		// 	  '\n' +
		// 	  'erw\n' +
		// 	  '\n' +
		// 	  'trying another time for test'
		//   }

		// ERRROR : TypeError: Cannot read properties of undefined (reading '_id')
		// aposdjaoi sdio JUST WORK NIAWWWWWWWWW

		// if (result && result.value) {
		const serializedResult = {
			...result?.value,
			_id: result?.value._id.toString(), // Convert ObjectId to string
		};
		return NextResponse.json(result?.value.content, { status: 200 });
		// } else {
		// return NextResponse.json({ message: "Page not found" }, { status: 404 });
		// }
	} catch (error) {
		console.error("Error updating page:", error);
		return NextResponse.json(
			{ message: "Failed to update page" },
			{ status: 500 }
		);
	}
};

export const DELETE = async (
	req: NextRequest,
	{ params }: { params: { slug: string } }
) => {
	const client = await clientPromise;
	const db = client.db();
	const { slug } = params;

	if (!slug) {
		return NextResponse.json({ message: "Slug is required" }, { status: 400 });
	}

	try {
		const result = await db.collection("pages").deleteOne({ slug });

		if (result.deletedCount > 0) {
			return NextResponse.json(
				{ message: "Page deleted successfully" },
				{ status: 200 }
			);
		} else {
			return NextResponse.json({ message: "Page not found" }, { status: 404 });
		}
	} catch (error) {
		console.error("Error deleting page:", error);
		return NextResponse.json(
			{ message: "Failed to delete page" },
			{ status: 500 }
		);
	}
};
