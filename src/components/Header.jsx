import React from "react";
import unicornLogo from '../assets/unicornLogo.svg'
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  return (
    <header className="container absolute top-0 mx-auto flex justify-between items-center text-white px-4 py-4 lg:px-10">
      {/* logo */}

      <div>
          <img src={unicornLogo} alt="logo" />
      </div>

      {/* navigations */}
      <nav className="bg-[#101929] text-white px-[26px] py-[13px] rounded-[50px] lg:block hidden ">
        <ul className="flex gap-5 text-base font-normal">
          <li className="cursor-pointer hover:text-[#368DE5] transition-all duration-300">Home</li>
          <li className="cursor-pointer hover:text-[#368DE5] transition-all duration-300 flex items-center ">Company <RiArrowDropDownLine /></li>
          <li className="cursor-pointer hover:text-[#368DE5] transition-all duration-300 flex items-center ">Services <RiArrowDropDownLine /></li>
          <li className="cursor-pointer hover:text-[#368DE5] transition-all duration-300">Portfolio</li>
          <li className="cursor-pointer hover:text-[#368DE5] transition-all duration-300">About Us</li>  
          <li className="cursor-pointer hover:text-[#368DE5] transition-all duration-300">Contact Us</li>
        </ul>
      </nav>

      {/* buttons */}
      <div>
        <p className="text-[#368DE5] underline text-lg font-normal">Get an estimated</p>
      </div>
    </header>
  );
};

export default Header;
