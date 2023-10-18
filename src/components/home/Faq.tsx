import { useFaqsQuery } from "@/redux/api/faqApi";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Spin from "../common/Spin";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";

const Faq = () => {
	const query: Record<string, any> = {};
	const { data, isLoading }: any = useFaqsQuery(query);
	return (
		<div className="py-20 bg-[#f5f6f6]">
			<MaxWidthWrapper>
				<div className="mb-8">
					<h4 className="text-lg text-[#ff7c5b] font-semibold text-center mb-1">
						FAQ
					</h4>
					<h2 className="text-4xl text-gray-800 font-bold text-center">
						Frequently Asked Questions
					</h2>
				</div>
				{isLoading ? (
					<div className="flex items-center justify-center h-20">
						<Spin />
					</div>
				) : (
					<div className="w-full sm:max-w-[70%] md:max-w-[50%] mx-auto">
						<Accordion type="single" collapsible className="w-full">
							{data.length &&
								data.map((item: any) => (
									<div key={item.id}>
										<AccordionItem value={item.id}>
											<AccordionTrigger>
												{item.question}
											</AccordionTrigger>
											<AccordionContent>
												{item.answer}
											</AccordionContent>
										</AccordionItem>
									</div>
								))}
						</Accordion>
					</div>
				)}
			</MaxWidthWrapper>
		</div>
	);
};

export default Faq;
