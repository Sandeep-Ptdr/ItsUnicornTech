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

import application from "../assets/images/application.png";
import business from "../assets/images/business.png";
import enterprise from "../assets/images/enterprise.png";
import agency from "../assets/images/agency.png";
import company from "../assets/images/company.png";

import lockImg from "../assets/images/lockImg.png";

import stars from "../assets/images/stars.png";
import successStory from "../assets/images/successStory.png";
import handShake from "../assets/images/handShake.png";
import badge from "../assets/images/badge.png";
import Card from "../components/Card";

import officeImg from "../assets/images/officeImg.png";
import aboutUsGroup from "../assets/images/aboutUsGroup.png";

import { BsArrowRight } from "react-icons/bs";

import penImg from "../assets/images/penImg.png";
import laptopLock from "../assets/images/laptopLock.png";
import setting from "../assets/images/setting.png";
import chip from "../assets/images/chip.png";
import humanFaceImg from "../assets/images/humanTech.png";
import TechnologiesTabs from "../components/TechnologiesTabs";

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

      {/* third section */}

      <section className="container mx-auto flex lg:px-10 px-4 py-4 justify-between gap-4">
        <div>
          <img src={application} alt="image" />
        </div>
        <div>
          <img src={business} alt="image" />
        </div>
        <div>
          <img src={enterprise} alt=" image" />
        </div>
        <div>
          <img src={agency} alt=" image" />
        </div>
        <div>
          <img src={company} alt=" image" />
        </div>
      </section>

      {/*fourth section Unlock Creativity with Holistic Service Integration */}

      <section className="container mx-auto text-white lg:px-10 px-4 py-6 flex lg:flex-row flex-col lg:gap-0 gap-6 mt-24">
        {/* left section */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-bold">
            <span className="text-[#368DE5]">Unlock Creativity</span> with
            Holistic Service Integration
          </h1>
          <p className="text-lg text-white/85  mt-12 ">
            Unleash the power of your ideas by combining innovation with
            seamless, end-to-end solutions. Holistic integration ensures every
            aspect works together, turning creativity into impactful results
            effortlessly.
          </p>

          <button className="py-[10px] px-[20px] border border-[#368DE5] rounded-lg text-[#368DE5] text-[16px] mt-[80px] cursor-pointer hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out ">
            Portfolio
          </button>
        </div>

        {/* right section */}
        <div className="lg:w-1/2 w-full">
          <img
            className="w-full h-full object-contain"
            src={lockImg}
            alt="lock img"
          />
        </div>
      </section>

      {/* fifth section   */}
      <section className="container mx-auto md:px-10 px-4 py-6 text-white flex lg:flex-row flex-col gap-7 ">
        {/* left section */}
        <div className="lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: stars,
              num: "2+",
              text: "Years Experience",
            },
            {
              icon: successStory,
              num: "20+",
              text: "Success Stories",
            },
            {
              icon: handShake,
              num: "100+",
              text: "Companies Trust Us",
            },
            {
              icon: badge,
              num: "100%",
              text: "Guaranteed Results",
            },
          ].map((item, idx) => (
            <Card key={idx} data={item} />
          ))}
        </div>

        {/* right section */}
        <div className="lg:w-1/2 w-full flex lg:justify-end justify-center">
          <div className="relative">
            <img src={officeImg} alt="office hall" className="w-full h-full" />

            <div className="absolute left-[50%] -translate-y-[30%] -translate-x-[50%] bottom-0 w-[90%]  ">
              <p className="md:text-2xl text-xl font-bold">
                Impowering <span className="text-[#368DE5]">50+ Minds</span> to
                Build the Future at{" "}
                <span className="text-[#368DE5]">Unicorn Tech</span>
              </p>

              <div className="flex items-center w-fit gap-3 mt-3 text-lg font-normal">
                {" "}
                <span className="underline cursor-pointer ">
                  Join Team
                </span>{" "}
                <BsArrowRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sixth section about us */}

      <section className="container mx-auto text-white lg:px-10 px-4 py-6 flex lg:flex-row flex-col lg:gap-6 gap-6 mt-24">
        {/* left section */}
        <div className="lg:w-1/2 w-full flex items-center sm:justify-normal justify-center ">
          <img
            className="lg:w-[475px] w-full h-auto object-contain"
            src={aboutUsGroup}
            alt="group"
          />
        </div>

        {/* right section */}

        <div className="lg:w-1/2 w-full">
          <p className="text-base font-light">About Us</p>
          <h1 className="text-[32px] font-bold">
            <span className="text-[#368DE5]">Inspiring Innovation</span> for the{" "}
            <br /> Digital Era
          </h1>
          <p className="text-lg text-white/85  mt-12 ">
            At Unicorn Tech, we are committed to driving innovation and
            transforming businesses in the digital age. By leveraging advanced
            technologies and creative solutions, we empower our clients to stay
            ahead of the curve. Our goal is to inspire progress and help
            organizations navigate the future of digital possibilities.
          </p>

          <button className="py-[10px] px-[20px] border border-[#368DE5] rounded-lg text-[#368DE5] text-[16px] mt-[100px] cursor-pointer hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out ">
            About Us
          </button>
        </div>
      </section>

      {/* seventh section */}
      <section className="container mx-auto text-white lg:px-10 px-4 py-6 flex lg:flex-row flex-col lg:gap-0 gap-6 mt-24">
        {/* left section */}
        <div className="lg:w-1/2 w-full">
          <p className="text-base font-light mb-6">Why Choose us</p>
          <h1 className="text-2xl font-bold">
            Our <span className="text-[#368DE5]">Next-Gen IT Solutions</span>{" "}
            Can Revolutionize the Way Your Business Leverage Technology to
            Automate Processes and Enhance Growth Rate
          </h1>

          {/* grid layout */}
          <div className="grid grid-cols-2 gap-x-14 gap-y-10 mt-10">
            {[
              {
                icon: penImg,
                title: "Product design",
                desc: "Product Design blends creativity and functionality to craft innovative, user-centric solutions.",
              },
              {
                icon: laptopLock,
                title: "Cyber Security",
                desc: "Cyber Security safeguards digital assets with advanced protection against evolving threats.",
              },
              {
                icon: setting,
                title: "Best Consultancy",
                desc: "Best Consultancy offers expert guidance and tailored strategies to drive business success and growth.",
              },
              {
                icon: chip,
                title: "Expert Developers",
                desc: "Expert Developers deliver high-quality, innovative solutions with precision and technical excellence.",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <div>
                  <img src={item.icon} alt={item.title} />
                </div>

                <div className="mt-3">
                  <h4 className="text-lg font-bold text-[#368DE5]">
                    {item.title}
                  </h4>
                  <p className="text-base font-normal mt-3">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right section */}
        <div className="lg:w-1/2 w-full relative">
          <div className="lg:w-[466px] lg:h-[467px] w-full h-auto overflow-hidden rounded-2xl lg:absolute top-0 right-0 flex justify-center items-center ">
            <img
              src={humanFaceImg}
              alt="image"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center items-center bg-[#051F3C80]/50 backdrop-blur-lg border border-[#151517] rounded-[20px] py-10  px-4 lg:w-[375px] lg:h-[272px] w-full h-full absolute lg:bottom-0 lg:left-6   left-[50%] -bottom-[50%] -translate-x-[50%] -translate-y-[50%] lg:-translate-x-0 lg:-translate-y-0 ">
            <div>
              <h5 className="text-[20px] font-bold">
                We’re bringing latest Business <br /> Innovation in to Digital
                World
              </h5>
              <p className="mt-10 text-lg">Best IT Service Provider</p>
            </div>
          </div>
        </div>
      </section>


      {/*eighth section Technologies & Platforms We Work With */}

      <section className="container mx-auto text-white lg:px-10 px-4 py-6 mt-24">

        <h1 className="text-3xl font-bold"><span className="text-[#368DE5]">Technologies & Platforms</span> We Work With</h1>

        <div className="mt-14 w-fit mx-auto ">
          <TechnologiesTabs />
        </div>



      </section>
    </>
  );
};

export default HomePage;
