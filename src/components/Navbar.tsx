"use client";

import Image from "next/image";
import logo from "../../public/img/logo_brand.jpeg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-44 h-16 items-center bg-black text-white fixed top-0 w-full z-30">
      <section className="flex gap-2 items-center justify-center">
        <Image src={logo} alt="logo" width={45} height={45} />
        <Link href="/" className="text-xl font-bold">
          DR Crypto
        </Link>
      </section>
      <button
        className="btn bg-gray-50 text-black hover:bg-gray-200"
        onClick={() => alert("Not yet implemented")}
      >
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
