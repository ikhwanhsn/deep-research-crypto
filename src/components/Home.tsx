"use client";

import { useEffect, useState } from "react";
import CardHome from "./CardHome";
import CoomingSoon from "./CoomingSoon";
import useSWR from "swr";
import { fetcher } from "@/app/services/fetcher";
import Support from "./Support";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const [limit, setLimit] = useState(25);
  const [isActive, setIsActive] = useState("all");
  const [dataCrypto, setDataCrypto] = useState<any>([]);
  const [dataFilter, setDataFilter] = useState<any>([]);
  const [allCrypto, setAllCrypto] = useState([]);
  const [dataNotFound, setDataNotFound] = useState(false);
  const { data, error, isLoading } = useSWR(`/api/allTab/${limit}`, fetcher);
  useEffect(() => {
    if (data) {
      setDataCrypto([...data.data]);
      // setDataCrypto([...dataCrypto, ...data.data]);
    }
  }, [data]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/api/allCrypto");
      const data = await res.json();
      // console.log(data.cryptoName);
      setAllCrypto(data.cryptoName);
    };
    getData();
  }, []);
  // const handleInput = (e: any) => {
  //   const filter = dataCrypto.filter((crypto: any) => {
  //     return crypto.name.toLowerCase().includes(e.target.value.toLowerCase());
  //   });
  //   if (filter.length === 0) {
  //     setDataNotFound(true);
  //   } else {
  //     setDataNotFound(false);
  //   }
  //   setDataFilter(filter);
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const filter: any = allCrypto.filter((crypto: any) => {
      return crypto.name
        .toLowerCase()
        .includes(e.target[0].value.toLowerCase());
    });
    const cryptoID = filter[0].id;
    console.log(filter[0]);
    router.push(`/crypto/detail/${cryptoID}`);
  };

  const handleLoadmore = () => {
    setLimit(limit + 25);
  };

  return (
    <section className="flex flex-col justify-center items-center pt-20">
      <section className="w-full bg-gray-50 h-16 fixed top-0 z-20"></section>
      <form className="z-20 flex gap-1" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search here..."
          // onChange={(e) => handleInput(e)}
          list="crypto"
          required
          className="input bg-white border-2 border-gray-200 text-black"
        />
        <datalist id="crypto" className="w-full">
          {allCrypto.map((crypto: any) => {
            return (
              <option
                key={crypto.id}
                value={crypto.name}
                onSelect={() => alert("Not yet implemented")}
              />
            );
          })}
        </datalist>
        <button className="btn btn-primary text-white">Search</button>
      </form>
      <section className="flex gap-3 bg-gray-50 w-full justify-center py-3 sticky top-16 z-10">
        {homeMenu.map((menu) => {
          return (
            <button
              key={menu}
              onClick={() => setIsActive(menu)}
              className={`capitalize ${
                menu === "support" ? "text-green-600" : "text-black"
              } ${isActive === menu ? "font-bold" : ""}`}
            >
              {menu}
            </button>
          );
        })}
      </section>
      <section className="card w-1/2 bg-white p-3 mb-3 flex gap-1 shadow-sm">
        {dataNotFound && isActive === "all" && (
          <p className="text-center">Data not found</p>
        )}
        {isActive === "all" && isLoading && (
          <>
            <section className="w-full h-14 animate-pulse mb-1 bg-gray-200 rounded-2xl"></section>
            <section className="w-full h-14 animate-pulse mb-1 bg-gray-200 rounded-2xl"></section>
            <section className="w-full h-14 animate-pulse mb-1 bg-gray-200 rounded-2xl"></section>
            <section className="w-full h-14 animate-pulse mb-1 bg-gray-200 rounded-2xl"></section>
            <section className="w-full h-14 animate-pulse mb-1 bg-gray-200 rounded-2xl"></section>
            <section className="w-full h-14 animate-pulse mb-1 bg-gray-200 rounded-2xl"></section>
            <section className="w-full h-14 animate-pulse mb-1 bg-gray-200 rounded-2xl"></section>
            <section className="w-full h-14 animate-pulse mb-1 bg-gray-200 rounded-2xl"></section>
            <section className="w-full h-14 animate-pulse mb-1 bg-gray-200 rounded-2xl"></section>
            <section className="w-full h-14 animate-pulse mb-1 bg-gray-200 rounded-2xl"></section>
          </>
        )}
        {isActive === "all" && !dataNotFound && (
          <CardHome
            title="All"
            data={dataFilter.length > 0 ? dataFilter : dataCrypto}
          />
        )}
        {isActive === "latest" && <CoomingSoon />}
        {isActive === "favorite" && <CoomingSoon />}
        {isActive === "trending" && <CoomingSoon />}
        {isActive === "watchlist" && <CoomingSoon />}
        {isActive === "new" && <CoomingSoon />}
        {isActive === "support" && <Support />}
        {dataCrypto.length > 0 && isActive === "all" && (
          <button
            onClick={handleLoadmore}
            className={`btn btn-sm w-28 mt-2 mx-auto text-white bg-black`}
          >
            {isLoading ? "Loading..." : "Load more"}
          </button>
        )}
      </section>
    </section>
  );
};

export default HomeComponent;
