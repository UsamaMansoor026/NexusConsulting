import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.form
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col gap-7 font-roboto text-white mt-10 max-w-3xl mx-auto duration-300 p-5 hover:shadow hover:shadow-white"
    >
      {/* Input Field Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Maan Mansoor"
          required
          className="border-b border-white outline-none py-2 px-3 focus:border-pinkish-600"
        />
      </div>

      {/* Input Field Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmai.com"
          required
          className="border-b border-white outline-none py-2 px-3 focus:border-pinkish-600"
        />
      </div>

      {/* Input Field Subject */}
      <div className="flex flex-col gap-1">
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="What's the purpose..."
          required
          className="border-b border-white outline-none py-2 px-3 focus:border-pinkish-600"
        />
      </div>

      {/* Input Field Message */}
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          placeholder="Briefly describe your message..."
          required
          className="border-b border-white outline-none py-2 px-3 min-h-[140px] focus:border-pinkish-600"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="border border-pinkish-600 py-1.5 px-12 duration-300 hover:bg-pink-600 hover:text-white cursor-pointer outline-none"
        >
          Send Message
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
