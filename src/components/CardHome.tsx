"use client";

import { formatCryptoNumber } from "@/services/formatCrypto";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CardHome = ({ title, data }: { title: string; data: any }) => {
  return (
    <>
      {data.length > 0 &&
        data.map((item: any) => (
          <CryptoCard
            key={item.id}
            id={item.id}
            rank={item.cmc_rank}
            title={item.name}
            logo={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`}
            symbol={item.symbol}
            price={item.quote.USD.price}
            change={item.quote.USD.percent_change_24h}
          />
        ))}
    </>
  );
};

export default CardHome;

type CryptoCardProps = {
  id: number;
  rank: number;
  title: string;
  logo: string;
  symbol: string;
  price: string;
  change: string;
};

const CryptoCard = ({
  id,
  rank,
  title,
  logo,
  symbol,
  price,
  change,
}: CryptoCardProps) => {
  const router = useRouter();
  return (
    <section
      className="card border shadow-sm py-2 px-3 flex flex-row justify-between items-center cursor-pointer hover:bg-gray-50"
      onClick={() => router.push(`/crypto/detail/${id}`)}
    >
      <section className="flex gap-2 justify-center items-center text-black">
        <p className="opacity-75 text-sm">#{rank}</p>
        <Image
          src={logo}
          alt={title}
          width={40}
          height={40}
          className="rounded-full"
        />
        <h4>{title}</h4>
        <p className="opacity-50">{symbol}</p>
      </section>
      <section className="flex gap-2 text-black">
        <p>${formatCryptoNumber(Number(price))}</p>
        <p
          className={`${
            Number(change) < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {Number(change).toFixed(2)}%
        </p>
      </section>
    </section>
  );
};
