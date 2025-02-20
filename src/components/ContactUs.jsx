import React from "react";
import bg from "../assets/section_bg04.webp";
import { ContactForm, SectionHeading } from "./index";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="global-padding py-16"
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SectionHeading
        primary={false}
        heading="Get In Touch"
        subHeading="Contact our team"
        className="text-white"
      />

      <ContactForm />
    </section>
  );
};

export default ContactUs;
