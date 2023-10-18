import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const VVCard = ({ whyUs }: any) => {
	return (
		<>
			{whyUs.map((item: any, index: any) => (
				<Card key={index}>
					<CardContent className="p-0">
						<div>
							<Image
								src={item.image}
								alt={item.title}
								width={660}
								height={660}
								priority
							/>
							<div>
								<div className="flex items-center justify-center">
									<div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
										<Image
											src={item.icon}
											alt={item.title}
											width={30}
											height={30}
											priority
										/>
									</div>
								</div>
								<h3 className="text-center text-lg font-bold text-gray-700 mt-4 mb-6">
									{item.title}
								</h3>
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</>
	);
};

export default VVCard;
