import React from "react";
import DesignWeb from "../assets/DesignWeb.png"

const WebDesign = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-12">
      {/* Left content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Crafting Digital <span className="text-[#4D00FF]">Excellence</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          We transform your ideas into powerful digital solutions. From stunning
          websites to powerful web applications, we bring your vision to life with code
          and creativity.
        </p>
        <div className="mt-8 flex justify-center lg:justify-start gap-4 flex-wrap">
          <button className="bg-[#4D00FF] hover:bg-[#3700cc] text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md transition duration-300">
            Our Services
          </button>
          <button className="border-2 border-[#4D00FF] text-[#4D00FF] hover:bg-[#f3f0ff] px-6 py-3 rounded-lg text-sm font-medium transition duration-300">
            View Our Work
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="lg:w-1/2">
        <img
          src={DesignWeb}
          alt="Web Design Illustration"
          className="w-full h-auto drop-shadow-xl rounded-2xl"
        />
      </div>
    </section>
  );
};

export default WebDesign;