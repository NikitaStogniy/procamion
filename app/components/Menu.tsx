"use client";
import Image from "next/image";
import Link from "next/link";
import {
  useScreenSizeCategory,
  ScreenSizeCategory,
} from "../lib/hooks/useScreenSize";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  const screenSizeCategory = useScreenSizeCategory();
  const isMobile = screenSizeCategory === ScreenSizeCategory.Mobile;

  return (
    <div className="bg-black rounded-b-xl h-[80px] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="text-white text-xl font-bold">
          <Link href="/">
            <Image src="/Logo.png" width={273} height={35} alt="Logo" />
          </Link>
        </div>
        {isMobile ? (
          <MobileMenu />
        ) : (
          <div className="space-x-6 text-white">
            <Link href="#">Advantages</Link>
            <Link href="#">Numbers</Link>
            <Link href="#">FAQ</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
