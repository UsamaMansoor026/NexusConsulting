import React from "react";
import { SectionHeading } from "./index";
import { caseStudy } from "../assets";
import { article } from "framer-motion/client";

const CaseStudy = () => {
  return (
    <section className="global-padding py-16">
      <SectionHeading
        primary={false}
        subHeading="our postfolios of cases"
        heading="Featured Case Study"
      />

      {/* Case studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-7">
        {caseStudy?.length > 0 &&
          caseStudy.map((item) => (
            <article key={item.id} className="relative mb-9">
              <img src={item.image} alt="" className="w-full" />

              <div className="bg-white absolute -bottom-3 px-5 py-2 xsm:max-w-[95%] sm:max-w-[85%] md:max-w-[95%] lg:max-w-[85%]">
                <h3 className="text-pinkish-400 text-base lg:text-lg font-roboto pl-[70px] relative before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:bg-pinkish-400 before:w-[50px] before:h-[1px]">
                  {item.title}
                </h3>

                <p className="text-lg md:text-sm lg:text-lg text-primary">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default CaseStudy;
