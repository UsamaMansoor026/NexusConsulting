import React from "react";
import heroBg from "../assets/heroBg.jpg";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="h-[95vh] global-padding flex items-center"
      style={{
        background: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[700px] pl-[30px] lg:pl-[100px] md:pl-[50px]">
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            subHeading="committed to success"
            primary={true}
            heading="We help to grow your business"
            className="text-actualblack mb-[33px]"
          />
        </motion.div>

        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-10 text-lg max-w-[80%]"
        >
          Transforming challenges into opportunities with tailored strategies
          that fuel success.
        </motion.p>

        <motion.a
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          href="#services"
          className="py-4 px-9 uppercase bg-pinkish-600 border border-pinkish-600 text-white font-semibold duration-150 hover:bg-transparent hover:text-pinkish-600 hover:shadow-2xs hover:shadow-pinkish-600"
        >
          Our Services
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
