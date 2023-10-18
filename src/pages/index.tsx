import type { ReactElement } from "react";
import Layout from "@/components/common/ui/Layout";
import { NextPageWithLayout } from "./_app";
import Head from "next/head";
import WhyUs from "@/components/home/WhyUs";
import About from "@/components/home/About";
import Adventure from "@/components/home/Adventure";
import Hero from "@/components/home/Hero";
import Destination from "@/components/home/Destination";
import Blog from "@/components/home/Blog";
import Review from "@/components/home/Review";
import Faq from "@/components/home/Faq";

const HomePage: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>
					VentureVista - Embark on Unforgettable Adventures and
					Discover New Horizons
				</title>
				<meta
					name="description"
					content="Explore the world with VentureVista. Our tours offer thrilling escapades, breathtaking landscapes, and cultural immersions. Embark on journeys that redefine adventure and create memories of a lifetime."
				/>
			</Head>
			<Hero />
			<WhyUs />
			<About />
			<Adventure />
			<Destination />
			<Blog />
			<Review />
			<Faq />
		</>
	);
};

HomePage.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default HomePage;
