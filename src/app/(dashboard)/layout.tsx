import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<h2>Dashboard Header</h2>
			<MaxWidthWrapper>
				<main>{children}</main>
			</MaxWidthWrapper>
		</div>
	);
};

export default DashboardLayout;
