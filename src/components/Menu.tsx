import { useState } from "react";
import { MenuItem, menu, hexToRgba } from "./Data";

export default function Menu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Background color function
  const getBackgroundColor = (index: number) => {
    if (index === 0) return hexToRgba("#FF7551", 1);
    if (hoveredIndex === index && (index === 1 || index === 3))
      return "#0DAABC";
    else if (hoveredIndex === index && (index === 2 || index === 4))
      return "#6C5ECF";
    return hexToRgba("#808191", 0.5);
  };

  // Font weight function
  const getFontWeight = (index: number) =>
    index === 0 || hoveredIndex === index ? 600 : 400;

  // Text color function
  const getColor = (index: number) =>
    index === 0 || hoveredIndex === index ? "white" : "#808191";

  return (
    <section>
      <p className="text-[0.6875rem] font-semibold tracking-[0.09375rem] opacity-50">
        MENU
      </p>
      <div className="mb-12 mt-6 flex flex-col gap-8">
        {menu.map(({ name, icon: Icon }: MenuItem, index) => (
          <div
            key={name}
            className="menu-item flex cursor-pointer items-center gap-4"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <figure
              className="flex h-8 w-8 items-center justify-center rounded-xl"
              style={{
                backgroundColor: getBackgroundColor(index),
              }}
            >
              <Icon width={20} height={20} color={getColor(index)} />
            </figure>
            <p
              className="text-[0.875rem] tracking-[0.01875rem]"
              style={{
                fontWeight: getFontWeight(index),
                color: getColor(index),
              }}
            >
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
