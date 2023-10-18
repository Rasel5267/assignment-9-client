import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Card, CardContent } from "../ui/card";
import { useDestinationsQuery } from "@/redux/api/destinationApi";
import Link from "next/link";
import Spin from "../common/Spin";
import { buttonVariants } from "../ui/button";

const Destination = () => {
	const query: Record<string, any> = {};
	const { data, isLoading }: any = useDestinationsQuery(query);
	let destinations;
	if (data !== undefined) {
		destinations = data.destinations;
	}
	const destination = destinations?.slice(0, 4);
	return (
		<div className="py-20 bg-white">
			<MaxWidthWrapper>
				<div className="mb-8">
					<h4 className="text-lg text-[#ff7c5b] font-semibold text-center mb-1">
						CHOOSE YOUR PLACE
					</h4>
					<h2 className="text-4xl text-gray-800 font-bold text-center">
						Popular Destinations
					</h2>
				</div>
				{isLoading ? (
					<div className="flex items-center justify-center h-20">
						<Spin />
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{destination &&
							destination.map((item: any) => (
								<div key={item.id}>
									<Card>
										<CardContent className="p-0">
											<Image
												src="/blog.jpg"
												alt={item.destinationName}
												width={600}
												height={600}
												priority
												style={{
													borderRadius: "8px 8px 0 0",
													display: "block",
												}}
											/>
											<div className="p-4">
												<h2 className="text-2xl font-bold mb-4">
													{item.destinationName}
												</h2>
												<Link
													href={`/destinations/${item.id}`}
													className={buttonVariants()}
												>
													See Details
												</Link>
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

export default Destination;
