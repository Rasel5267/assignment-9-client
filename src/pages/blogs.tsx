import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useBlogsQuery } from "@/redux/api/blogApi";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Spin from "@/components/common/Spin";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { NextPageWithLayout } from "./_app";
import { ReactElement, useState } from "react";
import Layout from "@/components/common/ui/Layout";
import ReactPaginate from "react-paginate";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BlogPage: NextPageWithLayout = () => {
	const query: Record<string, any> = {};

	const [page, setPage] = useState<number>(1);
	const [size] = useState<number>(10);

	query["limit"] = size;
	query["page"] = page;

	const handlePageChange = (data: any) => {
		setPage(data.selected + 1);
	};

	const { data, isLoading }: any = useBlogsQuery(query);
	let blogs;
	let meta;

	if (data !== undefined) {
		blogs = data.blogs;
		meta = data.meta;
	}

	const truncateDescription = (description: string, wordLimit: number) => {
		const words = description.split(" ");
		const truncatedDescription = words.slice(0, wordLimit).join(" ");

		return truncatedDescription;
	};

	return (
		<div className="pb-20 pt-14">
			<MaxWidthWrapper>
				{isLoading ? (
					<div className="flex items-center justify-center h-screen">
						<Spin />
					</div>
				) : (
					<>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
							{blogs &&
								blogs.map((item: any) => (
									<div key={item.id}>
										<Card>
											<CardContent className="p-0">
												<Image
													src="/blog.jpg"
													alt={item.title}
													width={600}
													height={600}
													priority
													style={{
														borderRadius:
															"8px 8px 0 0",
													}}
												/>
												<div className="py-4 px-2">
													<h3 className="text-lg text-gray-800 font-bold">
														{item.title}
													</h3>
													<p>
														{truncateDescription(
															item.description,
															20
														)}
													</p>
													<Link
														href={`/blogs/${item.id}`}
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
								pageCount={Math.ceil(meta.total / meta.limit)}
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

BlogPage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default BlogPage;
