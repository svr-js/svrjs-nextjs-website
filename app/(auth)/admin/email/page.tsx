"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";

interface Subscriber {
	email: string;
	subscribedAt: string;
}

const EmailPage = () => {
	const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const { toast } = useToast();

	useEffect(() => {
		// Function to fetch subscribers data
		const fetchSubscribers = async () => {
			try {
				const res = await fetch(
					`/api/newsletter/subscriber?page=${currentPage}`
				);
				const data = await res.json();
				setSubscribers(data.subscribers);
				setTotalPages(data.totalPages);
			} catch (error) {
				toast({
					title: "Error fetching subscribers",
					description: `${error}`,
				});
			}
		};

		// Fetch data initially
		fetchSubscribers();

		// Set up interval to fetch data every 10 seconds
		const intervalId = setInterval(fetchSubscribers, 10000);

		// Clear interval on component unmount
		return () => clearInterval(intervalId);
	}, [currentPage, toast]);

	return (
		<section id="downloads-page" className="wrapper container">
			<h1 className="text-3xl md:text-4xl font-bold py-6">Newsletter Emails</h1>
			<Link href="/email-editor">
				<Button>Create a new email</Button>
			</Link>
			<section id="downloads-list" className="py-8">
				<h2 className="text-2xl font-semibold">Newsletter Subscribers</h2>
				<p className="text-muted-foreground">
					Total subscribers: {subscribers.length}
				</p>
				<Table className="w-full mt-4 border-muted">
					<TableHeader>
						<TableRow>
							<TableHead className="border-b px-4 py-2">Email</TableHead>
							<TableHead className="border-b px-4 py-2">
								Subscribed At
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{subscribers.map((subscriber, idx) => (
							<TableRow key={idx}>
								<TableCell className="border-b px-4 py-2">
									{subscriber.email}
								</TableCell>
								<TableCell className="border-b px-4 py-2">
									{new Date(subscriber.subscribedAt).toLocaleDateString()}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<div className="flex-center mt-12">
					{totalPages > 1 && (
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									{currentPage > 1 && (
										<PaginationPrevious
											onClick={() => setCurrentPage(currentPage - 1)}
										/>
									)}
								</PaginationItem>
								{Array.from({ length: totalPages }).map((_, i) => (
									<PaginationItem key={i}>
										<PaginationLink
											isActive={currentPage === i + 1}
											onClick={() => setCurrentPage(i + 1)}
										>
											{i + 1}
										</PaginationLink>
									</PaginationItem>
								))}
								<PaginationItem>
									{currentPage < totalPages && (
										<PaginationNext
											onClick={() => setCurrentPage(currentPage + 1)}
										/>
									)}
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					)}
				</div>
			</section>
		</section>
	);
};

export default EmailPage;
