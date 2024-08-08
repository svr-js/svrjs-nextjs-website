import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	apiVersion: "2023-05-03",
	dataset: "production",
	projectId: `${process.env.SANITY_PROJECT_ID}`,
	useCdn: false, // basically enable this for faster loading time
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
	return builder.image(source);
}