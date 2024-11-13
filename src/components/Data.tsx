import { ComponentType } from "react";
import {
  BookmarkIcon,
  HomeIcon,
  PlaylistIcon,
  StreamingIcon,
  TrendingIcon,
} from "./icon";

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
}

export interface MenuItem {
  name: string;
  icon: ComponentType<IconProps>;
}

export const menu: MenuItem[] = [
  { name: "Discover", icon: HomeIcon },
  { name: "Trending", icon: TrendingIcon },
  { name: "Streaming", icon: StreamingIcon },
  { name: "Playlist", icon: PlaylistIcon },
  { name: "Bookmark", icon: BookmarkIcon },
];

export const category: MenuItem[] = [
  { name: "Live Stream", icon: HomeIcon },
  { name: "Tutorial", icon: TrendingIcon },
  { name: "Competition", icon: StreamingIcon },
  { name: "Community", icon: PlaylistIcon },
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
