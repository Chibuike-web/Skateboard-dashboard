import BottomNav from "../components/BottomNav";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { Outlet } from "react-router";

export function Dashboard() {
	return (
		<div className="grid h-screen w-full grid-cols-[auto_1fr] bg-[#1f1d2b] text-white">
			<Sidebar />
			<div className="flex w-full flex-col h-full overflow-auto">
				{" "}
				<Navbar />
				<Outlet />
				<BottomNav />
			</div>
		</div>
	);
}
