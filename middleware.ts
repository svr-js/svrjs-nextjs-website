import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const url = req.nextUrl.clone();

	if (url.pathname.startsWith("/admin")) {
		const authCookie = req.cookies.get("auth");

		if (!authCookie) {
			url.pathname = "/login";
			return NextResponse.redirect(url);
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/admin/:path*"],
};
