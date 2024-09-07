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

  const { title, content, vulnerabilities } = await req.json();

  if (
    typeof title !== "string" ||
    typeof content !== "string" ||
    typeof vulnerabilities !== "string"
  ) {
    return NextResponse.json(
      { message: "Invalid title, content, or vulnerabilities" },
      { status: 400 }
    );
  }

  try {
    const result = await db.collection("pages").findOneAndUpdate(
      { slug },
      { $set: { title, content, vulnerabilities } },
      { returnDocument: "after" } // Updated option
    );

    if (result?.value) {
      const serializedResult = {
        ...result.value,
        _id: result.value._id.toString() // Convert ObjectId to string
      };
      return NextResponse.json(serializedResult, { status: 200 });
    } else {
      return NextResponse.json({ message: "Page not found" }, { status: 404 });
    }
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
