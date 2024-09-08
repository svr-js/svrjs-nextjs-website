import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { Collection } from "mongodb";

export async function POST(req: NextRequest) {
  try {
    const { unsubscribeId, captchaToken } = await req.json();

    if (!unsubscribeId || !captchaToken) {
      return NextResponse.json(
        { message: "Unsubscription ID and captcha token are required." },
        { status: 400 }
      );
    }

    // Verify hCaptcha token
    const hcaptchaResponse = await fetch(
      `https://api.hcaptcha.com/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `secret=${process.env.HCAPTCHA_SECRET}&response=${captchaToken}`
      }
    );

    const hcaptchaData = await hcaptchaResponse.json();

    if (!hcaptchaData.success) {
      return NextResponse.json(
        { message: "Captcha verification failed." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("subscribers");

    const result = await collection.deleteOne({ unsubscribeId });

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: "Unsubscribed successfully" });
    } else {
      return NextResponse.json({ message: "Not subscribed" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error subscribing:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
