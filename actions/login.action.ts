"use server";

export function CheckLoggedIn(username: string, password: string) {
	if (
		username === process.env.ADMIN_USERNAME &&
		password === process.env.ADMIN_PASSWORD
	) {
	}
}
