import React from "react";
import HomeImg from "../assets/home.jpg";
import { Link } from "react-router-dom";

function Home() {

  return (
    <section
      className={`min-h-screen py-8 flex items-center px-4`}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl  lg:text-5xl font-bold mb-4 leading-tight">
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
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Our Services
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all"
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
