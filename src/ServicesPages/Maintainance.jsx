import React from "react";

const Maintainance = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-12">
      {/* Left content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          Reliable <span className="text-[#4D00FF]">Web Development</span><br />
          & Ongoing <span className="text-[#4D00FF]">Maintenance</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          We build fast, secure, and scalable websites that grow with your business.
          Whether it’s a fresh launch or long-term support, we ensure your online presence
          runs flawlessly—with performance, updates, and security handled for you.
        </p>
        <div className="mt-8 flex justify-center lg:justify-start gap-4 flex-wrap">
          <button className="bg-[#4D00FF] hover:bg-[#3700cc] text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md transition duration-300">
            Start Your Project
          </button>
          <button className="border-2 border-[#4D00FF] text-[#4D00FF] hover:bg-[#f3f0ff] px-6 py-3 rounded-lg text-sm font-medium transition duration-300">
            See Maintenance Plans
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="lg:w-1/2">
        <img
          src=''
          alt="Web Development & Maintenance"
          className="w-full h-auto drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default Maintainance;
