import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/db";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	const { slug } = req.query;
	try {
		const client = await clientPromise;
		const db = client.db();
		const page = await db.collection("pages").findOne({ slug });
		if (page) {
			res.status(200).json(page);
		} else {
			res.status(404).json({ error: "Page not found" });
		}
	} catch (error) {
		res.status(500).json({ error: "Failed to load page" });
	}
}

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
	const { slug } = req.query;
	const { title, content } = req.body;
	try {
		const client = await clientPromise;
		const db = client.db();
		const result = await db
			.collection("pages")
			.updateOne({ slug }, { $set: { title, content } });
		if (result.matchedCount > 0) {
			const updatedPage = await db.collection("pages").findOne({ slug });
			res.status(200).json(updatedPage);
		} else {
			res.status(404).json({ error: "Page not found" });
		}
	} catch (error) {
		res.status(500).json({ error: "Failed to update page" });
	}
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
	const { slug } = req.query;
	try {
		const client = await clientPromise;
		const db = client.db();
		const result = await db.collection("pages").deleteOne({ slug });
		if (result.deletedCount > 0) {
			res.status(200).json({ message: "Page successfully deleted" });
		} else {
			res.status(404).json({ error: "Page not found" });
		}
	} catch (error) {
		res.status(500).json({ error: "Failed to delete page" });
	}
}
