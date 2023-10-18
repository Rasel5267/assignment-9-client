import { ShoppingBag } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../../../ui/sheet";

const CartPage = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="relative cursor-pointer">
					<ShoppingBag size={20} />
					<span className="absolute -top-3 -right-3 bg-[#ff7c5b] w-6 h-6 rounded-full flex items-center justify-center text-white">
						0
					</span>
				</div>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Selected Packages</SheetTitle>
				</SheetHeader>
				<div>
					<div>
						<h4>Selected Items</h4>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default CartPage;
