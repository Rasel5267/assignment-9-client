import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Card, CardContent } from "../ui/card";
import { useDestinationsQuery } from "@/redux/api/destinationApi";
import Link from "next/link";
import Spin from "../common/Spin";

const Destination = () => {
	const query: Record<string, any> = {};
	const { data, isLoading }: any = useDestinationsQuery(query);
	const destination = data?.slice(0, 4);
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
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						{destination &&
							destination.map((item: any) => (
								<div key={item.id}>
									<Card>
										<CardContent className="p-0 relative">
											<div className="relative">
												<Image
													src="/card.jpeg"
													alt={item.destinationName}
													width={600}
													height={600}
													priority
													style={{
														borderRadius: "8px",
														display: "block",
													}}
												/>
												<div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
											</div>
											<div className="absolute bottom-5 left-4">
												<Link
													href={`/destinations/${item.id}`}
													className="text-2xl text-white font-bold"
												>
													{item.destinationName}
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
