import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { brands } from "../assets";

const Brands = () => {
  return (
    <div className="global-padding w-full my-16 flex items-center justify-between gap-8 flex-wrap">
      {brands.map((brand, index) => (
        <div key={index} className="px-2 flex items-center">
          <img
            src={brand}
            alt={`Brand ${index}`}
            className="w-[130px] object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Brands;
