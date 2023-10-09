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
          <div className="space-x-6 text-white relative lg:absolute text-center w-full lg:w-[82%]">
            <Link href="#advantages">Advantages</Link>
            <Link href="#numbers">Numbers</Link>
            <Link href="#faq">FAQ</Link>
          </div>
        )}
        {!isMobile && (
          <div className="text-white flex flex-row justify-center items-center align-center gap-2">
            <Image
              className="rounded-full"
              width={24}
              height={24}
              src={"/en.jpg"}
              alt={"en"}
            />
            EN
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
