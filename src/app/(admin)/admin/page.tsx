import Sidebar from "@/components/layout/Sidebar";

export default function DashboardPage() {
	return (
		<div className="flex">
			<Sidebar />
			<main className="flex-1 p-6">{/* <DashboardContent /> */}</main>
		</div>
	);
}
