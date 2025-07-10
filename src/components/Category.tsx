import { useState } from "react";
import { MenuItem, category } from "./Data";
import { Menulist } from "./Menu";

export default function Category() {
	const [hoverId, setHoverId] = useState<number | null>(null);
	const handleMouseEnter = (itemId: number) => {
		setHoverId(itemId);
	};
	return (
		<section>
			<p className="text-[11px] font-semibold tracking-[1.5px] opacity-50">CATEGORY</p>
			<div className="mb-12 mt-6 flex flex-col gap-8">
				{category.map(({ id, name, icon }: MenuItem) => (
					<Menulist
						key={id}
						id={id}
						name={name}
						icon={icon}
						handleMouseEnter={handleMouseEnter}
						hoverId={hoverId}
						setHoverId={setHoverId}
					/>
				))}
			</div>
		</section>
	);
}
