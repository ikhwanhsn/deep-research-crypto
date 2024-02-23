"use client";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-44 h-16 items-center bg-black text-white fixed top-0 w-full z-30">
      <h1 className="text-xl font-bold">DR Crypto</h1>
      <button className="btn" onClick={() => alert("Not yet implemented")}>
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
