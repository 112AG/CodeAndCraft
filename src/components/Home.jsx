import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import WhatweDo from "../componentsTwo/WhatweDo";
import ClientsProjects from "../componentsTwo/ClientsProjects";
import Blog from "../componentsTwo/Blog";
import CTA from "../componentsTwo/CTA";

function Home() {
  return (
    <section className="min-h-screen py-8 flex items-center px-4 flex-col gap-16 ">
      {/* Top Hero Section */}
      <div className="pt-12">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
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
          <div className="flex justify-center animate-float">
            <DotLottieReact
              src="https://lottie.host/ab64ff42-fb64-457a-89c0-6145fabf922c/Z1Eqr3gLYX.lottie"
              autoplay
              loop
              style={{
                width: "100%",
                maxWidth: 550,
                height: "auto",
                aspectRatio: "1/1",
                objectFit: "contain",
                display: "block",
              }}
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
        <WhatweDo/>
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
        <ClientsProjects/>
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
          Stay ahead with our latest blog posts on web design, development,
          digital marketing, and tech trends. We share practical guides,
          industry updates, and expert advice to help your business grow online.
        </p>
        <Blog/>
      </div>

      {/* CTA */}
      <CTA/>

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
