export default async function sitemap() {
	let routes = [
		"",
		"/blog",
		"/changelogs",
		"/contact",
		"/contribute",
		"/downloads",
		"/forum",
		"/mods",
		"/privacy-policy",
		"/tos",
		"/vulnerabilities",
	].map((route) => ({
		url: `https://vimfn.in${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes];
}
