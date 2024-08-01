"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { CHANGE_LOGS } from "@/constants/guidelines";
import { Skeleton } from "@/components/ui/skeleton";

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
	const [loading, setLoading] = useState(true);

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
		} finally {
			setLoading(false);
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

	if (loading) {
		return (
			<>
				<head>
					<title>Change Logs - SVRJS</title>
				</head>
				<section className="wrapper container py-24 md:py-28 gap-4 flex flex-col">
					<div className="mb-3">
						<Skeleton className="w-[400px] h-[50px] rounded-md" />
					</div>
					<div className="flex flex-col gap-4">
						<Skeleton className="w-[300px] h-[30px] rounded-md" />
						<Skeleton className="w-[200px] h-[20px] rounded-md" />
						<Skeleton className="w-[200px] h-[20px] rounded-md" />
						<Skeleton className="w-[200px] h-[20px] rounded-md" />
					</div>
				</section>
			</>
		);
	}

	return (
		<section
			id="logs"
			className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
		>
			<h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
				Server LOGS
			</h1>
			<p className="md:text-lg text-muted-foreground text-start mb-6">
				Get all the latest version of SVRJS download and compiled Files here!
			</p>
			{error && <p className="text-red-500">{error}</p>}

			{reversedDownloads.map((download) => (
				<div
					key={download._id}
					className="flex-start prose max-w-full md:prose-lg dark:prose-invert flex-col mb-4"
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
