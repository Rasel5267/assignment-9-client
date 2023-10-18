import Spin from "@/components/common/Spin";
import Layout from "@/components/common/ui/Layout";
import { useTourPackageQuery } from "@/redux/api/tourPackageApi";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";

const TourPackageDetails: NextPageWithLayout = () => {
	const router = useRouter();
	const id = router.query.id;
	const { data, isLoading } = useTourPackageQuery(id);

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
				<div>
					<h2>{data?.packageName}</h2>
				</div>
			)}
		</>
	);
};

TourPackageDetails.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default TourPackageDetails;
