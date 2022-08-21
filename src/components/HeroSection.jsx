import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook } from "react-icons/fa";
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from "@react-hook/window-size";

const HeroSection = () => {
  const [selected, setSelected] = useState("TR");

  const windowWith = useWindowWidth();

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 3500,
  };

  const phones = {
    TR: "+90",
    US: "+1",
    DE: "+50",
    IT: "+7",
    IN: "+15",
    NL: "+31",
  };

  return (
    <div className="relative h-auto md:h-[500px] before:absolute before:inset-0 before:w-full before:h-full before:z-10 before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent">
      {windowWith >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
              alt="slider-img"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com//_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
              alt="slider-img"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
              alt="slider-img"
            />
          </div>
        </Slider>
      )}
      <div className="md:container flex items-center justify-between relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
        <div className="hidden md:block">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt="hero-logo"
            className="h-60 w-60"
          />
          <h3 className="text-4xl mt-8 font-semibold mb-4 text-white">
            Dakikalar içinde <br />
            kapınızda <br />
          </h3>
        </div>
        <div className="w-full md:w-[500px] md:rounded-lg bg-white p-6">
          <h4 className="text-primary-brand-color text-center font-semibold mb-4">
            Giriş yap veya kayıt ol!
          </h4>
          <div className="flex gap-x-2">
            <ReactFlagsSelect
              className="flag-select"
              countries={Object.keys(phones)}
              customLabels={phones}
              selected={selected}
              onSelect={(code) => setSelected(code)}
            />
            <div className="flex-1">
              <input
                type="tel"
                maxlength="10"
                className="h-14 px-4 border-2 rounded w-full outline-none focus:border-primary-brand-color hover:border-primary-brand-color"
                placeholder="Telefon Numarası"
              />
            </div>
          </div>
          <button className="bg-brand-yellow text-primary-brand-color transition-all hover:bg-primary-brand-color hover:text-brand-yellow font-semibold w-full p-5 outline-none mt-2 rounded-lg">
            Telefon numarası ile devam et
          </button>
          <hr className="h-[1px] bg-gray-400 my-3" />
          <button className="flex items-center bg-blue-900 bg-opacity-10 text-blue-700 text-opacity-80 transition-all hover:bg-blue-700 hover:text-white font-semibold w-full p-5 outline-none rounded-lg">
            <FaFacebook size={24} className="mr-2" />
            <span className="mx-auto">Facebook ile devam et</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
