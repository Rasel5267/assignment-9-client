import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
	Facebook,
	Instagram,
	Link,
	Linkedin,
	Mail,
	MapPin,
	Mic,
	Twitter,
	Youtube,
} from "lucide-react";

const Footer = () => {
	return (
		<div className="mt-auto">
			<div className="py-8 bg-black/90 text-gray-300">
				<MaxWidthWrapper>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
						<div>
							<h4 className="text-4xl text-white font-extrabold mb-6">
								Venture
								<span className="text-[#ff7c5b]">Vista</span>
							</h4>
							<p>
								Lorem ipsum dolor amet consetetur adi pisicing
								elit sed eiusm tempor in cididunt ut labore
								dolore magna aliqua enim.
							</p>
							<div className="flex items-center space-x-4 mt-8">
								<div className="h-10 w-10 rounded-full bg-gray-700 hover:bg-[#ff7c5b] transition-colors duration-300 ease-in-out flex items-center justify-center cursor-pointer">
									<Facebook size={20} />
								</div>
								<div className="h-10 w-10 rounded-full bg-gray-700 hover:bg-[#ff7c5b] transition-colors duration-300 ease-in-out flex items-center justify-center cursor-pointer">
									<Linkedin size={20} />
								</div>
								<div className="h-10 w-10 rounded-full bg-gray-700 hover:bg-[#ff7c5b] transition-colors duration-300 ease-in-out flex items-center justify-center cursor-pointer">
									<Instagram size={20} />
								</div>
								<div className="h-10 w-10 rounded-full bg-gray-700 hover:bg-[#ff7c5b] transition-colors duration-300 ease-in-out flex items-center justify-center cursor-pointer">
									<Twitter size={20} />
								</div>
								<div className="h-10 w-10 rounded-full bg-gray-700 hover:bg-[#ff7c5b] transition-colors duration-300 ease-in-out flex items-center justify-center cursor-pointer">
									<Youtube size={20} />
								</div>
							</div>
						</div>
						<div className="flex flex-col md:items-center">
							<h2 className="text-2xl font-bold">Services</h2>
							<div className="mt-6">
								<p className="text-gray-400 cursor-pointer mb-3">
									About Us
								</p>
								<p className="text-gray-400 cursor-pointer mb-3">
									How It Works
								</p>
								<p className="text-gray-400 cursor-pointer mb-3">
									Our Blog
								</p>
								<p className="text-gray-400 cursor-pointer mb-3">
									Our Services
								</p>
								<p className="text-gray-400 cursor-pointer">
									Contact Us
								</p>
							</div>
						</div>
						<div>
							<h2 className="text-2xl font-bold">Contact</h2>
							<div className="mt-6">
								<div className="flex space-x-3">
									<MapPin
										size={24}
										color="#ff7c5b"
										absoluteStrokeWidth
									/>
									<p className="text-gray-400">
										Flat 20, Reynolds Neck, North
										Helenaville, FV77 8WS
									</p>
								</div>
								<div className="flex items-center space-x-3 my-4">
									<Mic color="#ff7c5b" absoluteStrokeWidth />
									<p className="text-gray-400">
										+2(305) 587-3407
									</p>
								</div>
								<div className="flex items-center space-x-3">
									<Mail color="#ff7c5b" absoluteStrokeWidth />
									<p className="text-gray-400">
										info@example.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
			<div className="h-12 bg-black text-gray-300 text-sm">
				<MaxWidthWrapper className="h-full">
					<div className="flex items-center justify-center h-full">
						<p>
							VentureVista &#169; {new Date().getFullYear()} All
							Right Reserved
						</p>
					</div>
				</MaxWidthWrapper>
			</div>
		</div>
	);
};

export default Footer;
