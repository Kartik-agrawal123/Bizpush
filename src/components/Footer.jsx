import React from "react";
import chargeImg from "../assests/charger.png";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="p-6 md:p-10 grid grid-cols-1 gap-y-8 md:grid-cols-5 bg-white">
        <div className="flex space-x-4 items-center justify-center">
          <img src={chargeImg} alt="logo" className="w-8" />
          <span className="text-xl text-indigo-400 font-semibold">BIZPUSH</span>
        </div>
        <div className="flex items-center space-y-6 flex-col">
          <a
            href="/"
            className="font-light text-sm text-gray-500 hover:text-gray-800">
            FAQs
          </a>
          <a
            href="/"
            className="font-light text-sm text-gray-500 hover:text-gray-800">
            Contact Us
          </a>
        </div>
        <div className="flex items-center space-y-6 flex-col">
          <a
            href="/"
            className="font-light text-sm text-gray-500 hover:text-gray-800">
            Privacy Policy
          </a>
          <a
            href="/"
            className="font-light text-sm text-gray-500 hover:text-gray-800">
            Press Kit
          </a>
        </div>
        <div className="flex items-center space-y-6 flex-col">
          <a
            href="/"
            className="font-light text-sm text-gray-500 hover:text-gray-800">
            Install Quide
          </a>
          <a
            href="/"
            className="font-light text-sm text-gray-500 hover:text-gray-800">
            Contact Us
          </a>
        </div>
        <div className="flex justify-center items-start space-x-4">
          <div>
            <Facebook />
          </div>
          <div>
            <Instagram />
          </div>
          <div>
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
