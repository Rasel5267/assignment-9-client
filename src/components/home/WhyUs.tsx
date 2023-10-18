import MaxWidthWrapper from "../MaxWidthWrapper";
import VVCard from "../common/VVCard";
import { WhyUsData } from "./whyUsData";

const WhyUs = () => {
	return (
		<div className="py-20 bg-[#f5f6f6]">
			<MaxWidthWrapper>
				<div>
					<h4 className="text-lg text-[#ff7c5b] font-semibold text-center mb-1">
						VentureVista SPECIALS
					</h4>
					<h2 className="text-4xl text-gray-800 font-semibold text-center">
						Why Travel with VentureVista?
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
					<VVCard whyUs={WhyUsData} />
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default WhyUs;
