import React from "react";
import searchImg from "../assets/images/servicesImages/searchImg.png";
import { GoArrowUpRight } from "react-icons/go";
import ItExpertise from "../assets/images/icons/ItExpertise.png";
import support from "../assets/images/icons/support24-7.png";
import customSolution from "../assets/images/servicesImages/customSolution.png";

import digitalImg from "../assets/images/servicesImages/digitalImg.png";
import arrow from "../assets/images/icons/arrow.png";
import arrowStraight from "../assets/images/icons/arrowStraight.png";

import crmDesktop from "../assets/images/icons/crmDesktop.png";
import codeDesktop from "../assets/images/icons/codeDesktop.png";
import analytics from "../assets/images/icons/analytics.png";
import settings from "../assets/images/icons/settings.png";
import uiux from "../assets/images/icons/uiux.png";
import bulb from "../assets/images/icons/bulb.png";
import { div } from "framer-motion/client";

const ServicesPage = () => {
  const services = [
    "Mobile App Development",
    "Web & CMS Development",
    "Software Development",
    "UI / UX Design",
    "Digital Design & Branding",
    "AI & ML",
    "Digital Marketing",
    "Support & Maintenance",
    "Other Service",
  ];
  return (
    <>
      {/* hero section */}
      <section className=" lg:px-10 px-4 py-6 text-white bg-[url(./assets/images/servicesImages/heroSecBg.png)] bg-cover bg-center h-auto md:h-[600px] bg-no-repeat w-full ">
        <div className="mt-10">
          <p className="text-2xl font-medium">Services</p>
          <h1 className="text-3xl font-bold mt-4 ">
            <span className="text-[#368DE5]">Future-Ready</span> IT Services for{" "}
            <br /> Your Business
          </h1>
          <p className="mt-12 text-base font-light">
            Our IT services empower businesses with <br /> innovative, tailored
            solutions to enhance <br /> productivity, streamline operations, and
            drive growth.
          </p>
        </div>
      </section>

      {/* We Are IT Guidance  section*/}

      <section className="container mx-auto text-white lg:px-10 px-4 py-6 flex lg:flex-row flex-col lg:gap-0 gap-6 mt-24">
        {/* left section */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl font-bold">
            Tailored <span className="text-[#368DE5]">IT Solutions</span> for
            Your <br /> Success
          </h1>
          <p className="text-lg text-white/85  mt-12 ">
            we understand that every business is unique,
            <br /> with its own set of challenges, goals, and <br />{" "}
            aspirations. That's why we offer tailored IT <br /> solutions
            designed.
          </p>

          <button className="py-[10px] px-[20px] border border-[#368DE5] rounded-lg text-[#368DE5] text-[16px] mt-[80px] cursor-pointer hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out ">
            Talk to Expert{" "}
            <span className="inline-flex text-lg   ">
              <GoArrowUpRight />
            </span>
          </button>
        </div>

        {/* right section */}
        <div className="lg:w-1/2 w-full">
          <img
            className="w-full h-full object-contain"
            src={searchImg}
            alt="lock img"
          />
        </div>
      </section>

      {/* IT Expertise  section*/}

      <section className="lg:px-10 px-4 py-6 mt-24 text-white">
        <div className="grid grid-cols-4 w-full gap-4 ">
          {/* grid card 1 */}

          <div className=" md:border-r-2 md:border-[#505050]">
            <div className="flex items-center gap-4 ">
              <div className="w-13 h-13">
                <img
                  src={ItExpertise}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-2xl font-bold">IT Expertise</p>
            </div>
            <p className="text-sm font-light mt-7">
              IT Expertise offers specialized knowledge to optimize technology
              solutions and drive business efficiency.
            </p>
          </div>

          {/* grid card 2 */}
          <div>
            <div className="flex items-center gap-4 ">
              <div className="w-13 h-13">
                <img
                  src={support}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-2xl font-bold">24/7 IT Support</p>
            </div>
            <p className="text-sm font-light mt-7">
              24/7 IT Support ensures continuous, reliable assistance to resolve
              technical issues anytime, day or night.
            </p>
          </div>

          {/* grid card 3 */}
          <div className="col-span-2">
            <div className="flex items-start gap-x-4 ">
              <div>
                <img src={customSolution} alt="icon" />
              </div>
              <div>
                <h4 className="text-2xl font-bold ">Custom Solution</h4>
                <p className="text-sm font-light mt-6">
                  IT Expertise offers specialized knowledge to optimize
                  technology solutions and drive business efficiency.
                </p>

                <button className="px-4 py-3 border border-[#368DE5] rounded-lg mt-3 font-medium text-[#368DE5] cursor-pointer hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out">
                  Find Solutions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:px-10 px-4 py-6 mt-24">
        <div className=" text-white">
          <div className="">
            <h3 className=" text-2xl">Experience</h3>
            <h2 className="text-3xl font-bold mt-2">
              Grow Your <span className="text-[#368DE5]">Online Presence</span>
            </h2>

            <div className=" md:flex justify-between items-end  ">
              <p className="text-gray-300 mt-4">
                Grow Your Online Presence with tailored strategies to <br />{" "}
                enhance visibility, engagement, and brand recognition.
              </p>
              <button className="px-4 py-3 border border-[#368DE5] rounded-lg font-medium text-[#368DE5] cursor-pointer hover:bg-gradient-to-r hover:from-[#368DE5] hover:to-[#C7BDFF] hover:text-white transition-colors duration-300 ease-in-out ">
                Get Started
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mt-12 ">
            <div className="md:w-1/2">
              <img
                src={digitalImg}
                alt="Digital Hands"
                className="rounded-lg h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 flex flex-col gap-y-12">
              {[
                {
                  percent: "90%",
                  title: "Creative Approach",
                  description:
                    "Creative Approach blends innovation and strategy to deliver unique, impactful solutions.",
                },
                {
                  percent: "99%",
                  title: "Guaranteed Success",
                  description:
                    "Guaranteed Success ensures proven strategies and consistent results for achieving your business goals.",
                },
                {
                  percent: "85%",
                  title: "Brand Strategy",
                  description:
                    "Brand Strategy defines your market position and drives growth through clear, impactful planning.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-[#001118] rounded-l-full rounded-r-[20px]"
                >
                  <span className=" text-white bg-[#368DE5] font-bold text-2xl w-20 h-20 flex items-center justify-center rounded-full p-8">
                    {item.percent}
                  </span>
                  <div className="ml-4">
                    <h4 className=" text-2xl font-extrabold">{item.title}</h4>
                    <p className=" text-base ">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we work section */}
      <section className="container mx-auto lg:px-10 px-4 py-6 text-white mt-24">
        <div className="flex flex-col justify-between items-center">
          <p className="text-2xl ">How we work</p>
          <h1 className="text-3xl font-bold mt-5 text-center">
            <span className="text-[#368DE5]">Our Process</span> For Delivering{" "}
            <br /> Results
          </h1>

          <p className="text-base font-light mt-12 text-center">
            Our IT services empower businesses with innovative, <br /> tailored
            solutions to enhance productivity, streamline <br /> operations, and
            drive growth.
          </p>
        </div>

        <div className="mt-12 flex justify-between items-baseline w-full">
          {/* card 1 */}
          <div className="flex flex-col justify-center items-center gap-y-2 w-fit">
            <span className="w-20 h-20 flex items-center justify-center rounded-full bg-[#368DE5] text-3xl font-bold">
              01
            </span>
            <img src={arrow} alt="arrow-icon" />

            <p className="text-center w-fit text-2xl font-bold">
              Make an <br /> Apointment
            </p>
          </div>

          <span className="md:block hidden">
            <img src={arrowStraight} alt="arrow-icon" />
          </span>

          {/* card 2 */}
          <div className="flex flex-col justify-center items-center gap-y-2 w-fit">
            <span className="w-20 h-20 flex items-center justify-center rounded-full bg-[#368DE5] text-3xl font-bold">
              02
            </span>
            <img src={arrow} alt="arrow-icon" />

            <p className="text-center w-fit text-2xl font-bold">
              Meet Our <br />
              Team
            </p>
          </div>

          <span className="md:block hidden">
            <img src={arrowStraight} alt="arrow-icon" />
          </span>
          {/* card 3 */}
          <div className="flex flex-col justify-center items-center gap-y-2 w-fit">
            <span className="w-20 h-20 flex items-center justify-center rounded-full bg-[#368DE5] text-3xl font-bold">
              03
            </span>
            <img src={arrow} alt="arrow-icon" />

            <p className="text-center w-fit text-2xl font-bold">
              Get <br />
              Consultation
            </p>
          </div>

          <span className="md:block hidden">
            <img src={arrowStraight} alt="arrow-icon" />
          </span>
          {/* card 4 */}
          <div className="flex flex-col justify-center items-center gap-y-2 w-fit">
            <span className="w-20 h-20 flex items-center justify-center rounded-full bg-[#368DE5] text-3xl font-bold">
              04
            </span>
            <img src={arrow} alt="arrow-icon" />

            <p className="text-center w-fit text-2xl font-bold">
              Start <br />
              Project
            </p>
          </div>
        </div>
      </section>

      {/* Our Services section */}
      <section className="container mx-auto lg:px-10 px-4 py-6 text-white mt-24">
        <p className="text-2xl mb-7">Our Services</p>

        <div className="flex justify-between items-end">
          <h1 className="text-4xl font-extrabold ">
            Future-Ready{" "}
            <span className="text-[#368DE5]">
              IT <br /> Solutions
            </span>
            .
          </h1>
          <p className="text-base font-light">
            Future-Ready IT Solutions deliver innovative, scalable technologies
            to ensure <br /> long-term success and adaptability in a rapidly
            changing digital landscape.
          </p>
        </div>

        {/* cards section */}
        <div className="grid md:grid-cols-3  grid-cols-1 gap-6 mt-12 w-full">
          {[
            {
              icon: crmDesktop,
              title: "CRM Solutions And Design",
              desc: "CRM Solutions and Design delivers customized CRM strategies to enhance business relationships and growth.",
            },
            {
              icon: codeDesktop,
              title: "Website Development",
              desc: "Website Development crafts responsive, user-friendly sites to boost online presence and engagement.",
            },
            {
              icon: analytics,
              title: "Data Analytics",
              desc: "Data Analytics transforms raw data into actionable insights for informed decision-making.",
            },
            {
              icon: settings,
              title: "IT Management Service",
              desc: "IT Management Service streamlines technology operations to ensure efficiency and reliability.",
            },
            {
              icon: uiux,
              title: "UI/UX Design",
              desc: "UI/UX Design creates intuitive and engaging interfaces for exceptional user experiences.",
            },
            {
              icon: bulb,
              title: "Technology Solution",
              desc: "Technology Solution delivers innovative tools to drive efficiency and business success.",
            },
          ].map((card, index) => (
            <div key={index} className="bg-[#001118] rounded-[20px] p-4 ">
              <div className="w-[100px] h-[100px]">
                <img
                  className="w-full h-full object-contain"
                  src={card.icon}
                  alt={card.title}
                />
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="text-base font-normal mt-5">{card.desc}</p>
              </div>

              <div className="flex items-end text-[#368DE5] mt-5">
                <p>Read More </p>
                <GoArrowUpRight className="text-xl" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile App Development section */}
      <section className="container mx-auto  lg:px-10 px-4 py-6 text-white mt-24 flex flex-col md:flex-row   gap-6">
        {/* left section */}
        <div className="md:w-1/2 w-full relative">
          <div className="absolute left-[4.5px] top-0 h-full w-[2px] bg-purple-500"></div>

          {services.map((service, index) => (
            <div key={index} className="relative flex items-center mb-4">
              {/* Timeline Dot */}
              <div className="absolute left-0 w-3 h-3 bg-[#7C3AED] rounded-full"></div>

              
              <p
                className={`ml-6   ${
                  index === 0 ? "text-[#7C3AED]  font-bold" : ""
                }`}
              >
                {service}
              </p>
            </div>
          ))}
        </div>
        {/* right section */}
        <div className="md:w-1/2 w-full"></div>
      </section>
    </>
  );
};

export default ServicesPage;
