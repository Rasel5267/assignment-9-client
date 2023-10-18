import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MenuItem from "@/components/common/ui/navbar/MenuItem";
import NavbarItem from "@/components/common/ui/navbar/NavbarItem";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className="sticky h-14 inset-x-0 top-0 z-30 w-full shadow-sm bg-white/75 backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between">
					<Link href="/" className="text-lg sm:text-2xl font-bold">
						VentureVista
					</Link>
					<MenuItem />
					<div className="flex items-center space-x-4 lg:space-x-6">
						<NavbarItem />
					</div>
				</div>
			</MaxWidthWrapper>
		</div>
	);
};

export default Navbar;
