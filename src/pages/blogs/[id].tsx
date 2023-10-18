import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Spin from "@/components/common/Spin";
import Layout from "@/components/common/ui/Layout";
import { useBlogQuery } from "@/redux/api/blogApi";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const BlogDetails: NextPageWithLayout = () => {
	const router = useRouter();
	const id = router.query.id;
	const { data, isLoading } = useBlogQuery(id);
	const formattedDate = new Date(data?.createdAt).toLocaleString();

	return (
		<>
			<Head>
				<title>VentureVista | Blog Details</title>
			</Head>
			{isLoading ? (
				<div className="flex items-center justify-center h-screen">
					<Spin />
				</div>
			) : (
				<div className="my-8">
					<MaxWidthWrapper>
						<Image
							src="/blog-big.jpg"
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
							<p>{formattedDate}</p>
							<h2 className="text-4xl text-gray-800 font-bold">
								{data?.title}
							</h2>
							<p className="text-gray-600 mt-4">
								{data?.description}
							</p>
						</div>
					</MaxWidthWrapper>
				</div>
			)}
		</>
	);
};

BlogDetails.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default BlogDetails;
