import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";

interface Subscriber {
  email: string;
  subscribedAt: Date;
}

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1", 10);
    const limit = 10;
    const skip = (page - 1) * limit;

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("subscribers");

    // Pagination
    const documents = await collection.find().skip(skip).limit(limit).toArray();

    const subscribers: Subscriber[] = documents.map((doc) => ({
      email: doc.email,
      subscribedAt:
        doc.subscribedAt instanceof Date
          ? doc.subscribedAt
          : new Date(doc.subscribedAt)
    }));

    const totalSubscribers = await collection.countDocuments();

    return NextResponse.json({
      subscribers,
      totalSubscribers,
      totalPages: Math.ceil(totalSubscribers / limit)
    });
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
