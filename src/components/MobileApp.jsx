import React from "react";

const MobileApp = () => {
  return (
    <div className="pb-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-primary-brand-color bg-mobile-app rounded-lg text-white">
        <div className="flex flex-col gap-y-3 p-10 text-center md:text-left">
          <h3 className="text-2xl font-bold">Getir'i indirin!</h3>
          <p className="font-semibold">
            İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
          </p>
          <nav className="mt-5 flex flex-wrap md:flex-nowrap justify-center gap-2">
            <a href="http://localhost:3000">
              <img
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                alt="mobile-app"
              />
            </a>
            <a href="http://localhost:3000">
              <img
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                alt="mobile-app"
              />
            </a>
            <a href="http://localhost:3000">
              <img
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                alt="mobile-app"
              />
            </a>
          </nav>
        </div>
        <picture className="pt-6 hidden md:block md:self-end">
          <img
            src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
            alt="mobile-app"
          />
        </picture>
      </div>
    </div>
  );
};

export default MobileApp;
