import { useState } from "react";
import { MenuItem, menu } from "./Data";
import { NavLink, useMatch } from "react-router";

export default function Menu() {
	const [hoverId, setHoverId] = useState<number | null>(null);
	const handleMouseEnter = (itemId: number) => {
		setHoverId(itemId);
	};

	return (
		<section className="w-max">
			<p className="text-[0.6875rem] font-semibold tracking-[0.09375rem] opacity-50 hidden min-[1200px]:block">
				MENU
			</p>
			<div className="mb-12 mt-6 w-max flex flex-col gap-8">
				{menu.map(({ id, name, icon, link }: MenuItem) => (
					<Menulist
						key={id}
						id={id}
						name={name}
						icon={icon}
						link={link}
						handleMouseEnter={handleMouseEnter}
						hoverId={hoverId}
						setHoverId={setHoverId}
					/>
				))}
			</div>
		</section>
	);
}

interface MenuProps extends MenuItem {
	hoverId: number | null;
	setHoverId: (value: number | null) => void;
	handleMouseEnter: (itemId: number) => void;
}

export const Menulist = ({
	id,
	name,
	icon: Icon,
	link,
	handleMouseEnter,
	hoverId,
	setHoverId,
}: MenuProps) => {
	// For Icons
	let iconStyles = "";

	if (hoverId === id && id === 1) {
		iconStyles = "bg-[#FF7551] text-white";
	} else if (hoverId === id && (id === 2 || id === 4)) {
		iconStyles = "bg-[#0DAABC] text-white";
	} else if (hoverId === id && (id === 3 || id === 5)) {
		iconStyles = "bg-[#6C5ECF] text-white";
	}

	// For Text
	let textStyles: string = "";
	if (hoverId === id) {
		textStyles = "text-white font-semibold";
	}

	const match = useMatch({ path: `${link}` });
	const isActive = Boolean(match);

	let styles: string = "";

	if (isActive && id === 1) {
		styles = "bg-[#FF7551]";
	} else if (isActive && (id === 2 || id === 4)) {
		styles = "bg-[#0DAABC]";
	} else if (isActive && (id === 3 || id === 5)) {
		styles = "bg-[#6C5ECF]";
	}

	return (
		<NavLink
			to={`${link}`}
			end={link === "/"}
			key={id}
			className={({ isActive }) =>
				`menu-item flex cursor-pointer items-center gap-4 ${
					isActive ? "text-white" : "text-[rgba(128,129,145)]"
				}`
			}
			onMouseEnter={() => handleMouseEnter(id)}
			onMouseLeave={() => setHoverId(null)}
		>
			<figure
				className={`flex h-8 w-8 items-center justify-center rounded-xl ${iconStyles} ${styles}`}
			>
				<Icon width={20} height={20} />
			</figure>
			<p
				className={`text-[0.875rem] hidden min-[1200px]:block tracking-[0.01875rem] ${textStyles}`}
			>
				{name}
			</p>
		</NavLink>
	);
};
