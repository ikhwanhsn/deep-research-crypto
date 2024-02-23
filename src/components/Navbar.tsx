"use client";

import Image from "next/image";
import logo from "../../public/img/logo_brand.jpeg";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-44 h-16 items-center bg-black text-white fixed top-0 w-full z-30">
      <section className="flex gap-2 items-center justify-center">
        <Image src={logo} alt="logo" width={47} height={47} />
        <a href="/">
          <h1 className="text-xl font-bold">DR Crypto</h1>
        </a>
      </section>
      <button className="btn" onClick={() => alert("Not yet implemented")}>
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
