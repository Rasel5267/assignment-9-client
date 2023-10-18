import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Spin from "@/components/common/Spin";
import { NextPageWithLayout } from "./_app";
import { ReactElement, useState } from "react";
import Layout from "@/components/common/ui/Layout";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTourPackagesQuery } from "@/redux/api/tourPackageApi";
import { useDestinationsQuery } from "@/redux/api/destinationApi";
import TourPackageCard from "@/components/common/ui/TourPackageCard";
import { useDebounced } from "@/redux/hooks";
import { Input } from "@/components/ui/input";

const PackagePage: NextPageWithLayout = () => {
	const query: Record<string, any> = {};

	const [page, setPage] = useState<number>(1);
	const [size] = useState<number>(10);

	const [destinationId, setDestinationId] = useState<string>("");
	const [duration, setDuration] = useState<number>(0);

	if (size) query["limit"] = size;
	if (page) query["page"] = page;
	if (destinationId) query["destinationId"] = destinationId;
	if (duration) query["duration"] = Number(duration);
	const [searchTerm, setSearchTerm] = useState<string>("");

	const debouncedSearchTerm = useDebounced({
		searchQuery: searchTerm,
		delay: 600,
	});

	if (!!debouncedSearchTerm) {
		query["searchTerm"] = debouncedSearchTerm;
	}

	const handlePageChange = (data: any) => {
		setPage(data.selected + 1);
	};

	const { data: destination }: any = useDestinationsQuery(query);
	const destinations = destination?.destinations;

	const { data, isLoading }: any = useTourPackagesQuery(query);

	const packages = data?.tourPackages;
	const meta = data?.meta;

	const destinationOptions =
		destinations &&
		destinations?.map((destination: any) => {
			return {
				label: destination?.destinationName,
				value: destination?.id,
			};
		});

	const durationsOptions = packages?.map((item: any) => `${item.duration}`);

	return (
		<div className="pb-20 pt-14">
			<MaxWidthWrapper>
				{isLoading ? (
					<div className="flex items-center justify-center h-screen">
						<Spin />
					</div>
				) : (
					<>
						<div className="grid grid-cols-1 lg:grid-cols-2 mb-8 gap-8">
							<div className="w-[70%] sm:w-full sm:pr-10">
								<Input
									placeholder="Search"
									onChange={(e: any) =>
										setSearchTerm(e.target.value)
									}
								/>
							</div>
							<div className="flex items-center lg:justify-end">
								<div>
									<select
										onChange={(e) =>
											setDestinationId(e.target.value)
										}
										value={destinationId}
										className="border p-2 rounded-md mr-6"
									>
										<option value="">
											Select Destination
										</option>
										{destinationOptions?.map(
											(destination: any, index: any) => (
												<option
													value={destination.value}
													key={index}
												>
													{destination.label}
												</option>
											)
										)}
									</select>
									<select
										onChange={(e) =>
											setDuration(Number(e.target.value))
										}
										value={duration}
										className="border p-2 rounded-md"
									>
										<option value="">
											Select Duration
										</option>
										{durationsOptions?.map(
											(duration: any, index: any) => (
												<option
													value={duration}
													key={index}
												>
													{duration}
												</option>
											)
										)}
									</select>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
							{packages &&
								packages.map((item: any) => (
									<TourPackageCard
										item={item}
										key={item.id}
									/>
								))}
						</div>
						<div className="flex items-center justify-center mt-12">
							<ReactPaginate
								previousLabel={
									<div className="w-8 h-8 flex items-center justify-center bg-[#ff7c5b] hover:bg-[#d8694d] text-white rounded-full transition-colors duration-300 ease-in-out">
										<ChevronLeft />
									</div>
								}
								nextLabel={
									<div className="w-8 h-8 flex items-center justify-center bg-[#ff7c5b] hover:bg-[#d8694d] text-white rounded-full transition-colors duration-300 ease-in-out">
										<ChevronRight />
									</div>
								}
								pageCount={Math.ceil(meta?.total / meta?.limit)}
								onPageChange={handlePageChange}
								containerClassName="flex items-center justify-center space-x-3"
								pageClassName="w-8 h-8 flex items-center justify-center border border-gray-400 hover:bg-[#ff7c5b] hover:border-none hover:text-white rounded-full transition-colors duration-300 ease-in-out"
								activeClassName="bg-[#ff7c5b] text-white border-none"
							/>
						</div>
					</>
				)}
			</MaxWidthWrapper>
		</div>
	);
};

PackagePage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default PackagePage;
