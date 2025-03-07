import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export async function PUT(
  request: Request,
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const { id } = params;
  const body = await request.json();
  const { fileName, version, downloadLink, fileSize } = body;

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const result = await db.collection("mods").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          date: new Date().toISOString().split("T")[0],
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
