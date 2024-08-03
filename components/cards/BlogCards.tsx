import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const BlogCards = () => {
	return (
		<section className="grid max-w-6xl gap-2 fade-in sm:grid-cols-2 lg:grid-cols-3">
			<div className="fade-in-bottom group h-fit w-fit rounded-lg border delay-300">
				<Link
					href="/blog"
					className="relative block overflow-hidden rounded-lg border"
				>
					<div className="h-full w-full overflow-hidden">
						<Image
							src={"/metadata/svrjs-cover.png"}
							alt={"svrjs-cover"}
							width={500}
							height={50}
							className="h-full w-full object-cover object-center transition-all md:group-hover:scale-[1.01]"
						/>
					</div>
					<div className="flex w-full flex-col justify-between gap-2 rounded-b-lg border-t bg-accent/25 p-4 md:flex-row md:items-start md:p-2 md:group-hover:bg-accent/50">
						<div>
							<p>Svrjs Node Server</p>
							<span className="text-sm text-muted-foreground">
								Description here
							</span>
						</div>
						<p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 duration-300">
							<ExternalLink />
						</p>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default BlogCards;
