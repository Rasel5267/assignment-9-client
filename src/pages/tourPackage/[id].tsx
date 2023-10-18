import Spin from "@/components/common/Spin";
import Layout from "@/components/common/ui/Layout";
import { useTourPackageQuery } from "@/redux/api/tourPackageApi";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Star from "@/components/common/Star";
import { Clock, MapPin, Sparkle, UserCircle2 } from "lucide-react";

const TourPackageDetails: NextPageWithLayout = () => {
	const router = useRouter();
	const id = router.query.id;
	const { data, isLoading } = useTourPackageQuery(id);

	const calculateAverageRating = (reviews: any) => {
		if (!reviews || reviews.length === 0) {
			return 0;
		}

		const totalRating = reviews.reduce(
			(sum: any, review: any) => sum + review.rating,
			0
		);
		return totalRating / reviews.length;
	};

	return (
		<>
			<Head>
				<title>VentureVista | Tour Package Details</title>
			</Head>
			{isLoading ? (
				<div className="flex items-center justify-center h-screen">
					<Spin />
				</div>
			) : (
				<div className="my-8">
					<MaxWidthWrapper>
						<Image
							src="/destination-big.jpg"
							alt="hero-image"
							sizes="100vw"
							priority
							style={{
								width: "100%",
								height: "auto",
							}}
							width={500}
							height={400}
						/>
						<div className="my-4">
							<Star
								star={calculateAverageRating(data.reviews)}
								reviews={data.reviews.length}
								style="flex items-center space-x-1 text-[#ffab01]"
								parent="flex items-center space-x-4"
							/>
							<h2 className="text-4xl text-gray-800 font-bold mt-2">
								{data?.packageName}
							</h2>
							<div className="flex items-center my-4 space-x-4">
								<p>
									<strong>Number Of Seats:</strong>{" "}
									{data.totalCapacity}
								</p>
								<p>
									<strong>Booked Seats:</strong>{" "}
									{data.bookedSpots}
								</p>
								<p>
									<strong>Available Seats:</strong>{" "}
									{data.availableSpots}
								</p>
							</div>
							<div className="bg-[#f5f6f6] text-gray-500 p-2 my-2 flex items-center justify-center space-x-2 max-w-full sm:max-w-[60%] md:max-w-[50%]">
								<div className="flex items-center justify-center space-x-3">
									<Clock size={20} />
									<span>{data.duration} days</span>
								</div>
								<p>|</p>
								<div className="flex items-center justify-center space-x-3">
									<MapPin size={20} />
									<span>
										{data.destination.destinationName}
									</span>
								</div>
							</div>
							<p className="text-gray-600 my-4">
								{data?.description}
							</p>
							<div>
								<h2 className="text-2xl font-bold mb-3">
									Activities
								</h2>
								{data.activities.map(
									(item: string, index: any) => (
										<div
											key={index}
											className="flex items-center space-x-3 mb-2"
										>
											<Sparkle size={20} />
											<p>{item}</p>
										</div>
									)
								)}
							</div>
							<div className="mt-8">
								<h2 className="text-2xl font-bold mb-3">
									Reviews
								</h2>
								{data.reviews.map((review: any, index: any) => (
									<div
										className="flex items-center space-x-4 mb-4"
										key={index}
									>
										<div className="w-12 h-10 lg:h-11 flex items-center justify-center bg-gray-700 rounded-full p-2">
											<UserCircle2
												size={24}
												color="#fff"
											/>
										</div>
										<div className="mb-1">
											<h4 className="text-lg font-bold mb-1">
												{review.customer?.name}
											</h4>
											<p>{review.comment}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</MaxWidthWrapper>
				</div>
			)}
		</>
	);
};

TourPackageDetails.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default TourPackageDetails;
