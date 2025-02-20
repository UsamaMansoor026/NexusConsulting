import React from "react";
import aboutBg from "../assets/section_bg02.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="global-padding py-16 flex flex-col lg:flex-row items-start justify-between gap-16"
      style={{
        background: `url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mission */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title */}
        <h3 className="text-white md:text-primary font-sarabun text-4xl capitalize font-semibold pl-[90px] relative mb-[22px] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:bg-white md:before:bg-primary before:w-[70px] before:h-[3px]">
          Our Mission
        </h3>
        <p className="text-white font-roboto text-[15px] mb-4 leading-[1.7]">
          At our consulting firm, our mission is to empower businesses with
          innovative, tailored web solutions that drive growth, streamline
          operations, and elevate online presence. We are dedicated to
          transforming complex challenges into clear, actionable strategies by
          combining technical expertise, creative design, and market insights.
        </p>
        <p className="text-white font-roboto text-[15px] leading-[1.7]">
          Our approach ensures every client receives a customized digital
          roadmap that not only meets today's demands but also paves the way for
          future success.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        {/* Title */}
        <h3 className="text-white md:text-primary lg:text-white font-sarabun text-4xl capitalize font-semibold pl-[90px] relative mb-[22px] before:absolute before:left-0 before:top-[50%] before:translate-y-[-50%] before:bg-white md:before:bg-primary lg:before:bg-white before:w-[70px] before:h-[3px]">
          Our Vision
        </h3>
        <p className="text-white font-roboto text-[15px] mb-4 leading-[1.7]">
          We envision a future where every business, regardless of size, thrives
          in a dynamic digital landscape by leveraging cutting-edge technology
          and agile strategies. Our aim is to become the trusted leader in
          digital transformation, fostering lasting partnerships and inspiring
          progress in an ever-evolving marketplace.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
