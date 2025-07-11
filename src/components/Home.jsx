import React from "react";
import HomeImg from "../assets/codeandcraft-home.webp";
import { Link } from "react-router-dom";
import { services } from "../data/homeData";
import { projectImages } from "../data/homeData";

function Home() {
  return (
    <section className="min-h-screen py-8 flex items-center px-4 flex-col gap-16 ">
      {/* Top Hero Section */}
      <div className="mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl pt-14 md:pt-3 lg:text-5xl font-bold mb-4 leading-tight">
              Crafting Digital <span className="text-blue-600">Excellence</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We transform your ideas into powerful digital solutions. From
              stunning websites to powerful web applications, we bring your
              vision to life with code and creativity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 focus:scale-95"
              >
                Our Services
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all active:scale-95 focus:scale-95 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View Our Work
              </Link>
            </div>
          </div>
          <div className="block">
            <img
              src={HomeImg}
              alt="Web Development Illustration"
              className="w-full h-auto rounded-lg shadow-lg animate-float"
            />
          </div>
        </div>
      </div>
      {/* What We Do ? */}
      <div className="flex flex-col items-center mx-auto">
        <h2 className="text-4xl pt-14 md:pt-3 lg:text-5xl font-bold mb-4 leading-tight">
          What we do ?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We provide smart digital services to help your business grow.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="h-16 w-16 mb-3 flex items-center justify-center bg-gray-50 rounded-full shadow shadow-gray-600 overflow-hidden">
                <img
                  src={service.icon}
                  alt={service.title + " icon"}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="text-xl text-blue-600 font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Here's clients project */}
      <div className="flex flex-col items-center mx-auto">
        <h2 className="text-4xl pt-14 md:pt-3 lg:text-5xl font-bold mb-4 leading-tight">
          Portfolio
        </h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          <span className="text-blue-600 text-[20px]">
            {" "}
            Our Web Design Portfolio & Client Projects
          </span>
          <br />
          From educational institutions to business growth platforms, our work
          speaks for itself. We specialize in crafting modern, responsive
          websites tailored to each client's unique goals. Our recent projects
          reflect our commitment to functionality, creativity, and user-focused
          design.
        </p>
        <div className="flex flex-col items-center gap-8">
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
          <Link className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all active:scale-95 focus:scale-95">
            View All Portfolios
          </Link>
        </div>
      </div>
            {/* Our Blogs */}
<div className="flex flex-col items-center mx-auto w-full">
  <h2 className="text-4xl pt-14 md:pt-3 lg:text-5xl font-bold mb-4 leading-tight">
    Blogs
  </h2>
  <p className="text-lg text-gray-600 mb-8 text-center ">
    <span className="text-blue-600 text-[20px]">
      Explore Insights, Tips & Updates
    </span>
    <br />
    Stay ahead with our latest blog posts on web design, development, digital marketing, and tech trends. We share practical guides, industry updates, and expert advice to help your business grow online.
  </p>
  <div className="flex flex-col items-center gap-8">
    <div className="flex flex-wrap justify-center gap-6 mt-4">
      {/* Blog Cards / Articles */}
    </div>
    <Link
      to="/blogs"
      className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all active:scale-95 focus:scale-95"
    >
      View All Blogs
    </Link>
  </div>
</div>

      {/* CTA */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-400 py-8 sm:py-20 rounded-2xl sm:rounded-3xl text-center px-4">
  <h4 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Elevate Your Online Presence?</h4>
  <h2 className="text-gray-200 uppercase tracking-widest text-sm mb-6">
    Let’s turn your vision into a powerful digital experience.
  </h2>
  <button className="border-2 cursor-pointer border-white text-white px-6 py-3 rounded-lg font-medium hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-95 focus:scale-95">
    Start Now
  </button>
</section>


<style jsx>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 1s ease-out;
  }
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`}</style>

    </section>
  );
}

export default Home;

