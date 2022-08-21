import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

import React from "react";

const Info = () => {
  return (
    <div className="flex flex-row justify-between items-center border-t border-gray-100 mt-6 py-6 bg-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 justify-between items-center">
          <div className="text-xs text-gray-700 flex gap-x-3">
            &copy; 2021 Getir
            <a
              href="http://localhost:3000"
              className="text-primary-brand-color hover:underline"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-3">
            <a
              href="http://localhost:3000"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center"
            >
              <FaFacebook size={21} />
            </a>
            <a
              href="http://localhost:3000"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center"
            >
              <FaTwitter size={21} />
            </a>
            <a
              href="http://localhost:3000"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center"
            >
              <FaInstagram size={21} />
            </a>
            <a
              href="http://localhost:3000"
              className="h-8 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent flex items-center px-2 text-sm gap-x-2 rounded text-gray-500 border border-gray-100"
            >
              <BiGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Info;
