"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CartPage from "./CartPage";
import { Search, UserSquare2 } from "lucide-react";
import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { authKey } from "@/constants/storageKey";
import MobileMenu from "./MobileMenu";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";

const NavbarItem = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const search = searchParams.get("searchTerm");

	const [value, setValue] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log("Submit", value);
		console.log(search);
	};

	return (
		<>
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Search className="cursor-pointer" size={20} />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								name="searchTerm"
								placeholder="Search ..."
								onChange={(e) => setValue(e.target.value)}
								className="border border-gray-200 p-2 rounded-md outline-none"
							/>
						</form>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<CartPage />
			<div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<UserSquare2 className="cursor-pointer" size={20} />
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-40 flex flex-col items-center py-6 gap-4">
						{isLoggedIn() ? (
							<>
								<Link href="/profile">Dashboard</Link>
								<span
									className="cursor-pointer"
									onClick={() => {
										removeUserInfo(authKey);
										router.push("/");
										window.location.reload();
									}}
								>
									Logout
								</span>
							</>
						) : (
							<>
								<Link href="/login">Login</Link>
								<Link href="/register">Register</Link>
							</>
						)}
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<MobileMenu />
		</>
	);
};

export default NavbarItem;
