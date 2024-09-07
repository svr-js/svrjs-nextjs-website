// app/api/delete/[id]/route.ts
import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const client = await clientPromise;
    const db = client.db("downloadsDatabase");
    const collection = db.collection("logs");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: "Log deleted successfully" });
    } else {
      return NextResponse.json({ message: "Log not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete log", error: error },
      { status: 500 }
    );
  }
}
