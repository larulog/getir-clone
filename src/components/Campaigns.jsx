import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useWindowWidth } from "@react-hook/window-size";

const Campaigns = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const windowWidth = useWindowWidth();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
        onClick={onClick}
      >
        <IoIosArrowForward size={22} />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
        onClick={onClick}
      >
        <IoIosArrowBack size={22} />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-0 md:pb-8">
      {windowWidth >= 768 && <Title>Kampanyalar</Title>}
      <Slider {...settings} className="md:-mx-2">
        {banners.length &&
          banners.map((banner, index) => (
            <div key={index}>
              <picture className="block md:px-2">
                <img
                  src={banner.image}
                  alt="campaign"
                  className="md:rounded-lg"
                />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Campaigns;
