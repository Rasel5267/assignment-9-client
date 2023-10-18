import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TourPackageCard = ({ item }: any) => {
	return (
		<Card>
			<CardContent className="p-0">
				<Image
					src="/card.jpeg"
					alt={item.packageName}
					width={600}
					height={600}
					priority
					style={{
						borderRadius: "8px 8px 0 0",
					}}
				/>
				<div className="py-4 px-2">
					<h3 className="text-lg text-gray-800 font-bold">
						{item.packageName}
					</h3>
					<p>
						<span className="text-[#ff7c5b] font-bold">
							${item.price}
						</span>
						<span className="text-gray-600"> / Per person</span>
					</p>
					<div className="bg-[#f5f6f6] text-gray-500 p-2 my-2 flex items-center justify-center space-x-2">
						<div className="flex items-center justify-center space-x-3">
							<Clock size={20} />
							<span>{item.duration} days</span>
						</div>
						<p>|</p>
						<div className="flex items-center justify-center space-x-3">
							<MapPin size={20} />
							<span>{item.destination.destinationName}</span>
						</div>
					</div>
					<Link
						href={`/tourPackage/${item.id}`}
						className={cn(buttonVariants(), "mt-3")}
					>
						See Details
					</Link>
				</div>
			</CardContent>
		</Card>
	);
};

export default TourPackageCard;
