import React from "react";
import { SectionHeading, ServiceCard } from "./index";
import { services } from "../assets";

const Services = () => {
  return (
    <section id="services" className="global-padding py-8">
      <SectionHeading
        primary={false}
        subHeading="our top services"
        heading="Our Best Services"
      />

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-9">
        {services?.length > 0 &&
          services.map((service) => {
            return <ServiceCard key={service.id} data={service} />;
          })}
      </div>
    </section>
  );
};

export default Services;
