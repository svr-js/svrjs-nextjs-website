import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getMDXFiles(dir: string): string[] {
	return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
}

function readMDXFile(filePath: string): { metadata: any; content: string } {
	const source = fs.readFileSync(filePath, "utf-8");
	const { data: metadata, content } = matter(source);
	return { metadata, content };
}

function extractTweetIds(content: string): string[] {
	// Implement your tweet ID extraction logic here
	return [];
}

export function getMDXData(dir: string) {
	let mdxFiles = getMDXFiles(dir);
	return mdxFiles.map((file) => {
		let { metadata, content } = readMDXFile(path.join(dir, file));
		let slug = path.basename(file, path.extname(file));
		return {
			metadata,
			slug,
			content,
		};
	});
}

export function getBlogPosts() {
	return getMDXData(path.join(process.cwd(), "data", "pages"));
}
