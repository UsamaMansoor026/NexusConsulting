import React from "react";
import { SectionHeading, TestimonialCarousal } from "./index";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="global-padding mb-10" id="reviews">
      <SectionHeading
        primary={false}
        subHeading="out clients"
        heading="Satisfied Clients"
      />

      <TestimonialCarousal />

      {/* Acheivements */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-5 mt-8">
        {/* Projects completed */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="border border-pinkish-600 py-11 px-3 text-center rounded-sm duration-200 hover:shadow-md hover:shadow-pinkish-600"
        >
          <h2 className="text-[60px] font-roboto mb-3 text-pinkish-600">
            8705
          </h2>
          <p className="text-gray font-poppins text-lg">Projects Completed</p>
        </motion.div>
        {/* Active Clients */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border border-pinkish-600 py-11 px-3 text-center rounded-sm duration-200 hover:shadow-md hover:shadow-pinkish-600"
        >
          <h2 className="text-[60px] font-roboto mb-3 text-pinkish-600">480</h2>
          <p className="text-gray font-poppins text-lg">Active Clients</p>
        </motion.div>
        {/* Happy Clients */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="border border-pinkish-600 py-11 px-3 text-center rounded-sm duration-200 hover:shadow-md hover:shadow-pinkish-600"
        >
          <h2 className="text-[60px] font-roboto mb-3 text-pinkish-600">
            8000
          </h2>
          <p className="text-gray font-poppins text-lg">Happy Clients</p>
        </motion.div>
      </section>
    </section>
  );
};

export default Testimonials;
