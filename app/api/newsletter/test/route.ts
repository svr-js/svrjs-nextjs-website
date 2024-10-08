import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: parseInt(process.env.EMAIL_PORT ? process.env.EMAIL_PORT : "25"),
  secure: Boolean(process.env.EMAIL_SECURE ? process.env.EMAIL_SECURE : false),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = async (to: string[], subject: string, html: string) => {
  for (let i = 0; i < to.length; i++) {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_NEWSLETTER_ADDRESS,
        to: to[i],
        subject: subject,
        html: html
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

    const testEmails = process.env.EMAIL_NEWSLETTER_TESTDEST
      ? process.env.EMAIL_NEWSLETTER_TESTDEST.split(",")
      : [];

    if (testEmails.length === 0) {
      console.error("No email addresses provided.");
      return NextResponse.json(
        { message: "No email addresses provided." },
        { status: 404 }
      );
    }

    await sendEmail(testEmails, subject, html);
    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.error();
  }
}
