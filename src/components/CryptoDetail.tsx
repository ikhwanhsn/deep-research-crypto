"use client";

import { useEffect, useState } from "react";
import CoomingSoon from "./CoomingSoon";
import { TbWorld } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import coinGecko from "../../public/img/coingecko.png";
import Image from "next/image";

const menuDetail = ["description", "tokenomics", "research", "others"];

const CryptoDetail = ({ id, web }: any) => {
  const [isActive, setIsActive] = useState("description");
  const [cryptoData, setCryptoData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:3000/api/tokenByID/${id}`);
      const data = await res.json();
      const result = data.response[id];
      console.log(data.response[id]);
      setCryptoData(result);
    };
    getData();
  }, []);
  return (
    <>
      <section className="flex justify-between items-center">
        <section className="flex gap-3">
          <Image
            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
            alt="logo"
            width={45}
            height={45}
            className="w-24 h-24 rounded-full"
          />
          <section className="flex flex-col gap-2 mt-2">
            <section className="flex gap-2 text-3xl">
              <h3>{cryptoData?.name}</h3>
              <p className="opacity-50">{cryptoData?.symbol}</p>
            </section>
            <section className="flex gap-3 items-center">
              <a href="" target="_blank">
                <TbWorld className="scale-[1.5] hover:scale-[1.6]" />
              </a>
              <a href="" target="_blank">
                <FaXTwitter className="scale-[1.4] hover:scale-[1.5]" />
              </a>
              <a href="" target="_blank">
                <FaTelegramPlane className="scale-[1.5] hover:scale-[1.6]" />
              </a>
              <a
                href={`https://coinmarketcap.com/id/currencies/${cryptoData?.name.replace(
                  /\s+/g,
                  "-"
                )}`}
                className="ml-1"
                target="_blank"
              >
                <SiCoinmarketcap className="scale-[1.4] hover:scale-[1.5]" />
              </a>
              <a
                href={`https://www.coingecko.com/id/koin_koin/${cryptoData?.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                target="_blank"
              >
                <Image
                  src={coinGecko}
                  alt="coinGecko"
                  width={23}
                  height={23}
                  className="hover:scale-[1.04]"
                />
              </a>
            </section>
          </section>
        </section>
        <section className="flex flex-col gap-2 items-center justify-center">
          <h3 className="text-4xl">{cryptoData?.quote.USD.price}</h3>
          <section className="flex gap-1">
            <p>{cryptoData?.quote.USD.percent_change_1h}%</p>
            <p>{cryptoData?.quote.USD.percent_change_24h}%</p>
            <p>{cryptoData?.quote.USD.percent_change_7d}%</p>
          </section>
        </section>
      </section>
      <section className="flex gap-2 mt-5">
        {menuDetail.map((menu) => {
          return (
            <button
              className={`capitalize ${isActive === menu ? "font-bold" : ""}`}
              onClick={() => setIsActive(menu)}
            >
              {menu}
            </button>
          );
        })}
      </section>
      <hr className="my-1 border" />
      <section className="mt-1">
        {isActive === "description" && <MenuActive title="description" />}
        {isActive === "tokenomics" && <MenuActive title="tokenomics" />}
        {isActive === "research" && <CoomingSoon />}
        {isActive === "others" && <CoomingSoon />}
      </section>
    </>
  );
};

export default CryptoDetail;

const MenuActive = ({ title }: { title: string }) => {
  return (
    <section className="text-sm">
      {title === "description" && (
        <section>
          <h5 className="font-bold">What is Bitcoin?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at
            vitae magni quasi rerum ipsum. Voluptatibus ut illo autem hic
            reiciendis, commodi officia quae nesciunt corporis adipisci ipsum.
            Facere labore dolorem voluptate in iure eligendi ut expedita debitis
            perspiciatis aliquid eveniet, magnam quaerat recusandae. Rem quidem
            quo accusamus? Amet, adipisci!
          </p>
          <h5 className="font-bold mt-2">Technology</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at
            vitae magni quasi rerum ipsum. Voluptatibus ut illo autem hic
            reiciendis, commodi officia quae nesciunt corporis adipisci ipsum.
            Facere labore dolorem voluptate in iure eligendi ut expedita debitis
            perspiciatis aliquid eveniet, magnam quaerat recusandae. Rem quidem
            quo accusamus? Amet, adipisci!
          </p>
          <h5 className="font-bold mt-2">Founder</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at
            vitae magni quasi rerum ipsum. Voluptatibus ut illo autem hic
            reiciendis, commodi officia quae nesciunt corporis adipisci ipsum.
            Facere labore dolorem voluptate in iure eligendi ut expedita debitis
            perspiciatis aliquid eveniet, magnam quaerat recusandae. Rem quidem
            quo accusamus? Amet, adipisci!
          </p>
          <h5 className="font-bold mt-2">Use Case</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at
            vitae magni quasi rerum ipsum. Voluptatibus ut illo autem hic
            reiciendis, commodi officia quae nesciunt corporis adipisci ipsum.
            Facere labore dolorem voluptate in iure eligendi ut expedita debitis
            perspiciatis aliquid eveniet, magnam quaerat recusandae. Rem quidem
            quo accusamus? Amet, adipisci!
          </p>
          <h5 className="font-bold mt-2">Potential</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod at
            vitae magni quasi rerum ipsum. Voluptatibus ut illo autem hic
            reiciendis, commodi officia quae nesciunt corporis adipisci ipsum.
            Facere labore dolorem voluptate in iure eligendi ut expedita debitis
            perspiciatis aliquid eveniet, magnam quaerat recusandae. Rem quidem
            quo accusamus? Amet, adipisci!
          </p>
        </section>
      )}
      {title === "tokenomics" && (
        <section>
          <h5 className="font-bold">Supply</h5>
          <section className="mt-3 flex gap-14">
            <div
              className="radial-progress scale-[1.5] my-5 ml-12 bg-gray-100 text-gray-700 border-4 border-gray-200"
              style={{ "--value": 70 }}
              role="progressbar"
            >
              70%
            </div>
            <section className="flex flex-col gap-3 mt-4">
              <p>Total supply : 1,000,000</p>
              <p>Circulating supply : 500,000</p>
              <p>Remaining supply : 500,000</p>
            </section>
          </section>
          <h5 className="font-bold mt-3">Data</h5>
          <section className="mt-2 space-y-1">
            <p>Marketcap : 1,000,000</p>
            <p>Volume : 1,000,000</p>
            <p>Change volume : 1,000,000</p>
          </section>
          <h5 className="font-bold mt-3">Metrics</h5>
          <section className="mt-2 space-y-1">
            <p>Fixed supply</p>
            <p>Circulating supply {`>`} 90%</p>
            <p>Remaining supply</p>
          </section>
        </section>
      )}
    </section>
  );
};
