import React from "react";
import unicornLogo from "../assets/unicornLogo.svg";
import { FaLinkedin, FaRegArrowAltCircleUp } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import clutch from "../assets/images/Clutch.png";
import forbes from "../assets/images/Forbes.png";
const Footer = () => {
  return (
    <footer className="container mx-auto lg:px-10 px-4 py-4 bg-[#000D0E] text-white">
      {/* logo section */}
      <section className="flex justify-between items-center mb-12">
        <div>
          <img src={unicornLogo} alt="logo" />
        </div>

        <div>
          <button className="text-[#368DE5] text-base border border-[#368DE5] rounded-lg bg-transparent sm:py-3 sm:px-4 px-2 py-1  flex items-center gap-2.5 cursor-pointer">
            Get top of the page <FaRegArrowAltCircleUp />
          </button>
        </div>
      </section>

      <section className="flex md:justify-between md:flex-row flex-col gap-8  ">
        {/* left section */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[70px]">
          <div>
            <h3 className="text-[#368DE5] text-[23px] font-bold mb-[19px]">
              Company
            </h3>

            <ul className="flex flex-col gap-[10px] font-light">
              <li className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300">
                Home
              </li>
              <li className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300">
                Services
              </li>
              <li className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300">
                Portfolio
              </li>
              <li className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300">
                About Us
              </li>
              <li className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300">
                Careers
              </li>
              <li className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300">
                Team
              </li>
              <li className="hover:text-[#368DE5] transition-all cursor-pointer w-fit duration-300">
                Contact Us
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#368DE5] text-[23px] font-bold mb-[19px]">
              Services
            </h3>

            <ul className="flex flex-col gap-[10px] font-light">
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                IT Management Services
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Data Tracking Security
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Website Development
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                CRM Solutions And Design
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                UI/UX Design Services
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Technology Solution
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Software Development
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Graphic Design
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#368DE5] text-[23px] font-bold mb-[19px]">
              Our Fields
            </h3>

            <ul className="flex flex-col gap-[10px] font-light">
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Healthcare
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Banks
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Logistics
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Supermarkets
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Industries
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Hostels
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                Fintech
              </li>
              <li className="hover:text-[#368DE5] transition-all duration-300 w-fit cursor-pointer">
                E-Commerce
              </li>
            </ul>
          </div>
        </div>

        {/* right section */}
        <div className="bg-[#001118] rounded-2xl p-8 h-fit">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">INDIA (HQ)</h2>

            <div className="flex items-center gap-3">
              <IoMdContacts className="text-xl " />{" "}
              <p>Itsunicorntech@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-xl" />{" "}
              <p>Lig square,Indore, [M.P.]India</p>
            </div>
            <div className="flex gap-3 text-start">
              <IoIosCall className="text-xl mt-1" />
              <p>
                +91-958-957-2990 <br />
                +91-963-008-8808
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-between items-center mt-10">
        {/* social media section */}
        <div>
          <h4 className="text-[18px] font-bold">Social Media</h4>
          <div className="flex items-center gap-4 mt-3">
            <span className="p-1 bg-[#368DE5] rounded-full text-black text-xl">
              <FaFacebookF />
            </span>
            <span className="p-1 bg-[#368DE5] rounded-full text-black text-xl">
              <FaXTwitter />
            </span>
            <span className="p-1 bg-[#368DE5] rounded-full text-black text-xl">
              <FaLinkedinIn />
            </span>
            <span className="p-1 bg-[#368DE5] rounded-full text-black text-xl">
              <IoLogoWhatsapp />
            </span>
            <span className="p-1 bg-[#368DE5] rounded-full text-black text-xl">
              <AiFillInstagram />
            </span>
          </div>
        </div>

        {/* firm awards */}
        <div className="flex gap-4 items-center">
          <img src={clutch} alt="award 1" />
          <img src={forbes} alt="award 2" />
        </div>
      </section>

      {/* bottom footer */}

      <section className="py-6 mt-10 border-t border-[#4B4C4D]">
        <div className="flex justify-between md:flex-row flex-col gap-4 items-center font-semibold">
          <p>© UniTech Private Limited 2024. All rights reserved</p>
          <p>Privacy Policy  |  Terms & Condition  |  Site Map</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
