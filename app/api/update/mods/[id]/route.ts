import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();
  const { fileName, version, downloadLink, fileSize } = body;

  try {
    const client = await clientPromise;
    const db = client.db("downloadsDatabase");

    const result = await db.collection("mods").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          fileName,
          version,
          downloadLink,
          fileSize
        }
      }
    );

    if (result.modifiedCount > 0) {
      revalidatePath("/mods");
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({
        success: false,
        message: "No document updated"
      });
    }
  } catch (error) {
    console.error("Update failed", error);
    return NextResponse.json({
      success: false,
      message: "Failed to update mod"
    });
  }
}
