import { useState } from "react";
import { MenuItem, menu } from "./Data";

export default function Menu() {
  const [hover, setHover] = useState<number | null>(null);
  const handleMouseEnter = (itemId: number) => {
    setHover(itemId);
  };

  return (
    <section>
      <p className="text-[0.6875rem] font-semibold tracking-[0.09375rem] opacity-50">
        MENU
      </p>
      <div className="mb-12 mt-6 flex flex-col gap-8">
        {menu.map(({ id, name, icon }: MenuItem) => (
          <Menulist
            key={id}
            id={id}
            name={name}
            icon={icon}
            handleMouseEnter={handleMouseEnter}
            hover={hover}
            setHover={setHover}
          />
        ))}
      </div>
    </section>
  );
}

interface MenuProps extends MenuItem {
  hover: number | null;
  setHover: (value: number | null) => void;
  handleMouseEnter: (itemId: number) => void;
}

export const Menulist = ({
  id,
  name,
  icon: Icon,
  handleMouseEnter,
  hover,
  setHover,
}: MenuProps) => {
  // For Icons
  let iconStyles = "";
  if (id === 1) {
    iconStyles = "bg-[#FF7551]";
  } else if (hover === id && (id === 2 || id === 4)) {
    iconStyles = "bg-[#0DAABC] !bg-[#0DAABC]";
  } else if (hover === id && (id === 3 || id === 5)) {
    iconStyles = "bg-[#6C5ECF] !bg-[#6C5ECF]";
  }

  // For Text
  let textStyles: string = "";
  if (id === 1) {
    textStyles = "text-white font-semibold";
  } else if (hover === id) {
    textStyles = "text-white font-semibold";
  }

  // For Icon
  let iconColor: string = "";
  if (id === 1) {
    iconColor = "white";
  } else if (hover !== id) {
    iconColor = "#808191";
  } else if (hover === id) {
    iconColor = "white";
  }
  return (
    <div
      key={id}
      className={`menu-item flex cursor-pointer items-center gap-4 ${id === 1 ? "white" : "text-[rgba(128,129,145)]"}`}
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={() => setHover(null)}
    >
      <figure
        className={`flex h-8 w-8 items-center justify-center rounded-xl ${id === 1 ? "bg-[#FF7551]" : "bg-[rgba(128,129,145,0.5)]"} ${iconStyles}`}
      >
        <Icon width={20} height={20} color={iconColor} />
      </figure>
      <p className={`text-[0.875rem] tracking-[0.01875rem] ${textStyles}`}>
        {name}
      </p>
    </div>
  );
};
