import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";

const changelogsDir = path.resolve(process.cwd(), "data/pages");

async function getMDXFiles(dir: string): Promise<string[]> {
	const files = await fs.readdir(dir);
	return files.filter((file) => file.endsWith(".mdx"));
}

export async function GET() {
	try {
		const mdxFiles = await getMDXFiles(changelogsDir);
		const pages = await Promise.all(
			mdxFiles.map(async (file) => {
				const filePath = path.join(changelogsDir, file);
				const content = await fs.readFile(filePath, "utf-8");
				const { data, content: mdxContent } = matter(content);
				const slug = path.basename(file, path.extname(file));
				return {
					metadata: data,
					slug,
					content: mdxContent,
				};
			})
		);
		return NextResponse.json(pages, { status: 200 });
	} catch (error) {
		console.error("Failed to fetch pages:", error);
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

	try {
		if (
			await fs
				.stat(filePath)
				.then(() => true)
				.catch(() => false)
		) {
			return NextResponse.json(
				{ error: "Page already exists" },
				{ status: 400 }
			);
		}

		await fs.writeFile(filePath, `---\ntitle: ${title}\n---\n`);
		return NextResponse.json({ title, slug }, { status: 201 });
	} catch (error) {
		console.error("Failed to create page:", error);
		return NextResponse.json(
			{ error: "Failed to create page" },
			{ status: 500 }
		);
	}
}
