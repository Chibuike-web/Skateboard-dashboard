import { NavLink, useMatch } from "react-router";
import { menu, MenuItem } from "./Data";
import { ComponentType } from "react";

export default function BottomNav() {
	return (
		<div className="fixed sm:hidden bg-[#1f1d2b] h-20 left-0 right-0 bottom-0 flex items-center justify-center">
			<div className="px-6 w-full justify-between flex ">
				{menu.map(({ id, name, icon, link }: MenuItem) => (
					<MobileMenulist key={id} id={id} name={name} icon={icon} link={link} />
				))}
			</div>
		</div>
	);
}

interface IconProps {
	color?: string;
	width?: number;
	height?: number;
	className?: string;
}

type MobileMenulist = {
	id: number;
	name?: string;
	icon: ComponentType<IconProps>;
	link?: string;
};

const MobileMenulist = ({ id, icon: Icon, link }: MobileMenulist) => {
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
		>
			<figure className={`flex h-8 w-8 items-center justify-center rounded-xl ${styles}`}>
				<Icon width={20} height={20} />
			</figure>
		</NavLink>
	);
};
