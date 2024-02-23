"use client";

import { useEffect, useState } from "react";
import CardHome from "./CardHome";
import CoomingSoon from "./CoomingSoon";
import useSWR from "swr";
import { fetcher } from "@/app/services/fetcher";
import Support from "./Support";

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
  const [dataCrypto, setDataCrypto] = useState([]);
  const { data, error, isLoading } = useSWR("/api/allTab", fetcher);
  useEffect(() => {
    if (data) {
      setDataCrypto(data);
    }
    if (dataCrypto) {
      console.log(dataCrypto);
    }
  }, [data, dataCrypto]);
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
              className={`capitalize ${
                menu === "support" ? "text-green-600" : ""
              } ${isActive === menu ? "font-bold" : ""}`}
            >
              {menu}
            </button>
          );
        })}
      </section>
      <section className="card w-1/2 bg-white p-3 mb-3 flex gap-1">
        {isActive === "all" && (
          <CardHome title="All" data={dataCrypto ? dataCrypto : []} />
        )}
        {isActive === "latest" && <CoomingSoon />}
        {isActive === "favorite" && <CoomingSoon />}
        {isActive === "trending" && <CoomingSoon />}
        {isActive === "watchlist" && <CoomingSoon />}
        {isActive === "new" && <CoomingSoon />}
        {isActive === "support" && <Support />}
        {dataCrypto.length !== 0 && !isLoading && isActive === "all" && (
          <button className="btn btn-sm w-28 mt-2 mx-auto">Load more</button>
        )}
      </section>
    </section>
  );
};

export default HomeComponent;
