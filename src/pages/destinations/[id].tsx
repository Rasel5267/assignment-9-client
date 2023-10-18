import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Spin from "@/components/common/Spin";
import Layout from "@/components/common/ui/Layout";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { useDestinationQuery } from "@/redux/api/destinationApi";

const DestinationDetails: NextPageWithLayout = () => {
	const router = useRouter();
	const id = router.query.id;
	const { data, isLoading } = useDestinationQuery(id);

	return (
		<>
			<Head>
				<title>VentureVista | Destination Details</title>
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
							<h2 className="text-4xl text-gray-800 font-bold">
								{data?.destinationName}
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

DestinationDetails.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default DestinationDetails;
