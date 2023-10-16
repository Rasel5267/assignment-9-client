import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Footer from "@/components/common/ui/Footer";
import Navbar from "@/components/common/ui/Navbar";

const UiLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Navbar />
			<MaxWidthWrapper>
				<main>{children}</main>
			</MaxWidthWrapper>
			<Footer />
		</div>
	);
};

export default UiLayout;
