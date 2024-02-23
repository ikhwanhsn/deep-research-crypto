import CryptoDetail from "@/components/CryptoDetail";
import Link from "next/link";

const CryptoDetailPage = () => {
  return (
    <main className="pt-20 bg-gray-50">
      <section className="w-1/2 mx-auto">
        <Link href="/home" className="btn btn-sm w-18">
          {`<`} Back
        </Link>
      </section>
      <section className="w-1/2 card mt-3 bg-white mx-auto py-3 px-4">
        <CryptoDetail />
      </section>
    </main>
  );
};

export default CryptoDetailPage;
