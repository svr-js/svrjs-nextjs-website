"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { CHANGE_LOGS } from "@/constants/guidelines";

interface Bullet {
	point: string;
}

interface LOGS {
	_id: string;
	date: string;
	version: string;
	bullets?: Bullet[]; // Make bullets optional
}

const LogsPage: React.FC = () => {
	const [downloads, setDownloads] = useState<LOGS[]>([]);
	const [error, setError] = useState("");

	const fetchDownloads = async () => {
		try {
			const response = await fetch("/api/logs", {
				method: "GET",
			});
			if (response.ok) {
				const data: LOGS[] = await response.json();
				setDownloads(data);
			} else {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error: any) {
			setError(error.message || "Failed to fetch downloads");
		}
	};

	useEffect(() => {
		fetchDownloads();

		const interval = setInterval(() => {
			fetchDownloads();
		}, 10000);

		return () => clearInterval(interval);
	}, []);
	const reversedDownloads = [...downloads].reverse();

	return (
		<section
			id="logs"
			className="wrapper container py-24 md:py-28 gap-4 flex flex-col"
		>
			<h1 className="text-3xl md:text-5xl md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
				Server LOGS
			</h1>
			<p className="md:text-lg text-muted-foreground text-start mb-4">
				Get all the latest version of SVRJS download and compiled Files here!
			</p>
			{error && <p className="text-red-500">{error}</p>}

			{reversedDownloads.map((download) => (
				<div
					key={download._id}
					className="flex-start prose max-w-full md:prose-lg dark:prose-invert flex-col"
				>
					<h2 className="font-bold text-3xl">{download.version}</h2>
					<span className="font-medium italic">{download.date}</span>
					<ul className="list-disc pl-5">
						{(download.bullets ?? []).map((bullet, index) => (
							<li key={index}>{bullet.point}</li>
						))}
					</ul>
				</div>
			))}
			<div className="prose max-w-full md:prose-lg dark:prose-invert">
				<ReactMarkdown>{CHANGE_LOGS}</ReactMarkdown>
			</div>
		</section>
	);
};

export default LogsPage;
