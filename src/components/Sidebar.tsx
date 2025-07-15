import { useState } from "react";
import Category from "./Category";
import Menu from "./Menu";

export default function Sidebar() {
	const [toggle, setToggle] = useState<boolean>(true);

	return (
		<aside className="hidden sm:flex h-full w-max flex-col min-[1200px]:min-w-[250px] min-[1200px]:max-w-[250px] overflow-auto p-4 min-[1200px]:px-[32px] min-[1200px]:py-[38px]">
			<h2 className="mb-[50px] hidden xl:block text-xl font-semibold">skateboard</h2>
			<div className="w-max">
				<Menu />
				<Category />
			</div>

			<div className="linebreak h-[1px] w-full bg-[#34373C]"></div>

			{/* Toggle Button */}
			<div className="flex hide items-center gap-3 mt-auto ">
				<button
					className={`flex h-[24px] w-[40px] items-center justify-end rounded-full p-[2px] ${toggle ? "bg-[#6C5ECF]" : "bg-[#808191]"}`}
					onClick={() => setToggle(!toggle)}
				>
					<div
						className={`duration-400 flex h-[20px] w-[20px] flex-col rounded-full bg-white transition-all ease-in-out ${toggle ? "translate-x-[0]" : "-translate-x-[16px]"}`}
					></div>
				</button>
				<p className="hidden min-[1200px]:block">Night mode</p>
			</div>
		</aside>
	);
}
