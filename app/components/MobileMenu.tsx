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
        {isOpen ? (
          <div>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8682 30.1316L30.1316 13.8681"
                stroke="white"
                stroke-linecap="round"
              />
              <path
                d="M13.8682 13.8682L30.1316 30.1316"
                stroke="white"
                stroke-linecap="round"
              />
            </svg>
          </div>
        ) : (
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
        <div className="bg-black absolute top-0 left-0 w-full h-screen flex flex-col items-center">
          <div className="p-4">
            <Link href="/">
              <Image src="/Logo.png" width={273} height={35} alt="Logo" />
            </Link>
          </div>
          <nav className="space-y-4 mt-8 text-white flex flex-col">
            <Link href="#">Advantages</Link>
            <Link href="#">Numbers</Link>
            <Link href="#">FAQ</Link>
            {/* Добавьте другие ссылки, если необходимо */}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
