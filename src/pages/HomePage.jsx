import React from "react";
import heroSectionImg from "../assets/images/heroSectionImg.png";
import logo from "../assets/unicornLogo.svg";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoAngular } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { FaHtml5, FaBootstrap, FaFigma } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiNodejsLine } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { FaPython, FaJava, FaPhp, FaLaravel } from "react-icons/fa";

import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiLocationArrow } from "react-icons/tfi";
import { LiaHashtagSolid } from "react-icons/lia";
import { IoSquareOutline } from "react-icons/io5";
import { BsVectorPen } from "react-icons/bs";
import { TfiText } from "react-icons/tfi";
import { BiMessageSquare } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

// third column icons
import { SiGooglecloud } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaJenkins } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

// third column second div icons
import { SiMongodb } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMariadb } from "react-icons/si";
import { SiGoogledatastudio } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { SiAmazonredshift } from "react-icons/si";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import unicornFrame from "../assets/images/unicornFrame.png";

const HomePage = () => {
  return (
    <>
      {/* hero section */}
      <section className="container mx-auto text-white lg:px-10 px-4 py-6 flex lg:flex-row flex-col lg:gap-0 gap-6">
        {/* left section */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-bold">
            Redefine your Business Goals and Grow Exponentially with{" "}
            <span className="text-[#368DE5]">
              Next-Gen <br /> Technology{" "}
            </span>{" "}
            Solutions from Experts in Web Development
          </h1>
          <p className="text-lg text-white/85  mt-9 ">
            With virtual technology you can see the digital world feel more real
            and you can play the game with a new style.
          </p>

          <button className="py-[10px] px-[20px] border border-[#368DE5] rounded-lg text-[#368DE5] text-[16px] mt-[60px] cursor-pointer hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out ">
            Get an Estimated
          </button>
        </div>

        {/* right section */}
        <div className="lg:w-1/2 w-full">
          <img
            className="w-full h-full object-contain"
            src={heroSectionImg}
            alt="herosection"
          />
        </div>
      </section>

      {/* // second section */}
      <section className="lg:px-10 px-4 py-6">
        <section className="container mx-auto text-white  bg-[#070707]/40 border border-[#151517] rounded-2xl py-3.5  sm:px-7.5 px-1">
          <div className="flex  justify-between lg:gap-0 gap-5 items-center">
            <span className="sm:flex hidden">
              <img src={logo} alt="logo" />
            </span>

            <div className="flex lg:gap-7 gap-0 justify-around  items-center">
              <p className="text-base w-fit font-[400] sm:text-start text-center">
                <span className="sm:text-2xl text-lg font-medium">2+</span>{" "}
                Years Experience
              </p>
              <p className="text-base w-fit font-[400] sm:text-start text-center">
                <span className="sm:text-2xl text-lg font-medium">20+</span>{" "}
                Websites Developed
              </p>
              <p className="text-base w-fit font-[400] sm:text-start text-center">
                <span className="sm:text-2xl text-lg font-medium">19+</span>{" "}
                Happy Clients
              </p>
              <p className="text-base w-fit font-[400] sm:text-start text-center">
                <span className="sm:text-2xl text-lg font-medium">4.9</span>{" "}
                Client Rating
              </p>
            </div>
          </div>
          {/* layouts */}

          <div className="grid lg:grid-cols-8 grid-cols-1  gap-6 mt-8">
            {/* First Column */}
            <section className="lg:col-span-2">
              <div className="bg-[#001118] rounded-lg p-4">
                <h1 className="text-xl md:text-2xl font-bold text-[#368DE5] mb-8">
                  Frontend
                </h1>
                <div className="text-[8px] md:text-[10px] flex flex-wrap gap-4 md:gap-9">
                  <span>
                    <TbBrandRedux className="text-2xl" /> Redux
                  </span>
                  <span>
                    <IoLogoAngular className="text-2xl" /> Angular
                  </span>
                  <span>
                    <FaReact className="text-2xl" /> ReactJs
                  </span>
                  <span>
                    <BiLogoTypescript className="text-2xl" /> Typescript
                  </span>
                  <span>
                    <FaHtml5 className="text-2xl" /> HTML
                  </span>
                  <span>
                    <FaCss3Alt className="text-2xl" /> CSS
                  </span>
                  <span>
                    <FaBootstrap className="text-2xl" /> Bootstrap
                  </span>
                </div>
              </div>

              {/* Bottom Div */}
              <div className="mt-5  bg-[#001118] rounded-lg p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-[#368DE5] mb-8">
                  Backend
                </h1>
                <div className="text-[9px] md:text-[10px] flex flex-wrap justify-between gap-4 md:gap-9">
                  <span>
                    <RiNodejsLine className="text-4xl" /> Nodejs
                  </span>
                  <span>
                    <DiCodeigniter className="text-4xl" /> Codeigniter
                  </span>
                  <span>
                    <SiExpress className="text-4xl" /> ExpressJs
                  </span>
                  <span>
                    <SiNestjs className="text-4xl" /> NestJs
                  </span>
                  <span>
                    <FaLaravel className="text-4xl" /> Laravel
                  </span>
                  <span>
                    <FaPhp className="text-4xl" /> Php
                  </span>
                  <span>
                    <FaPython className="text-4xl" /> Python
                  </span>
                  <span>
                    <FaJava className="text-4xl" /> Java
                  </span>
                  <span>
                    <DiDotnet className="text-4xl" /> Net
                  </span>
                </div>
              </div>
            </section>

            {/* Second Column */}
            <section className="lg:col-span-4 ">
              <div className="flex flex-wrap gap-4 md:gap-7 bg-[#001118] rounded-lg px-4 py-6">
                <span className="flex items-center">
                  <FaFigma className="text-2xl" />
                  <RiArrowDropDownLine />
                </span>
                <span className="flex items-center">
                  <TfiLocationArrow className="text-2xl" />
                  <RiArrowDropDownLine />
                </span>
                <span className="flex items-center">
                  <LiaHashtagSolid className="text-2xl" />
                  <RiArrowDropDownLine />
                </span>
                <span className="flex items-center">
                  <IoSquareOutline className="text-2xl" />
                  <RiArrowDropDownLine />
                </span>
                <span className="flex items-center">
                  <BsVectorPen className="text-2xl" />
                  <RiArrowDropDownLine />
                </span>
                <span>
                  <TfiText className="text-2xl" />
                </span>
                <span>
                  <BiMessageSquare className="text-2xl" />
                </span>
                <span>
                  <MdOutlineDashboardCustomize className="text-2xl" />
                </span>
                <span>
                  <FaCode className="text-2xl" />
                </span>
              </div>

              {/* Bottom Section */}
              <div className="mt-5 bg-[#001118]   rounded-lg overflow-hidden p-4 ">
                <img
                  src={unicornFrame}
                  alt=""
                  className="w-full lg:h-[430px] h-auto"
                />
              </div>
            </section>

            {/* Third Column */}
            <section className="lg:col-span-2 ">
              <div className="bg-[#001118]   rounded-lg p-4">
                <h1 className="text-xl md:text-2xl font-bold text-[#368DE5] mb-8">
                  Cloud
                </h1>
                <div className="text-[8px] md:text-[10px] flex  flex-wrap gap-4 md:gap-9">
                  <span>
                    <SiGooglecloud className="text-2xl" /> G-Cloud
                  </span>
                  <span>
                    <FaAws className="text-2xl" /> AWS
                  </span>
                  <span>
                    <FaGithub className="text-2xl" /> GitHub
                  </span>
                  <span>
                    <FaSalesforce className="text-2xl" />
                    Salesforce
                  </span>
                  <span>
                    <FaRegSnowflake className="text-2xl" /> Snowflake
                  </span>
                  <span>
                    <FaDocker className="text-2xl" /> Docker
                  </span>
                  <span>
                    <FaJenkins className="text-2xl" /> Jenkins
                  </span>
                  <span>
                    <VscAzure className="text-2xl" /> Azure
                  </span>
                </div>
              </div>

              {/* Bottom Div */}
              <div className="mt-5 bg-[#001118] rounded-lg p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-[#368DE5] mb-8">
                  Database
                </h1>
                <div className="text-[9px] md:text-[10px] flex flex-wrap justify-between gap-4 md:gap-9">
                  <span>
                    <SiMongodb className="text-4xl" /> MongoDB
                  </span>
                  <span>
                    <SiPostgresql className="text-4xl" /> Postgresql
                  </span>
                  <span>
                    <GrMysql className="text-4xl" />
                    MySql
                  </span>
                  <span>
                    <SiMariadb className="text-4xl" />
                    MariaDB
                  </span>
                  <span>
                    <SiGoogledatastudio className="text-4xl" />
                    Data Studio
                  </span>
                  <span>
                    <SiTableau className="text-4xl" /> Tableau
                  </span>
                  <span>
                    <FaDatabase className="text-4xl" /> Data Lake
                  </span>
                  <span>
                    <SiAmazonredshift className="text-4xl" /> RedShift
                  </span>
                  <span>
                    <BsFillFileBarGraphFill className="text-4xl" /> PowerBI
                  </span>
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomePage;
