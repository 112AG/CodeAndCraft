import React from "react";
import { Link } from "react-router-dom";
import WhatweDo from "../componentsTwo/WhatweDo";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Services() {
  return (
    <section className="min-h-screen py-20 px-4 container mx-auto flex flex-col items-center justify-center gap-12">
      <div>
        <div className="text-center mb-16">
          <h2 className="text-4xl pt-14 md:pt-3 lg:text-5xl font-bold mb-4 leading-tight">
            Our Services
          </h2>{" "}
          <p className="text-lg text-gray-600 mb-8 text-center">
            We deliver complete digital solutions from design and development to
            marketing and growth <br className="hidden sm:block" /> tailored to
            elevate your brand online.
          </p>
        </div>

        <WhatweDo />
      </div>

      <div className="flex w-full flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 flex flex-col gap-4 p-4">
          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-2 text-sm">
            Our Approach
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight text-gray-900">
            Code&Craft Is Here To Build Your Digital Success
          </h2>
          <div className="text-gray-700 text-base md:text-lg leading-relaxed">
            At Code&Craft.co, we specialize in delivering full-spectrum digital
            solutions that empower your business to stand out and scale. From
            responsive websites and custom web apps to engaging UI/UX design,
            performance marketing, and social media growth, we turn ideas into
            impactful digital experiences.
            <br />
            <br />
            Whether you're a startup, school, or growing brand, our mission is
            simple: design smart, develop better, and market with purpose. With
            every pixel and every click, we focus on outcomes that drive
            engagement, build trust, and grow your business.
          </div>
        </div>
        <div className="sm:w-1/2 flex items-center justify-center w-full">
          {/* lottiefiles  */}
          <DotLottieReact
            src="https://lottie.host/19d90e2f-cca0-4bac-bc93-9d3f8fabe265/XmuE53dZia.lottie"
            loop
            autoplay
          />
        </div>
      </div>

      <div className="">
        <h3 className="text-4xl pt-14 md:pt-3 lg:text-5xl font-bold mb-4 leading-tight text-center">
          What We Deliver for Your Business
        </h3>
        <p className="text-lg text-gray-600 mb-8 text-center">
          At <span className="font-bold text-blue-600">Code&Craft.co</span>, we
          offer a full suite of digital services to help your business grow,
          engage, and convert customers.
          <br />
          Here's how each service supports your goals:
        </p>

        <ul className="text-left mt-8 flex flex-col gap-6">
          <li>
            <span className="font-bold text-blue-600 text-[22px]">
              🔹 Web Development:
            </span>{" "}
            <span className="text-lg text-gray-600 mb-8 text-center">
              We build modern, responsive websites and custom web applications
              using the latest technologies to ensure speed, security, and
              scalability. Whether you need a landing page or a full platform,
              we handle it all.
            </span>
          </li>
          <li>
            <span className="font-bold text-blue-600 text-[22px]">
              🔹 UI/UX Design:
            </span>{" "}
            <span className="text-lg text-gray-600 mb-8 text-center">
              We craft beautiful and user-friendly interfaces that keep your
              visitors engaged. Our design decisions are data-driven to ensure
              ease of use and seamless navigation.
            </span>
          </li>
          <li>
            <span className="font-bold text-blue-600 text-[22px]">
              🔹 Graphic Design:
            </span>{" "}
            <span className="text-lg text-gray-600 mb-8 text-center">
              From logo creation to social media creatives and full brand kits,
              we provide high-impact visuals that reflect your brand personality
              and build identity.
            </span>
          </li>
          <li>
            <span className="font-bold text-blue-600 text-[22px]">
              🔹 Ad Campaigns:
            </span>{" "}
            <span className="text-lg text-gray-600 mb-8 text-center">
              We run strategic ad campaigns across platforms like Google,
              Facebook, and Instagram to increase reach, drive traffic, and
              convert leads. We also monitor performance to ensure optimal ROI.
            </span>
          </li>
          <li>
            <span className="font-bold text-blue-600 text-[22px]">
              🔹 Social Media Marketing:
            </span>{" "}
            <span className="text-lg text-gray-600 mb-8 text-center">
              Our team manages your presence across platforms, builds content
              calendars, engages with your audience, and grows your online
              community to increase visibility and trust.
            </span>
          </li>
        </ul>

        <p className="mt-8 text-gray-700 text-lg md:text-xl font-medium">
          Whether you're launching a startup, scaling your brand, or modernizing
          your digital presence — we’re here to craft custom solutions tailored
          to your vision.
        </p>
      </div>
    </section>
  );
}

export default Services;
