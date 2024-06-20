"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();

		const response = await fetch("/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});

		if (response.ok) {
			router.push("/admin");
		} else {
			const data = await response.json();
			setError(data.message);
		}
	};

	return (
		<div className="max-w-xl h-screen flex justify-center bg-gray-900 flex-col container">
			<h1 className="text-3xl font-bold mb-4">SVRJS ADMIN PANEL</h1>
			{error && <p className="text-red-500 mb-4">{error}</p>}
			<form onSubmit={handleLogin}>
				<div className="mb-4">
					<input
						type="text"
						id="username"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="mt-1 block w-full bg-gray-800 rounded-full px-5 py-2 shadow-sm p-2"
					/>
				</div>
				<div className="mb-4">
					<input
						type="password"
						placeholder="Password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="mt-1 block w-full bg-gray-800 rounded-full px-5 py-2 shadow-sm"
					/>
				</div>
				<Button type="submit" className="w-full rounded-full" size={"lg"}>
					Login
				</Button>
			</form>
		</div>
	);
};

export default LoginPage;
