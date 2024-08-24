import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
	apiKey: process.env.MAILCHIP_API_KEY,
	server: process.env.MAILCHIP_API_SERVER,
});

export async function POST(request: Request) {
	const { email } = await request.json();

	if (!email) new Response(JSON.stringify({ error: "Email not found" }));

	try {
		const res = await mailchimp.lists.addListMember(
			process.env.MAILCHIP_AUDIENCE_ID!,
			{ email_address: email, status: "subscribed" }
		);

		return new Response(JSON.stringify(res));
	} catch (error: any) {
		return new Response(
			JSON.stringify({ error: JSON.parse(error.response.text) })
		);
	}
}
