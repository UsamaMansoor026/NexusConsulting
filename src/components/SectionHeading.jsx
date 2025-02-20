import React from "react";

const SectionHeading = ({ subHeading, heading, primary, className }) => {
  return (
    <div>
      <h3 className="text-pinkish-400 text-base md:text-lg uppercase font-roboto font-semibold pl-[90px] relative mb-[22px] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:bg-pinkish-400 before:w-[70px] before:h-[3px]">
        {subHeading}
      </h3>

      <h1
        className={`${
          primary
            ? "lg:text-[71px] md:text-[60px] text-[40px]"
            : "lg:text-[50px] text-[40px] text-primary"
        } ${className} font-sarabun font-extrabold leading-[1.1]`}
      >
        {heading}
      </h1>
    </div>
  );
};

export default SectionHeading;
