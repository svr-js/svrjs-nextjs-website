import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import clientPromise from "@/lib/db";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: parseInt(process.env.EMAIL_PORT ? process.env.EMAIL_PORT : "25"),
  secure: Boolean(process.env.EMAIL_SECURE ? process.env.EMAIL_SECURE : false),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = async (
  to: { email: string; unsubscribeId: string }[],
  subject: string,
  html: string
) => {
  for (let i = 0; i < to.length; i++) {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_NEWSLETTER_ADDRESS,
        to: to[i].email,
        subject: subject,
        html: html.replace(
          /\{unsubscribeId\}/g,
          encodeURIComponent(to[i].unsubscribeId)
        )
      });
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }
  }
};

export async function POST(req: NextRequest) {
  try {
    const { subject, html } = await req.json();

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);
    const collection = db.collection("subscribers");

    const subscribers = await collection
      .find({}, { projection: { email: 1, unsubscribeId: 1 } })
      .toArray();

    if (subscribers.length === 0) {
      console.error("No subscribers found in the database.");
      return NextResponse.json(
        { message: "No subscribers found." },
        { status: 404 }
      );
    }

    await sendEmail(subscribers as any[], subject, html ?? "No HTML specified");
    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.error();
  }
}
