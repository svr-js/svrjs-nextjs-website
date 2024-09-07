import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

// Force the API to use SSR instead of static generation
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (username === adminUsername && password === adminPassword) {
    const cookie = serialize("auth", "authenticated", {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 // 1 day
    });

    return new NextResponse(JSON.stringify({ message: "Login successful" }), {
      headers: {
        "Set-Cookie": cookie,
        "Content-Type": "application/json"
      }
    });
  }

  return new NextResponse(JSON.stringify({ message: "Invalid credentials" }), {
    status: 401,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
