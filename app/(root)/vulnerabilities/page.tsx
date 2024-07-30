"use client";

import ReactMarkdown from "react-markdown";
import { vulnerabilities } from "@/constants/guidelines";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Bullet {
	point: string;
}

interface Vulnerabilities {
	_id: string;
	date: string;
	version: string;
	bullets?: Bullet[]; // Make bullets optional
}

const Vulnerabilities = () => {
	const [loading, setLoading] = useState(true);
	const [downloads, setDownloads] = useState<Vulnerabilities[]>([]);
	const [error, setError] = useState("");

	const fetchData = async () => {
		try {
			const response = await fetch("/api/vulnerabilities", {
				method: "GET",
			});
			if (response.ok) {
				const data: Vulnerabilities[] = await response.json();
				setDownloads(data);
				return (document.title = "Vulnerabilities | SVRJS");
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
		fetchData();

		const interval = setInterval(() => {
			fetchData();
		}, 10000);

		return () => clearInterval(interval);
	}, []);
	const reversedDownloads = [...downloads].reverse();

	// initially loading = true
	if (loading) {
		return (
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
		);
	}

	return (
		<section
			id="vulnerabilities"
			className="wrapper container py-24 md:py-28 gap-2 flex flex-col"
		>
			<h1 className="text-3xl md:text-5xl pb-1 md:pb-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
				SVR.JS Vulnerabilities
			</h1>
			<p className="md:text-lg text-muted-foreground text-start mb-6">
				Some older versions of SVR.JS are vulnerable to cyberattacks. It&apos;s
				recommended to update your SVR.JS version to the newest one. If you find
				a security issue with SVR.JS, report it as soon as possible to
				vulnerability-reports[at]svrjs[dot]org. We&apos;ll mitigate that
				vulnerability if it is possible.
			</p>
			{error && <p className="text-red-500">{error}</p>}

			{reversedDownloads.map((download) => (
				<div
					key={download._id}
					className="flex-start flex-col prose dark:prose-invert mb-4 gap-4"
				>
					<h2 className="font-semibold text-3xl -mb-2">{download.version}</h2>
					<ul className="list-disc pl-5">
						{(download.bullets ?? []).map((bullet, index) => (
							<li key={index}>{bullet.point}</li>
						))}
					</ul>
				</div>
			))}
			<div className="prose max-w-full md:prose-lg dark:prose-invert">
				<ReactMarkdown>{vulnerabilities}</ReactMarkdown>
			</div>
		</section>
	);
};

export default Vulnerabilities;
