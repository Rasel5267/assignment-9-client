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
								pathname === "/" ? "text-[#ff7c5b]" : ""
							}`}
							href="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className={`link ${
								pathname === "/destinations"
									? "text-[#ff7c5b]"
									: ""
							}`}
							href="/destinations"
						>
							Destinations
						</Link>
					</li>
					<li>
						<Link
							className={`link ${
								pathname === "/packages" ? "text-[#ff7c5b]" : ""
							}`}
							href="/packages"
						>
							Packages
						</Link>
					</li>
					<li>
						<Link
							className={`link ${
								pathname === "/blogs" ? "text-[#ff7c5b]" : ""
							}`}
							href="/blogs"
						>
							Blogs
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default MenuItem;
