"use client";

import { useState } from "react";
import CardHome from "./CardHome";
import CoomingSoon from "./CoomingSoon";

const homeMenu = [
  "all",
  "latest",
  "favorite",
  "trending",
  "watchlist",
  "new",
  "support",
];

const HomeComponent = () => {
  const [isActive, setIsActive] = useState("all");
  return (
    <section className="flex flex-col justify-center items-center pt-20">
      <section className="w-full bg-gray-50 h-36 fixed top-0 z-20"></section>
      <input
        type="text"
        placeholder="Search here..."
        className="input input-bordered w-full max-w-xs sticky top-20 z-20"
      />
      <section className="flex gap-3 bg-gray-50 w-full justify-center py-3 sticky top-32 z-10">
        {homeMenu.map((menu) => {
          return (
            <button
              key={menu}
              onClick={() => setIsActive(menu)}
              className={`capitalize ${isActive === menu ? "font-bold" : ""}`}
            >
              {menu}
            </button>
          );
        })}
      </section>
      <section className="card w-1/2 bg-white p-3 mb-3 flex gap-1">
        {isActive === "all" && <CardHome title="All" />}
        {isActive === "latest" && <CoomingSoon />}
        {isActive === "favorite" && <CoomingSoon />}
        {isActive === "trending" && <CoomingSoon />}
        {isActive === "watchlist" && <CoomingSoon />}
        {isActive === "new" && <CoomingSoon />}
        {isActive === "support" && <CoomingSoon />}
      </section>
    </section>
  );
};

export default HomeComponent;
