import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id="works" className="mx-auto h-[300px] mt-16 sm:h-[250px]">
      <div className="bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 data-aos="zoom-out" className="font-bold text-5xl sm:text-3xl">
          Let's Talk
        </h2>
        <div className="flex items-center justify-center gap-8 sm:gap-5">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            href="mailto:kulkarnipranav901@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="box font-medium text-white flex items-center justify-center flex-col"
          >
            <MdEmail className="text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Email</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="https://wa.me/+919403579863"
            target="_blank"
            rel="noopener noreferrer"
            className="box font-medium text-white flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className="text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href="https://www.instagram.com/prxnxv_k099/"
            target="_blank"
            rel="noopener noreferrer"
            className="box font-medium text-white flex items-center justify-center flex-col"
          >
            <RiInstagramFill className="text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="sm:text-xs text-center">
          | Copyright &copy; 2024 Pranav Kulkarni. All rights reserved.
          |
        </div>
      </div>
    </div>
  );
};

export default Footer;
