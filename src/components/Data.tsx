import { ComponentType } from "react";
import { BookmarkIcon, HomeIcon, PlaylistIcon, StreamingIcon, TrendingIcon } from "./Icons";

interface IconProps {
	color?: string;
	width?: number;
	height?: number;
	className?: string;
}

export interface MenuItem {
	id: number;
	name: string;
	icon: ComponentType<IconProps>;
	link?: string;
}

export const menu: MenuItem[] = [
	{ id: 1, name: "Discover", icon: HomeIcon, link: "/" },
	{ id: 2, name: "Trending", icon: TrendingIcon, link: "/trending" },
	{ id: 3, name: "Streaming", icon: StreamingIcon, link: "streaming" },
	{ id: 4, name: "Playlist", icon: PlaylistIcon },
	{ id: 5, name: "Bookmark", icon: BookmarkIcon },
];

export const category: MenuItem[] = [
	{ id: 2, name: "Live Stream", icon: HomeIcon },
	{ id: 3, name: "Tutorial", icon: TrendingIcon },
	{ id: 4, name: "Competition", icon: StreamingIcon },
	{ id: 5, name: "Community", icon: PlaylistIcon },
];
