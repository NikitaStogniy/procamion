import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Logo */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src="/Logo.png" // Replace with your logo path
            alt="Logo"
            className="mx-auto w-32"
          />
        </div>

        {/* Columns for links */}
        <div className="w-full md:w-1/2 md:flex md:justify-between">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-white mb-2">Shipper & Carrier</h4>
            <ul className="text-gray-500">
              <li>
                <a href="#">Registration</a>
              </li>
              <li>
                <a href="#">Advantages</a>
              </li>
              <li>
                <a href="#">Join us</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-white mb-2">Customer Service</h4>
            <ul className="text-gray-500">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/3">
            <h4 className="text-white mb-2">Transport companies</h4>
            <ul className="text-gray-500">
              <li>
                <a href="#">Cooperation</a>
              </li>
              <li>
                <a href="#">Special conditions</a>
              </li>
              <li>
                <a href="#">Commercial offer</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
