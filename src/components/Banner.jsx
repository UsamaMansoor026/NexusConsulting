import React from "react";
import bg from "../assets/section_bg03.webp";

const Banner = () => {
  return (
    <div
      className="global-padding
      flex flex-col gap-7 md:flex-row items-start md:items-center justify-between mt-16 py-[90px] font-roboto"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="xsm:text-2xl sm:text-4xl md:text-3xl lg:text-5xl text-white font-semibold leading-[1.5] w-full md:w-[70%]">
        Are you Searching
        <br /> For a First-Class Consultant?
      </h2>

      <div className="w-full md:w-[30%] flex justify-start md:justify-end">
        <button
          type="button"
          className="text-white bg-actualblack/80 text-[13px] md:text-base uppercase z-10 py-4 px-11 cursor-pointer relative duration-500 after:absolute after:inset-0 after:-z-10 after:duration-500 after:bg-white after:w-0 hover:after:w-full hover:text-actualblack"
        >
          More About Us
        </button>
      </div>
    </div>
  );
};

export default Banner;
