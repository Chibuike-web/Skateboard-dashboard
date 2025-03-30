import { ComponentType } from "react";
import {
  BookmarkIcon,
  HomeIcon,
  PlaylistIcon,
  StreamingIcon,
  TrendingIcon,
} from "./Icon";

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
}

export interface MenuItem {
  id: number;
  name: string;
  icon: ComponentType<IconProps>;
}

export const menu: MenuItem[] = [
  { id: 1, name: "Discover", icon: HomeIcon },
  { id: 2, name: "Trending", icon: TrendingIcon },
  { id: 3, name: "Streaming", icon: StreamingIcon },
  { id: 4, name: "Playlist", icon: PlaylistIcon },
  { id: 5, name: "Bookmark", icon: BookmarkIcon },
];

export const category: MenuItem[] = [
  { id: 1, name: "Live Stream", icon: HomeIcon },
  { id: 2, name: "Tutorial", icon: TrendingIcon },
  { id: 3, name: "Competition", icon: StreamingIcon },
  { id: 4, name: "Community", icon: PlaylistIcon },
];

export const hexToRgba = (hex: string, opacity: number): string => {
  // Remove '#' if present
  hex = hex.replace(/^#/, "");

  // Expand shorthand form (e.g., '03F') to full form ('0033FF')
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 0xff;
  const g = (bigint >> 8) & 0xff;
  const b = bigint & 0xff;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
