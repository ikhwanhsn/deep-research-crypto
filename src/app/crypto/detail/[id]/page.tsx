"use client";

import { getMetadataCrypto } from "@/app/services/getMetadataCrypto";
import CryptoDetail from "@/components/CryptoDetail";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdPlaylistAdd, MdPlaylistAddCheck } from "react-icons/md";

const CryptoDetailPage = () => {
  const { id }: any = useParams();
  const [metadaCrypto, setMetadaCrypto] = useState<any>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWaitlist, setIsWaitlist] = useState(false);

  useEffect(() => {
    const metadata = async () => {
      const data = await getMetadataCrypto(id);
      console.log(data);
      setMetadaCrypto(data);
    };
    metadata();
  }, []);
  useEffect(() => {
    if (metadaCrypto.length > 0) {
      console.log(metadaCrypto.website[0]);
    }
  }, [metadaCrypto]);
  return (
    <main className="pt-20 bg-gray-50">
      <section className="w-1/2 mx-auto flex justify-between items-center">
        <Link href="/home" className="btn btn-sm w-18 text-white bg-black">
          {`<`} Back
        </Link>
        <aside className="flex items-center gap-1">
          {isFavorite && (
            <button
              className="btn btn-sm w-18 text-white bg-black"
              onClick={() => setIsFavorite(false)}
              title="Favorite"
            >
              <FaStar size={17} />
            </button>
          )}
          {!isFavorite && (
            <button
              className="btn btn-sm w-18 text-white bg-black"
              onClick={() => setIsFavorite(true)}
              title="Favorite"
            >
              <FaRegStar size={17} />
            </button>
          )}
          {isWaitlist && (
            <button
              className="btn btn-sm w-18 text-white bg-black"
              onClick={() => setIsWaitlist(false)}
              title="Waitlist"
            >
              <MdPlaylistAddCheck size={22} />
            </button>
          )}
          {!isWaitlist && (
            <button
              className="btn btn-sm w-18 text-white bg-black"
              onClick={() => setIsWaitlist(true)}
              title="Waitlist"
            >
              <MdPlaylistAdd size={22} />
            </button>
          )}
        </aside>
      </section>
      <section className="w-1/2 card mt-3 bg-white mx-auto py-3 px-4">
        <CryptoDetail id={id} web={metadaCrypto ? metadaCrypto : []} />
      </section>
    </main>
  );
};

export default CryptoDetailPage;
