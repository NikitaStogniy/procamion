"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex w-[48px] h-[48px] mr-4 lg:hidden z-40">
      <button
        className="text-white p-2 focus:outline-none absolute z-50"
        onClick={toggleMenu}
      >
        {!isOpen && (
          <div>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.5 16.5H33.5" stroke="white" stroke-linecap="round" />
              <path d="M10.5 22.5H33.5" stroke="white" stroke-linecap="round" />
              <path d="M13 28.5H31" stroke="white" stroke-linecap="round" />
            </svg>
          </div>
        )}
      </button>
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="bg-black/30 absolute w-full h-screen top-0 left-0 backdrop-blur-lg"
        >
          <div className="bg-[#1D1D1B] absolute top-8 right-0 w-fit h-fit px-8 py-4 m-4 rounded-xl flex flex-col items-center">
            <nav className="space-y-4 text-white flex flex-col">
              <Link href="#advantages">Advantages</Link>
              <Link href="#numbers">Numbers</Link>
              <Link href="#faq">FAQ</Link>
              <div className="text-white/30">Language (En)</div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
