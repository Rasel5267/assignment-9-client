"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

const MobileMenu = () => {
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Menu className="cursor-pointer md:hidden" size={20} />
			</SheetTrigger>
			<SheetContent side="left">
				<ul className="flex flex-col items-center mt-28 gap-6">
					<li>
						<Link
							className={`link ${
								pathname === "/" ? "text-primary" : ""
							}`}
							href="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className={`link ${
								pathname === "/destination"
									? "text-primary"
									: ""
							}`}
							href="/destination"
						>
							Destinations
						</Link>
					</li>
					<li>
						<Link
							className={`link ${
								pathname === "/packages" ? "text-primary" : ""
							}`}
							href="/packages"
						>
							Packages
						</Link>
					</li>
					<li>
						<Link
							className={`link ${
								pathname === "/contact" ? "text-primary" : ""
							}`}
							href="/contact"
						>
							Contact
						</Link>
					</li>
				</ul>
			</SheetContent>
		</Sheet>
	);
};

export default MobileMenu;
