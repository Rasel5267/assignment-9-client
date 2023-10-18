import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Spin from "../common/Spin";
import { useReviewsQuery } from "@/redux/api/reviewApi";
import { Card, CardContent } from "../ui/card";
import Star from "../common/Star";

const Review = () => {
	const query: Record<string, any> = {};
	const { data, isLoading }: any = useReviewsQuery(query);
	const reviews = data?.slice(0, 3);
	console.log(reviews);
	return (
		<div className="py-20">
			<MaxWidthWrapper>
				<div className="mb-8">
					<h4 className="text-lg text-[#ff7c5b] font-semibold text-center mb-1">
						REVIEW & TESTIMONIALS
					</h4>
					<h2 className="text-4xl text-gray-800 font-bold text-center">
						Top Reviews for VentureVista
					</h2>
				</div>
				{isLoading ? (
					<div className="flex items-center justify-center h-20">
						<Spin />
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{reviews &&
							reviews.map((item: any) => (
								<div key={item.id}>
									<Card>
										<CardContent className="p-0">
											<div className="p-8">
												<Star star={item.rating} />
												<p>{item.comment}</p>
												<h2 className="text-2xl text-center font-bold mt-4 mb-1">
													{item.customer.name}
												</h2>
												<h4 className="text-gray-600 font-semibold text-center">
													Traveler
												</h4>
											</div>
										</CardContent>
									</Card>
								</div>
							))}
					</div>
				)}
			</MaxWidthWrapper>
		</div>
	);
};

export default Review;
