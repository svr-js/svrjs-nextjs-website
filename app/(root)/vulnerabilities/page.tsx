"use client";

import ReactMarkdown from "react-markdown";
import { VULNERABILITY } from "@/constants/guidelines";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Bullet {
	point: string;
}

interface Vulnerabilities {
	_id: string;
	version: string;
	bullets?: Bullet[]; // Make bullets optional
}

interface ModsVulnerability {
	_id: string;
	title: string;
	slug: string;
	content: string;
	vulnerabilities: string;
}

const Vulnerabilities = () => {
	const [loading, setLoading] = useState(true);
	const [downloads, setDownloads] = useState<Vulnerabilities[]>([]);
	const [mods, setMods] = useState<ModsVulnerability[]>([]);
	const [error, setError] = useState("");

	const fetchData = async () => {
		try {
			const response = await fetch("/api/vulnerabilities", {
				method: "GET",
			});
			if (response.ok) {
				const data: Vulnerabilities[] = await response.json();
				setDownloads(data);
				document.title = "Vulnerabilities | SVRJS";
			} else {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error: any) {
			setError(error.message || "Failed to fetch downloads");
		} finally {
			setLoading(false);
		}
	};

	const fetchMods = async () => {
		try {
			const response = await fetch(`/api/mdx/pages`, {
				method: "GET",
			});
			if (response.ok) {
				const data: ModsVulnerability[] = await response.json();
				// Filter out entries where vulnerabilities is undefined or an empty string
				const filteredMods = data.filter(
					(mod) => mod.vulnerabilities && mod.vulnerabilities.trim() !== ""
				);
				setMods(filteredMods);
				document.title = "Vulnerabilities | SVRJS";
			} else {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
		} catch (error: any) {
			setError(error.message || "Failed to fetch vulnerabilities");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
		fetchMods();
		const interval = setInterval(() => {
			fetchData();
			fetchMods();
		}, 10000);

		return () => clearInterval(interval);
	}, []);

	const reversedDownloads = [...downloads].reverse();
	const reversedMods = [...mods].reverse();

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
				<ReactMarkdown>{VULNERABILITY}</ReactMarkdown>
			</div>

			{/* Section with MODS content */}
			{reversedMods.map((mod) => (
				<div
					key={mod._id}
					className="flex-start flex-col prose dark:prose-invert my-6 md:my-9 gap-4"
				>
					<h2 className="text-3xl py-1 md:py-2 font-bold text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400 -mb-1">
						{mod.title}
					</h2>
					{mod.vulnerabilities && (
						<div className="prose max-w-full md:prose-lg dark:prose-invert">
							<ReactMarkdown>{mod.vulnerabilities}</ReactMarkdown>
						</div>
					)}
				</div>
			))}
		</section>
	);
};

export default Vulnerabilities;
