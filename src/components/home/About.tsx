import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Check } from "lucide-react";
import { buttonVariants } from "../ui/button";

const About = () => {
	return (
		<div className="py-16 bg-white">
			<MaxWidthWrapper>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
					<div>
						<Image
							src="/about-1.jpg"
							alt="Featured"
							width={400}
							height={400}
							priority
						/>
					</div>
					<div className="mt-6 md:mt-0">
						<h4 className="text-lg text-gray-600 font-semibold">
							About VentureVista
						</h4>
						<h2 className="text-4xl text-gray-800 font-bold mb-6">
							World Best Travel Agency Company Since 2008.
						</h2>
						<div className="text-gray-500 mb-4">
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit sed do eiu smod tempor incididunt ut labore
							dolore magna aliqua.Quis ipsum suspen disse ultrices
							gravida Risus commodo viverra maecenas accumsan
							lacus vel facilisis.
						</div>
						<div className="mb-8">
							<p className="flex items-center space-x-3">
								<Check size={20} />
								<span>Ratione voluptatem.</span>
							</p>
							<p className="flex items-center space-x-3">
								<Check size={20} />
								<span>sequi nesciunt.</span>
							</p>
							<p className="flex items-center space-x-3">
								<Check size={20} />
								<span>Ratione voluptatem sequi.</span>
							</p>
						</div>
						<Link className={buttonVariants()} href="/packages">
							Find Tours
						</Link>
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default About;
