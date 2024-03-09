"use client";

import { getMetadataCrypto } from "@/app/services/getMetadataCrypto";
import CryptoDetail from "@/components/CryptoDetail";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CryptoDetailPage = () => {
  const { id }: any = useParams();
  const [metadaCrypto, setMetadaCrypto] = useState<any>([]);

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
      <section className="w-1/2 mx-auto">
        <Link href="/home" className="btn btn-sm w-18 text-white bg-black">
          {`<`} Back
        </Link>
      </section>
      {/* {metadaCrypto.website &&
        metadaCrypto.website.map((item: any) => {
          return <h1 key={item}>{item}</h1>;
        })} */}
      <section className="w-1/2 card mt-3 bg-white mx-auto py-3 px-4">
        <CryptoDetail id={id} web={metadaCrypto ? metadaCrypto : []} />
      </section>
    </main>
  );
};

export default CryptoDetailPage;
