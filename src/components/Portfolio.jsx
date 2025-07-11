import React from "react";
import { Link } from "react-router-dom";
import AnimationDemo from "../assets/AnimationDemo.png";

function Portfolio() {
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "E-commerce",
    image:
      "https://cdn.prod.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298cf3bb93c3f_6309fc4305a883fc64b964cc_DrawKit0041_E-commerce_and_Online_Shopping_Banner.png",
    description:
      "A full-featured online store with payment integration and inventory management.",
    link: "https://your-ecommerce-link.com",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 2,
    title: "Restaurant Website",
    category: "Restaurant",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/restaurant-illustration-download-in-svg-png-gif-file-formats--cafe-food-shop-diner-pack-e-commerce-shopping-illustrations-3637505.png",
    description:
      "Interactive menu and reservation system for a local restaurant.",
    link: "https://your-restaurant-link.com",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    category: "Portfolio",
    image:
      "https://static.vecteezy.com/system/resources/previews/004/526/800/non_2x/portfolio-folder-rgb-color-icon-keeping-paper-documents-safely-carrying-papers-and-drawings-in-case-keep-office-school-documents-organized-isolated-illustration-simple-filled-line-drawing-vector.jpg",
    description:
      "Creative portfolio site for a digital artist with animated transitions.",
    link: "https://your-portfolio-link.com",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 4,
    title: "School Management System",
    category: "Education",
    image:
      "https://cdni.iconscout.com/illustration/premium/thumb/school-building-illustration-download-in-svg-png-gif-file-formats--primary-back-to-pack-education-illustrations-5349409.png",
    description:
      "Comprehensive platform for managing student records and curriculum.",
    link: "https://your-school-system-link.com",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 5,
    title: "Animated Business Showcase Website",
    category: "Animations",
    image: AnimationDemo,
    description:
      "A dynamic, scroll-animated website built with GSAP and Locomotive Scroll to visually present business services and portfolios with smooth transitions and immersive interactions.",
    link: "https://wizard-rho.vercel.app/",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];


  return (
    <section className={`min-h-screen py-20 px-4 bg-gray-100`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Our Portfolio</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check out some of our recent projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link to={project.link} className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  Demo →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
