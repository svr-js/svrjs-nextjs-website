"use client";

import { Editor } from "@monaco-editor/react";
import { EXAMPLE_A1 } from "@/constants";

interface CodeEditorProps {
	onChange: (value: string) => void;
}

const CodeEditor = ({ onChange }: CodeEditorProps) => {
	return (
		<div className="bg-white w-full max-w-full">
			<Editor
				options={{
					minimap: {
						enabled: false,
					},
				}}
				height="75vh"
				theme="vs-dark"
				defaultValue={EXAMPLE_A1}
				language={"html"}
				onChange={(newValue) => onChange(newValue || "")}
				className="bg-zinc-950 text-white"
			/>
		</div>
	);
};

export default CodeEditor;
