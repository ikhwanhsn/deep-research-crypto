"use client";

import { useState } from "react";
import CoomingSoon from "./CoomingSoon";

const menuDetail = ["description", "tokenomics", "research", "others"];

const CryptoDetail = () => {
  const [isActive, setIsActive] = useState("description");
  return (
    <>
      <section className="flex justify-between items-center">
        <section className="flex gap-3">
          <p className="w-24 h-24 rounded-full bg-gray-300"></p>
          <section className="flex flex-col gap-2 mt-2">
            <section className="flex gap-2 text-3xl">
              <h3>Bitcoin</h3>
              <p className="opacity-50">BTC</p>
            </section>
            <section className="flex gap-2">
              <p className="h-8 w-8 bg-gray-300 rounded-full"></p>
              <p className="h-8 w-8 bg-gray-300 rounded-full"></p>
              <p className="h-8 w-8 bg-gray-300 rounded-full"></p>
              <p className="h-8 w-8 bg-gray-300 rounded-full"></p>
              <p className="h-8 w-8 bg-gray-300 rounded-full"></p>
            </section>
          </section>
        </section>
        <section className="flex flex-col gap-2 items-center justify-center">
          <h3 className="text-4xl">$234.09</h3>
          <section className="flex gap-1">
            <p>-0.21%</p>
            <p>-0.21%</p>
            <p>-0.21%</p>
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
