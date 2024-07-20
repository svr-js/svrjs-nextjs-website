const fs = require("fs");
const path = require("path");
const { compile } = require("@mdx-js/mdx");
const { remark } = require("remark");
const { toVFile } = require("to-vfile");
const { format } = require("prettier");
const rehypeStringify = require("rehype-stringify");
const remarkParse = require("remark-parse");
const rehypeParse = require("rehype-parse");
const { unified } = require("unified");

const mdxDir = path.join(__dirname, "../data/pages");
const outputDir = path.join(__dirname, "../data/mdx");

if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(mdxDir, (err, files) => {
	if (err) throw err;

	files.forEach(async (file) => {
		if (path.extname(file) === ".mdx") {
			const filePath = path.join(mdxDir, file);
			const outputFilePath = path.join(
				outputDir,
				path.basename(file, ".mdx") + ".html"
			);

			try {
				const mdxContent = fs.readFileSync(filePath, "utf8");

				const processedContent = await compile(mdxContent, {
					remarkPlugins: [remarkParse],
					rehypePlugins: [rehypeStringify],
				});

				const html = processedContent.toString();

				// ig optional?
				const formattedHtml = format(html, { parser: "html" });

				fs.writeFileSync(outputFilePath, formattedHtml);
				console.log(`Processed ${file} -> ${outputFilePath}`);
			} catch (error) {
				console.error(`Failed to process ${file}:`, error);
			}
		}
	});
});
