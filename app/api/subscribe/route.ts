import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import { Collection } from "mongodb";
import dns from "dns/promises";
import { isEmail } from "validator";

export async function POST(req: NextRequest) {
  const generateUnsubscribeID = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 32; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const generateUniqueUnsubscribeID = async (collection: Collection) => {
    const id: string = generateUnsubscribeID();
    const result = await collection
      .find({
        unsubscribeId: id
      })
      .toArray();
    if (result.length > 0) {
      const newId: string = await generateUniqueUnsubscribeID(collection);
      return newId;
    }
    return id;
  };

  try {
    const { email, captchaToken } = await req.json();

    if (!email || !captchaToken) {
      return NextResponse.json(
        { message: "Email and captcha token are required." },
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

    // Check email address
    if (!isEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check email host
    const emailDomainMatch = email.match(/@([^@]+)/);
    const emailDomain = emailDomainMatch ? emailDomainMatch[1] : "";
    let isEmailHostValid = false;
    try {
      const mxRecords = await dns.resolveMx(emailDomain);
      if (mxRecords.length > 0) isEmailHostValid = true;
    } catch (err) {}
    if (!isEmailHostValid) {
      return NextResponse.json(
        { message: "Email domain is misconfigured" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("subscribers");

    // checking if email alr exists
    const existingSubscriber = await collection.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { message: "This email is already subscribed." },
        { status: 409 }
      );
    }

    // saves the email in the db
    await collection.insertOne({
      email,
      subscribedAt: new Date(),
      unsubscribeId: await generateUniqueUnsubscribeID(collection)
    });

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error subscribing:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
