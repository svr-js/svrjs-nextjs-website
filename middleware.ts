import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
	const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

	if (!token) {
		if (req.nextUrl.pathname.startsWith("/admin")) {
			const url = req.nextUrl.clone();
			url.pathname = "/login";
			return NextResponse.redirect(url);
		} else if (
			req.nextUrl.pathname.startsWith("/api/mdx/pages") &&
			req.method != "GET"
		) {
			return NextResponse.json({ error: "Login required" }, { status: 401 });
		} else if (req.nextUrl.pathname.startsWith("/api")) {
			return NextResponse.json({ error: "Login required" }, { status: 401 });
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/admin/:path*",
		"/api/delete/downloads/[id]",
		"/api/delete/logs/[id]",
		"/api/delete/mods/[id]",
		"/api/delete/vulnerability/[id]",
		"/api/mdx/pages",
		"/api/mdx/pages/[slug]",
		"/api/upload",
		"/api/uploadlogs",
		"/api/uploadmods",
		"/api/uploadthing",
		"/api/uploadvulnerabilities",
		"/email-editor",
	],
};
