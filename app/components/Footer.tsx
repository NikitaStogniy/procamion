import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6 px-4">
      <div className="container mx-auto flex flex-col justify-between md:flex-row mb-4">
        {/* Logo */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Image
            width={300}
            height={200}
            src="/Logo.png" // Replace with your logo path
            alt="Logo"
          />
        </div>

        {/* Columns for links */}
        <div className="w-full md:w-1/2 md:flex md:justify-end">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-white mb-2">Shipper & Carrier</h4>
            <ul className="text-gray-500 flex flex-col gap-1">
              <Link href="#advantages">Advantages</Link>
              <Link href="#numbers">Numbers</Link>
              <Link href="#faq">FAQ</Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border-t-2 border-gray-900 text-gray-600 p-4 flex items-center align-center justify-center md:justify-end">
        <p>«Procamion» © 2022–2023 </p>
      </div>
    </footer>
  );
};

export default Footer;
