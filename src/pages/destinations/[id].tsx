import Spin from "@/components/common/Spin";
import Layout from "@/components/common/ui/Layout";
import { useDestinationQuery } from "@/redux/api/destinationApi";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const DestinationDetails = () => {
	const router = useRouter();
	const id = router.query.id;
	const { data, isLoading } = useDestinationQuery(id);

	return (
		<>
			<Head>
				<title>VentureVista | Destination Details</title>
			</Head>
			<div>
				{isLoading ? (
					<div className="flex items-center justify-center h-screen">
						<Spin />
					</div>
				) : (
					<>
						<h2>{data?.destinationName}</h2>
					</>
				)}
			</div>
		</>
	);
};

DestinationDetails.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default DestinationDetails;
