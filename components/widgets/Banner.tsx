"use client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";

interface BannerProps {
	className?: string;
	title?: string;
	announcement: string;
	link?: string;
	buttonText?: string;
	closeButton?: boolean;
	icon?: React.ReactNode;
}

export default function Banner({
	className,
	title,
	announcement,
	link,
	buttonText = "Learn More",
	closeButton = true,
	icon,
}: BannerProps) {
	const [isBannerVisible, setIsBannerVisible] = useState(true);

	const handleClose = () => {
		setIsBannerVisible(false);
	};

	return (
		isBannerVisible && (
			<div
				className={cn(
					"relative isolate flex flex-col sm:flex-row items-start sm:items-center gap-y-4 sm:gap-y-0 sm:gap-x-6 overflow-hidden bg-gray-50 px-4 sm:px-6 py-3 sm:py-2 border-b",
					className
				)}
			>
				<div
					aria-hidden="true"
					className="absolute left-[calc(50%-20rem)] sm:left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
				>
					<div
						style={{
							clipPath:
								"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
						}}
						className="aspect-[577/310] w-[20rem] sm:w-[36.0625rem] bg-gradient-to-r from-primary to-yellow-200 opacity-30"
					/>
				</div>
				<div
					aria-hidden="true"
					className="absolute left-[calc(50%+16rem)] sm:left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
				>
					<div
						style={{
							clipPath:
								"polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
						}}
						className="aspect-[577/310] w-[20rem] sm:w-[36.0625rem] bg-gradient-to-r from-primary to-[#9089fc] opacity-30"
					/>
				</div>
				<div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-4 gap-y-2 w-full">
					{icon && <span className="flex-none sm:block hidden">{icon}</span>}
					<div className="flex items-start sm:items-center flex-col sm:flex-row gap-y-2 sm:gap-y-0 w-full">
						<p className="text-sm sm:leading-6 leading-tight text-gray-900">
							{title && (
								<>
									<strong className="font-semibold sm:leading-tight leading-normal block sm:inline">
										{title}
									</strong>
									<svg
										viewBox="0 0 2 2"
										aria-hidden="true"
										className="mx-2 hidden sm:inline h-0.5 w-0.5 fill-current"
									>
										<circle r={1} cx={1} cy={1} />
									</svg>
								</>
							)}
							{announcement}
						</p>
						{link && (
							<a
								href={link}
								className="mt-2 sm:mt-0 flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 w-auto"
							>
								{buttonText} <span aria-hidden="true">&rarr;</span>
							</a>
						)}
					</div>
				</div>
				{closeButton && (
					<div className="mt-2 sm:mt-0 flex self-start sm:self-auto sm:flex-1 justify-end">
						<button
							type="button"
							className="-m-2 sm:-m-3 p-2 sm:p-3 focus-visible:outline-offset-[-4px]"
							onClick={handleClose}
						>
							<span className="sr-only">Dismiss</span>
							<X aria-hidden="true" className="h-5 w-5 text-gray-900" />
						</button>
					</div>
				)}
			</div>
		)
	);
}
