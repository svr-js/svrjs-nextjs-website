"use client";
import Iconss from "@/components/ui/icons";
import { Mail, Send, WebhookIcon, Bug, Shield } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactFormSchema } from "@/lib/validations/validation";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const ContactUs = () => {
	const { toast } = useToast();
	const [loading, setLoading] = useState(false);

	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof contactFormSchema>) {
		setLoading(true);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify(values),
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});

			if (res.ok) {
				form.reset();
				toast({
					description: "Your message has been sent.",
				});
				setLoading(false);
			} else {
				toast({
					title: "Uh oh! Something went wrong.",
					variant: "destructive",
				});
				setLoading(false);
			}
		} catch (error) {
			console.error(error);
			toast({
				title: "Uh oh! Something went wrong.",
				variant: "destructive",
			});
			setLoading(false);
		}

		console.log(values);
	}

	return (
		<>
			<div className="flex items-center justify-center py-16 md:py-24 w-full transition-all duration-300">
				<h1 className="text-4xl md:text-6xl tracking-tight font-bold uppercase">
					Contact Us
				</h1>
			</div>

			<section id="contact" className="w-full">
				<div className="flex max-md:flex-center flex-col md:flex-row justify-between mx-auto p-5 max-w-4xl">
					{/* Left contact page */}
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-4 pb-8 mb-4 max-w-sm w-full"
						>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input placeholder="Your Name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input type="email" placeholder="Your Email" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="message"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Message</FormLabel>
										<FormControl>
											<Textarea placeholder="Your Message" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								variant={"default"}
								className="w-full"
								disabled={loading}
							>
								<div className="flex items-center justify-center">
									<span className="tracking-tight font-[600px]">SEND</span>
									<Send className="ml-2 w-5 h-5" />
								</div>
							</Button>
						</form>
					</Form>

					{/* Right contact page */}
					<div className="max-w-xl mt-3 md:ml-5">
						<ul className="ml-2 max-md:flex-center flex-col pr-5">
							<li className="mb-2 text-[#aaa] flex items-center">
								<WebhookIcon className="mr-2" size={24} />
								<span>
									<a
										href="mailto:#"
										title="Send me an email"
										className="opacity-70 hover:opacity-100 transition duration-200"
									>
										webmaster@svrjs.org
									</a>
								</span>
							</li>
							<li className="mb-2 text-[#aaa] flex items-center">
								<Bug className="mr-2" size={24} />
								<span>
									<a
										href="mailto:#"
										title="Send me an email"
										className="opacity-70 hover:opacity-100 transition duration-200"
									>
										bugreports@svrjs.org
									</a>
								</span>
							</li>
							<li className="mb-2 text-[#aaa] flex items-center">
								<Shield className="mr-2" size={24} />
								<span>
									<a
										href="mailto:#"
										title="Send me an email"
										className="opacity-70 hover:opacity-100 transition duration-200"
									>
										vulnerability-reports@svrjs.org
									</a>
								</span>
							</li>
							<li className="mb-2 text-[#aaa] flex items-center">
								<Mail className="mr-2" size={24} />
								<span>
									<a
										href="mailto:#"
										title="Send me an email"
										className="opacity-70 hover:opacity-100 transition duration-200"
									>
										support@svrjs.org
									</a>
								</span>
							</li>
						</ul>
						<hr className="border-t border-white opacity-60 my-4" />
						<ul className="flex justify-center space-x-3 mb-6">
							<Iconss />
						</ul>
						<hr className="border-t border-white opacity-60 my-4" />
						<div className="text-center text-[#555] text-sm font-light">
							© ALL RIGHTS RESERVED SVRJS
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactUs;
