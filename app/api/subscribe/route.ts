import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/db";

export async function POST(req: NextRequest) {
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
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: `secret=${process.env.HCAPTCHA_SECRET}&response=${captchaToken}`,
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
		const db = client.db("newsletter");
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
		await collection.insertOne({ email, subscribedAt: new Date() });

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
