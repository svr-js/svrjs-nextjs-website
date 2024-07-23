import React from "react";
import TestimonialCard from "../cards/testimonialCard";

const testimonials = [
	{
		name: "John Doe",
		role: "CEO, Example Corp.",
		avatar: "avatar1",
		testimonial:
			"Working with this team was a fantastic experience. They developed our website exactly to our specifications, and everything was seamless and well-integrated.",
		rating: 5,
	},
	{
		name: "Jane Smith",
		role: "CEO, CleanCo",
		avatar: "avatar2",
		testimonial:
			"We're thrilled with the website. It's simple, clean, and has significantly boosted our sales. The developers did an excellent job.",
		rating: 4,
	},
	{
		name: "Sam Green",
		role: "Web Developer",
		avatar: "avatar3",
		testimonial:
			"Collaborating with this team to build a SaaS-integrated website was a perfect experience. I look forward to working with them again.",
		rating: 5,
	},
	{
		name: "Chris Brown",
		role: "Web Coder",
		avatar: "avatar4",
		testimonial:
			"The team's understanding of our needs and their ability to provide fitting solutions was impressive. Their support and guidance were invaluable.",
		rating: 4,
	},
	{
		name: "Alex Johnson",
		avatar: "avatar5",
		testimonial:
			"Exceptional service and outstanding results. They consistently deliver on time and within budget, making them our go-to partner for all our projects.",
		rating: 5,
	},
	{
		name: "Patricia Taylor",
		role: "Web Developer",
		avatar: "avatar6",
		testimonial:
			"It was great to work with them. I needed a design for a SaaS project, and it was delivered within 2 days.",
		rating: 4,
	},
	{
		name: "Emily Davis",
		role: "UX Designer, Creative Agency",
		avatar: "avatar7",
		testimonial:
			"Collaborating with them has been a pleasure. Their creativity and user-centric approach have significantly enhanced our product's usability.",
		rating: 5,
	},
	{
		name: "Michael Lee",
		avatar: "avatar8",
		testimonial:
			"They have a keen understanding of our business needs and consistently deliver top-notch solutions. Their reliability and efficiency are commendable.",
		rating: 5,
	},
	{
		name: "Sarah Wilson",
		avatar: "avatar9",
		testimonial:
			"Their dedication to client satisfaction is evident in everything they do. We've seen remarkable improvements in our processes thanks to their expertise.",
		rating: 4,
	},
];

const Testimonials = () => {
	return (
		<section className="mx-auto flex w-full max-w-7xl flex-col pt-12 md:pt-24">
			<div className="flex flex-row items-center justify-center space-x-1">
				<span className="text-white/50 text-xs lg:text-base">Testimonials</span>
			</div>
			<h1 className="text-3xl md:text-5xl font-bold text-center">
				Hear it from{" "}
				<span className="bg-gradient-to-b from-green-200 to-primary text-transparent bg-clip-text">
					our users
				</span>
			</h1>

			<div className="columns-1 gap-5 md:columns-2 lg:columns-3 py-6 mt-6">
				{testimonials.map((testimonial, idx) => (
					<TestimonialCard
						avatar={testimonial.avatar}
						name={testimonial.name}
						role={testimonial.role}
						testimonial={testimonial.testimonial}
						rating={testimonial.rating}
						key={idx}
					/>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
