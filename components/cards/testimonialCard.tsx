import Image from "next/image";
import React from "react";

interface TestimonialCard {
	avatar: string;
	name: string;
	role?: string;
	testimonial: string;
	rating: number;
}

const TestimonialCard = ({
	avatar,
	name,
	role,
	testimonial,
	rating,
}: TestimonialCard) => {
	return (
		<li className="inline-block w-full">
			<div className="bg-[#1c1c1c] mx-auto mb-5 flex w-full cursor-default flex-col gap-4 rounded-2xl px-[30px] py-6 shadow-md transition-all hover:scale-[103%]">
				<div className="flex flex-row items-center gap-3">
					<div>
						<Image
							src={`/testimonials/${avatar}.webp`}
							alt="avatar1"
							width={40}
							height={40}
							className="rounded-full"
						/>
					</div>
					<div className="space-y-1">
						<div className="flex items-center gap-1">
							<div className="small-semibold text-white">{name}</div>
						</div>
						<div className="small-regular text-white-800">{role}</div>
					</div>
				</div>
				<p className="body-regular text-white">{testimonial}</p>
				<div className="hue-rotate-90 text-lg">
					{/* <Image
						src="/testimonials/stars.svg"
						alt="star"
						width={120}
						height={120}
						className="object-cover"
					/> */}
					{"⭐".repeat(rating)}
				</div>
			</div>
		</li>
	);
};

export default TestimonialCard;
