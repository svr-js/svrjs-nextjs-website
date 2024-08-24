"use client";

import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { Happy_Monkey } from "next/font/google";
import { Mail } from "lucide-react";

const happyMonkey = Happy_Monkey({
	preload: true,
	weight: "400",
	subsets: ["latin"],
});

const Newsletter = () => {
	const [submission, setSubmission] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");
	const [input, setInput] = useState<string>("");
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = input;
		const button = buttonRef.current;

		if (!button || !email) return;

		setSubmission("loading");

		try {
			const response = await fetch("/api/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			if (response.ok) {
				setSubmission("success");
			} else {
				setSubmission("error");
			}
		} catch (error) {
			console.error("Error subscribing:", error);
			setSubmission("error");
		}
	};

	return (
		<section id="newsletter">
			<hr className="w-11/12 mx-auto" />
			<div className="container py-24 md:py-32">
				<h3 className="text-center text-4xl md:text-5xl md:pb-2 text-black font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-white dark:to-neutral-400">
					Join The Newsletter!
				</h3>
				<p className="text-lg text-muted-foreground text-center mt-4 md:mt-2 mb-8">
					Subscribe to our newsletter for updates. we promise no spam emails
					will be sent
				</p>
				<form
					className="relative flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
					aria-label="Email Information"
					onSubmit={handleSubmit}
				>
					<div className="group flex items-center gap-x-4 py-1 pl-4 pr-1 rounded-[9px] bg-[#090D11] hover:bg-[#15141B] shadow-outline-gray hover:shadow-transparent focus-within:bg-[#15141B] focus-within:!shadow-outline-gray-focus transition-all duration-300">
						<Mail className="hidden sm:inline w-6 h-6 text-[#4B4C52] group-focus-within:text-white group-hover:text-white transition-colors duration-300" />
						<Input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Email address"
							required
							type="email"
							className="flex-1 text-white text-sm sm:text-base outline-none placeholder-[#4B4C52] group-focus-within:placeholder-white bg-transparent placeholder:transition-colors placeholder:duration-300 border-none"
						/>
					</div>
					<Button ref={buttonRef} disabled={submission === "loading" || !input}>
						Subscribe
					</Button>
					<div className="pointer-events-none dark:invert -scale-x-100 absolute -bottom-14 right-1/2 md:right-14 inline-flex justify-center items-center gap-1">
						<Image
							src="/curly-arrow.png"
							alt="see here"
							width={35}
							height={35}
						/>
						<span
							className={`mt-10 font-bold text-black -scale-x-100 text-[15px] ${happyMonkey.className}`}
						>
							{submission === "idle" && "Subscribe Now"}
							{submission === "loading" && (
								<p className="text-sm text-center">Subscribing...</p>
							)}
							{submission === "success" && (
								<p className="dark:invert text-sm text-center text-green-500">
									🎉 Subscribed successfully...
								</p>
							)}
							{submission === "error" && (
								<p className="dark:invert text-sm text-center text-red-500">
									😥 Something went wrong...
								</p>
							)}
						</span>
					</div>
				</form>
			</div>
			<hr className="w-11/12 mx-auto" />
		</section>
	);
};

export default Newsletter;
