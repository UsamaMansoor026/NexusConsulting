import React from "react";
import {
  About,
  Banner,
  Brands,
  CaseStudy,
  ContactUs,
  Hero,
  Services,
  Team,
  Testimonials,
} from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CaseStudy />
      <Testimonials />
      <Team />
      <Banner />
      <ContactUs />
      <Brands />
    </>
  );
};

export default Home;
