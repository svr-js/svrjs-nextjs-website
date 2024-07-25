import Image from "next/image";
import React from "react";
import Statistics from "./Statistics";

const About = () => {
	return (
		<section id="about" className="container py-2 sm:py-9">
			<div className="bg-accent/50 border rounded-lg py-12">
				<div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
					<Image
						src="/about.svg"
						alt="aboutpicture"
						width={300}
						height={300}
						className="w-[300px] object-contain rounded-lg"
					/>

					<div className="flex flex-col justify-between">
						<div className="pb-6">
							<h2 className="text-3xl md:text-5xl font-bold">
								About{" "}
								<span className="bg-gradient-to-b from-green-300 to-primary text-transparent bg-clip-text">
									SVRJS!
								</span>
							</h2>
							<p className="text-lg text-muted-foreground mt-4">
								Host a webpage, run server-side JavaScript, use mods to expand
								server functionality, or use it as a forward or reverse proxy.
								SVRJS is a web server that runs on top of Node.JS, enabling
								server-side JS on webpages. SVRJS also has an integrated log
								viewer, log highlighter, and user management tool.
							</p>
						</div>
						<Statistics />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
