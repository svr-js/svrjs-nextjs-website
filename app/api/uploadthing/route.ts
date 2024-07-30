import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// Force the API to use SSR instead of static generation
export const dynamic = "force-dynamic";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
