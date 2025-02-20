import React from "react";
import footerBg from "../assets/footer_bg.webp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <footer
      className="global-padding py-8 text-white flex items-center justify-between xsm:flex-col sm:flex-row xsm:gap-12 sm:gap-0"
      style={{
        background: `url(${footerBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p>Copyright &copy; 2025 All right reserved</p>
      {/* Social Icons */}
      <div className="flex items-center gap-4">
        <span
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0 }}
          className="cursor-pointer"
        >
          <FacebookIcon sx={{ fontSize: "20px" }} />
        </span>
        <span
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="cursor-pointer"
        >
          <InstagramIcon sx={{ fontSize: "20px" }} />
        </span>
        <span
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="cursor-pointer"
        >
          <LinkedInIcon sx={{ fontSize: "20px" }} />
        </span>
        <span
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.45 }}
          className="cursor-pointer"
        >
          <XIcon sx={{ fontSize: "20px" }} />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
