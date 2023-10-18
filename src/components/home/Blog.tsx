import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Spin from "../common/Spin";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { useBlogsQuery } from "@/redux/api/blogApi";

const Blog = () => {
	const query: Record<string, any> = {};
	const { data, isLoading }: any = useBlogsQuery(query);
	let blogs;

	if (data !== undefined) {
		blogs = data.blogs;
	}
	const blog = blogs?.slice(0, 4);

	const truncateDescription = (description: string, wordLimit: number) => {
		const words = description.split(" ");
		const truncatedDescription = words.slice(0, wordLimit).join(" ");

		return truncatedDescription;
	};

	return (
		<div className="py-20 bg-[#f5f6f6]">
			<MaxWidthWrapper>
				<div className="mb-8">
					<h4 className="text-lg text-[#ff7c5b] font-semibold text-center mb-1">
						News & Article
					</h4>
					<h2 className="text-4xl text-gray-800 font-bold text-center">
						Stay Update with VentureVista&apos;s Tips
					</h2>
				</div>
				{isLoading ? (
					<div className="flex items-center justify-center h-20">
						<Spin />
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{blog &&
							blog.map((item: any) => (
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
													borderRadius: "8px 8px 0 0",
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
				)}
			</MaxWidthWrapper>
		</div>
	);
};

export default Blog;
