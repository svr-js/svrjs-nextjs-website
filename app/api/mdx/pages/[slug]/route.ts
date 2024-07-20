import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define the path to the changelogs directory
const pagesDir = path.join(process.cwd(), "data", "pages");

export async function GET(
	request: NextRequest,
	{ params }: { params: { slug: string } }
) {
	const { slug } = params;
	const filePath = path.join(pagesDir, `${slug}.mdx`);

	try {
		const content = fs.readFileSync(filePath, "utf8");
		// Use gray-matter to parse the front matter and content
		const { data, content: mdxContent } = matter(content);
		return NextResponse.json({ title: data.title, content: mdxContent });
	} catch (error) {
		console.error("Failed to load page:", error);
		return NextResponse.json({ error: "Page not found" }, { status: 404 });
	}
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: { slug: string } }
) {
	const { slug } = params;
	const filePath = path.join(pagesDir, `${slug}.mdx`);
	const { title, content } = await request.json();

	try {
		fs.writeFileSync(filePath, `---\ntitle: ${title}\n---\n${content}`);
		return NextResponse.json({ title, slug, content });
	} catch (error) {
		console.error("Failed to update page:", error);
		return NextResponse.json(
			{ error: "Failed to update page" },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { slug: string } }
) {
	const { slug } = params;
	const filePath = path.join(pagesDir, `${slug}.mdx`);

	try {
		fs.unlinkSync(filePath);
		return NextResponse.json({}, { status: 204 });
	} catch (error) {
		console.error("Failed to delete page:", error);
		return NextResponse.json(
			{ error: "Failed to delete page" },
			{ status: 500 }
		);
	}
}
