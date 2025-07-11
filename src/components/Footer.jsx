import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Footer() {
  const [subscriber, setSubscriber] = useState("");

  function handleChange(e) {
    setSubscriber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    var templateParams = {
      to_name: "Code&Craft(C&C)",
      from_name: subscriber,
    };

    emailjs
      .send(
        "service_3scw56h",
        "template_97s6bxq",
        templateParams,
        "QyPpPAD_ftws17IbR"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubscriber("");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  }
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                C<span className="text-blue-400">&</span>C
              </h3>
              <div className="text-gray-400">
                <p className="text-gray-400 text-[14px]">
At C&C, we craft smart digital solutions to help your business grow online. From web design and development to UI/UX, graphic design, ad campaigns, and social media marketing — we deliver creative, reliable, and results-driven services you can trust.</p>
              </div>
            </div>
            <div>
              <h3>Connect with :</h3>
              <ul className="flex text-gray-400 gap-3">
                <li>
                  <Link className="hover:text-blue-400 transition-colors">
                    <i className="ri-facebook-line"></i>
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-400 transition-colors">
                    <i className="ri-instagram-line"></i>
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-400 transition-colors">
                    <i className="ri-linkedin-line"></i>
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-blue-400 transition-colors">
                    <i className="ri-whatsapp-line"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link className="hover:text-blue-400 transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-400 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-400 transition-colors">
                  Maintenance & Support
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-400 transition-colors">
                  Graphic design
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-400 transition-colors">
                  Ad campaigns
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-400 transition-colors">
                  Social media marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/"
                  onClick={() => setActiveSection("home")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => setActiveSection("services")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => setActiveSection("portfolio")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setActiveSection("contact")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for web development tips and updates.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex border-2 border-blue-600 rounded-[10px]"
            >
              <input
                type="email"
                onChange={handleChange}
                placeholder="Your email"
                className="px-3 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors">
                →
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-gray-400 text-center">
          <p>© {new Date().getFullYear()} Code&Craft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
