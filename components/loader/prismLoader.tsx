"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-php";
// Import the languages and their dependencies
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-php";
// Import additional dependencies for Handlebars if needed
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-handlebars";

export default function PrismLoader() {
	useEffect(() => {
		if (Prism) {
			Prism.highlightAll();
		}
	}, []);

	return null;
}
