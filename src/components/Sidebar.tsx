import { useState } from "react";
import Category from "./Category";
import Menu from "./Menu";

export default function Sidebar() {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <div>
      <aside className="flex flex-col px-[32px] py-[38px]">
        <h2 className="mb-[50px] text-xl font-semibold">skateboard</h2>
        <div>
          <Menu />
          <Category />
        </div>

        {/* Line Break */}
        <div className="linebreak h-[1px] w-full bg-[#34373C]"></div>

        {/* Toggle Button */}
        <div className="flex items-center space-x-5 pt-12">
          <button
            className="flex h-[30px] w-[50px] items-center justify-end rounded-full p-[2px]"
            onClick={() => setToggle(!toggle)}
            style={{ backgroundColor: !toggle ? "#808191" : "#6C5ECF" }}
          >
            <div
              className="duration-800 flex h-[26px] w-[26px] flex-col rounded-full bg-white transition-all ease-in-out"
              style={{
                transform: toggle ? "translateX(0)" : "translateX(-20px)",
              }}
            ></div>
          </button>
          <p>Night mode</p>
        </div>
      </aside>
    </div>
  );
}
