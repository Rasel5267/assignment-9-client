import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Hero = () => {
	return (
		<div className="relative">
			<Image
				src="/banner-1.jpg"
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
			<div className="absolute text-white bottom-48">
				<MaxWidthWrapper>
					<h2 className="text-5xl font-bold">Explore Your Travel</h2>
					<h4 className="mt-2">
						Discover your next great adventure, become an explorer
						to get started!
					</h4>
				</MaxWidthWrapper>
			</div>
		</div>
	);
};

export default Hero;
