import React from "react";
import { projectImages } from "../data/homeData";
import CTA from "../componentsTwo/CTA";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Project() {
  return (
    <div className="container mx-auto py-8 flex items-center px-4 flex-col gap-16">
      {/* Here's clients project */}
      <div className="flex flex-col items-center mx-auto pt-6">
        <h2 className="text-4xl pt-14 md:pt-3 lg:text-5xl font-bold mb-2 leading-tight">
          Our Projects
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          All crafted under one
          <span className="text-blue-600 text-[20px]"> roof</span>
          .
          <br />
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {Object.entries(projectImages).map(([key, img]) => (
            <div
              key={key}
              className="bg-white w-full hover:scale-105 transition ease-in  sm:w-[334px] rounded-lg shadow-md p-2 flex flex-col items-center"
            >
              <img
                src={img}
                alt={key + " project"}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <span className="text-gray-700 font-medium capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-4 md:px-12 bg-white text-center">
        {/* Heading & Subheading */}
        <div>
          <h2 className="text-4xl pt-14 md:pt-3 lg:text-5xl font-bold mb-2 leading-tight">
            Empowering Your Business Digitally
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            <span className="text-blue-600 text-[20px]">
              Design. Code. Market. Grow.
            </span>
            <br />
            We build websites, craft brands, and launch strategies to move your
            business forward.
          </p>
        </div>

        {/* Image & Content Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-10 max-w-6xl mx-auto">
          {/* Image */}
          <div>
            <DotLottieReact
              src="https://lottie.host/a3971998-69da-473c-b3b2-c6195815be77/TSejO0waiZ.lottie"
              loop
              autoplay
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Content */}
          <div className="text-left space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              What We Offer
            </h3>
            <ul className="list-disc pl-6 text-gray-700 text-base space-y-2">
              <li>
                <strong>Web Development:</strong> Custom, fast-loading,
                responsive websites.
              </li>
              <li>
                <strong>UI/UX Design:</strong> Intuitive and attractive user
                experiences.
              </li>
              <li>
                <strong>Social Media Marketing:</strong> Grow and engage your
                audience online.
              </li>
              <li>
                <strong>Performance Ads:</strong> Google, Facebook & Instagram
                ad campaigns that convert.
              </li>
              <li>
                <strong>Graphic Design:</strong> Logos, banners, and visual
                brand identity.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTA />
    </div>
  );
}

export default Project;
