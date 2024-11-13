import { useState } from "react";
import { MenuItem, category, hexToRgba } from "./Data";

export default function Menu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Background color function
  const getBackgroundColor = (index: number) => {
    if (hoveredIndex === index && (index === 0 || index === 2))
      return "#0DAABC";
    else if (hoveredIndex === index && (index === 1 || index === 3))
      return "#6C5ECF";
    return hexToRgba("#808191", 0.5);
  };

  // Font weight function
  const getFontWeight = (index: number) => (hoveredIndex === index ? 600 : 400);

  // Text color function
  const getColor = (index: number) =>
    hoveredIndex === index ? "white" : "#808191";

  return (
    <section>
      <p className="text-[11px] font-semibold tracking-[1.5px] opacity-50">
        CATEGORY
      </p>
      <div className="mb-12 mt-6 flex flex-col gap-8">
        {category.map(({ name, icon: Icon }: MenuItem, index) => (
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
              className="text-[14px] tracking-[0.3px]"
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
