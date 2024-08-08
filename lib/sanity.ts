import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const config = {
	apiVersion: "2023-08-08",
	dataset: "production",
	projectId: `${process.env.SANITY_PROJECT_ID}`,
	useCdn: false, // ensure fresh data
};

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
	return builder.image(source);
}
