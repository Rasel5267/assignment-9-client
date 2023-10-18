import { useTourPackagesQuery } from "@/redux/api/tourPackageApi";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import Spin from "../common/Spin";

const Adventure = () => {
	const query: Record<string, any> = {};
	const { data, isLoading }: any = useTourPackagesQuery(query);
	const tourPackages = data?.tourPackages.slice(0, 4);

	return (
		<div className="py-20 bg-[#f5f6f6]">
			<MaxWidthWrapper>
				<div className="mb-8">
					<h4 className="text-lg text-[#ff7c5b] font-semibold text-center mb-1">
						MODERN & BEAUTIFUL
					</h4>
					<h2 className="text-4xl text-gray-800 font-bold text-center">
						Our Most Popular Adventures
					</h2>
				</div>
				{isLoading ? (
					<div className="flex items-center justify-center h-20">
						<Spin />
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{tourPackages &&
							tourPackages.map((item: any) => (
								<div key={item.id}>
									<Card>
										<CardContent className="p-0">
											<Image
												src="/card.jpeg"
												alt={item.packageName}
												width={600}
												height={600}
												priority
												style={{
													borderRadius: "8px 8px 0 0",
												}}
											/>
											<div className="py-4 px-2">
												<h3 className="text-lg text-gray-800 font-bold">
													{item.packageName}
												</h3>
												<p>
													<span className="text-[#ff7c5b] font-bold">
														${item.price}
													</span>
													<span className="text-gray-600">
														{" "}
														/ Per person
													</span>
												</p>
												<div className="bg-[#f5f6f6] text-gray-500 p-2 my-2 flex items-center justify-center space-x-2">
													<div className="flex items-center justify-center space-x-3">
														<Clock size={20} />
														<span>
															{item.duration} days
														</span>
													</div>
													<p>|</p>
													<div className="flex items-center justify-center space-x-3">
														<MapPin size={20} />
														<span>
															{
																item.destination
																	.destinationName
															}
														</span>
													</div>
												</div>
												<Link
													href={`/tourPackage/${item.id}`}
													className={cn(
														buttonVariants(),
														"mt-3"
													)}
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

export default Adventure;
