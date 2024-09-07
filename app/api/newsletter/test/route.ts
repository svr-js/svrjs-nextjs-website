import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email", // Replace with your SMTP host
  // service: "gmail", // Uncomment if using Gmail
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = async (to: string[], subject: string, html: string) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to.join(", "),
      subject: subject,
      html: html
    });
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export async function POST(req: NextRequest) {
  try {
    const { subject, html } = await req.json();

    // add ur email here
    const testEmails = [
      "abhijitbhattacharjee333@gmail.com",
      "test2@example.com"
    ];

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
