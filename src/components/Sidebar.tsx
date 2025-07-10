import { useState } from "react";
import Category from "./Category";
import Menu from "./Menu";

export default function Sidebar() {
	const [toggle, setToggle] = useState<boolean>(true);

	return (
		<aside className="flex h-full flex-col min-w-[250px] max-w-[250px] overflow-auto px-[32px] py-[38px]">
			<h2 className="mb-[50px] text-xl font-semibold">skateboard</h2>
			<div>
				<Menu />
				<Category />
			</div>

			<div className="linebreak h-[1px] w-full bg-[#34373C]"></div>

			{/* Toggle Button */}
			<div className="flex items-center space-x-5 mt-auto ">
				<button
					className={`flex  h-[30px] w-[50px] items-center justify-end rounded-full p-[2px] ${toggle ? "bg-[#6C5ECF]" : "bg-[#808191]"}`}
					onClick={() => setToggle(!toggle)}
				>
					<div
						className={`duration-400 flex h-[26px] w-[26px] flex-col rounded-full bg-white transition-all ease-in-out ${toggle ? "translate-x-[0]" : "-translate-x-[20px]"}`}
					></div>
				</button>
				<p>Night mode</p>
			</div>
		</aside>
	);
}
