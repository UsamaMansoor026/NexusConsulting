import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* Material Icons */
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  return (
    <header>
      {/* Top Header */}
      <div className="bg-primary text-white global-padding py-4 flex items-center justify-between xsm:hidden md:flex">
        {/* Opening hours and days */}
        <div className="uppercase text-[12px] flex items-center font-roboto font-light">
          <AccessTimeOutlinedIcon
            sx={{ fontSize: "14px" }}
            className="text-pink-400"
          />
          <p className="ml-2">Mon - SAT: 6.00 am - 10.00 pm</p>
          <p className="ml-5">Sun: Closed</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0 }}
            className="cursor-pointer duration-200 hover:rotate-y-[180deg] hover:text-pink-400"
          >
            <FacebookIcon sx={{ fontSize: "20px" }} />
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="cursor-pointer duration-200 hover:rotate-y-[180deg] hover:text-pink-400"
          >
            <InstagramIcon sx={{ fontSize: "20px" }} />
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="cursor-pointer duration-200 hover:rotate-y-[180deg] hover:text-pink-400"
          >
            <LinkedInIcon sx={{ fontSize: "20px" }} />
          </motion.span>
          <motion.span
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.45 }}
            className="cursor-pointer duration-200 hover:rotate-y-[180deg] hover:text-pink-400"
          >
            <XIcon sx={{ fontSize: "20px" }} />
          </motion.span>
        </div>
      </div>

      {/* Logo and Navigation Links */}
      <div className="flex items-center justify-between py-6 global-padding shadow-2xs shadow-primary">
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-primary font-roboto font-semibold md:text-3xl sm:text-2xl cursor-pointer"
        >
          Nexus Consulting.
        </motion.h1>

        <ul className="lg:flex items-center font-poppins hidden">
          <motion.li
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0 }}
            className={`px-5 text-primary`}
          >
            <a
              href="/"
              className={`${
                activeLink === "home" ? "underline" : ""
              } duration-150 underline-offset-6 hover:underline`}
              onClick={() => setActiveLink("home")}
            >
              Home
            </a>
          </motion.li>
          <motion.li
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={`px-5 text-primary`}
          >
            <a
              href="#about"
              className={`${
                activeLink === "about" ? "underline" : ""
              } duration-150 underline-offset-6 hover:underline`}
              onClick={() => setActiveLink("about")}
            >
              About
            </a>
          </motion.li>
          <motion.li
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={`px-5 text-primary`}
          >
            <a
              href="#services"
              className={`${
                activeLink === "services" ? "underline" : ""
              } duration-150 underline-offset-6 hover:underline`}
              onClick={() => setActiveLink("services")}
            >
              Services
            </a>
          </motion.li>
          <motion.li
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className={`px-5 text-primary`}
          >
            <a
              href="#reviews"
              className={`${
                activeLink === "reviews" ? "underline" : ""
              } duration-150 underline-offset-6 hover:underline`}
              onClick={() => setActiveLink("reviews")}
            >
              Reviews
            </a>
          </motion.li>
          <motion.li
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className={`px-5 text-primary`}
          >
            <a
              href="#contact"
              className={`${
                activeLink === "contact" ? "underline" : ""
              } duration-150 underline-offset-6 hover:underline`}
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </a>
          </motion.li>
        </ul>

        {/* Hamburger Menu */}
        <div className="flex lg:hidden items-center cursor-pointer gap-1 bg-gray text-white px-3 py-1.5">
          {showMobileNav ? (
            <CloseIcon
              sx={{ fontSize: "26px" }}
              onClick={() => setShowMobileNav(false)}
            />
          ) : (
            <MenuIcon
              sx={{ fontSize: "26px" }}
              onClick={() => setShowMobileNav(true)}
            />
          )}
          <p>MENU</p>
        </div>
      </div>

      {/* Mobile View Nav Links */}
      <AnimatePresence>
        {showMobileNav && (
          <motion.ul
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="global-padding flex flex-col lg:hidden py-3 shadow-2xs shadow-primary"
          >
            <li className={`px-5 text-primary py-2`}>
              <a href="/" className="duration-150 hover:underline">
                Home
              </a>
            </li>
            <li className={`px-5 text-primary py-2`}>
              <a href="#about" className="duration-150 hover:underline">
                About
              </a>
            </li>
            <li className={`px-5 text-primary py-2`}>
              <a href="#services" className="duration-150 hover:underline">
                Services
              </a>
            </li>
            <li className={`px-5 text-primary py-2`}>
              <a href="#blog" className="duration-150 hover:underline">
                Blog
              </a>
            </li>
            <li className={`px-5 text-primary py-2`}>
              <a href="#contact" className="duration-150 hover:underline">
                Contact
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
