import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ key, data }) => {
  return (
    <motion.article
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay: data.id * 0.1 }}
      key={key}
      className="service-card duration-150"
    >
      {/* Icon */}
      <div className="text-center mb-4 text-pinkish-600">
        <data.icon sx={{ fontSize: 65 }} />
      </div>

      <div className="text-center">
        <h3 className="font-sarabun font-semibold text-[22px] text-card-heading mb-5">
          {data.title}
        </h3>
        <p className="text-gray font-poppins mb-4 text-[14px] leading-[1.7]">
          {data.desc}
        </p>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
