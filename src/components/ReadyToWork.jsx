import React from "react";

const ReadyToWork = () => {
  return (
    <div className=" relative w-full mt-32  bg-[url(./assets/images/readyToWorkImg.png)]  h-[400px] border border-[#1B006B] bg-cover bg-center mb-20 ">
      {/* Blur overlay */}
      <div className="absolute xl:my-10 xl:mx-20 lg:my-7 lg:mx-14  md:mx-8 md:my-4  m-4 inset-0 text-white bg-[#0B0A72]/50 backdrop-blur-lg rounded-[20px] flex flex-col justify-center items-center space-y-10 px-[30%]">
        <h1 className="text-3xl font-bold   ">Ready to Work, Let's Chat</h1>
        <p className="text-base font-medium text-center">
          Our team of experts is ready to collaborate with you every step of the
          way, from initial consultation to implementation.
        </p>
        <button className="border rounded-lg font-bold px-6 py-1  ">
          Contect Us
        </button>
      </div>
    </div>
  );
};

export default ReadyToWork;
