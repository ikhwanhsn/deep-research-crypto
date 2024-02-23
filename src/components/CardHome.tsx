"use client";

import { useRouter } from "next/navigation";

const CardHome = ({ title }: { title: string }) => {
  return (
    <>
      <CryptoCard title="Bitcoin" />
      <CryptoCard title="Bitcoin" />
      <CryptoCard title="Bitcoin" />
      <CryptoCard title="Bitcoin" />
      <CryptoCard title="Bitcoin" />
      <CryptoCard title="Bitcoin" />
      <CryptoCard title="Bitcoin" />
      <CryptoCard title="Bitcoin" />
      <CryptoCard title="Bitcoin" />
      <CryptoCard title="Bitcoin" />
      <button className="btn btn-sm w-28 mt-2 mx-auto">Load more</button>
    </>
  );
};

export default CardHome;

const CryptoCard = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <section
      className="card border shadow-sm py-2 px-3 flex flex-row justify-between items-center cursor-pointer hover:bg-gray-50"
      onClick={() => router.push("/crypto/detail")}
    >
      <section className="flex gap-2 justify-center items-center">
        <p className="w-10 h-10 rounded-full bg-gray-300"></p>
        <h4>{title}</h4>
        <p>BTC</p>
      </section>
      <section>
        <p>$234.09 -0.21%</p>
      </section>
    </section>
  );
};
