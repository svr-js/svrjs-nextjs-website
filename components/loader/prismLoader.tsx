"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-php";
import "prismjs/components/prism-markup-templating";

export default function PrismLoader() {
	useEffect(() => {
		Prism.highlightAll();
	}, []);

	return null;
}
