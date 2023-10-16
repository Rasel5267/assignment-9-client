"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = () => {
	const pathname = usePathname();
	return (
		<>
			<div className="hidden md:block">
				<ul className="flex items-center space-x-4">
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
			</div>
		</>
	);
};

export default MenuItem;
