import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/constants/Providers";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
	title: "VentureVista - Embark on Unforgettable Adventures and Discover New Horizons",
	description:
		"Explore the world with VentureVista. Our tours offer thrilling escapades, breathtaking landscapes, and cultural immersions. Embark on journeys that redefine adventure and create memories of a lifetime.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Providers>
			<html lang="en">
				<body
					className={cn(
						"min-h-screen font-sans antialiased grainy",
						inter.className
					)}
				>
					{children}
					<Toaster />
				</body>
			</html>
		</Providers>
	);
}
