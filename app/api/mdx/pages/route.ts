import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import matter from "gray-matter";

const changelogsDir = path.resolve(process.cwd(), "data/pages");

function getMDXFiles(dir: string): string[] {
	return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

export async function GET() {
	try {
		const mdxFiles = getMDXFiles(changelogsDir);
		const pages = mdxFiles.map((file) => {
			const filePath = path.join(changelogsDir, file);
			const content = fs.readFileSync(filePath, "utf-8");
			const { data, content: mdxContent } = matter(content);
			const slug = path.basename(file, path.extname(file));
			return {
				metadata: data,
				slug,
				content: mdxContent,
			};
		});
		return NextResponse.json(pages, { status: 200 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch pages" },
			{ status: 500 }
		);
	}
}

export async function POST(request: NextRequest) {
	const { title } = await request.json();
	const slug = title.toLowerCase().replace(/\s+/g, "-");
	const filePath = path.join(changelogsDir, `${slug}.mdx`);

	if (fs.existsSync(filePath)) {
		return NextResponse.json({ error: "Page already exists" }, { status: 400 });
	}

	try {
		fs.writeFileSync(filePath, `---\ntitle: ${title}\n---\n`);
		return NextResponse.json({ title, slug }, { status: 201 });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to create page" },
			{ status: 500 }
		);
	}
}
