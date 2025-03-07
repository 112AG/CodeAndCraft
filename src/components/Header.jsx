import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../utils/AppContext";
import Menu from "./Menu/Menu";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const {menuOpen, setMenuOpen} = useContext(AppContext);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`fixed w-full py-4 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Code<span className="text-blue-600">&</span>Craft
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-800 font-semibold btn-border"
                  : "btn-border"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-800 font-semibold btn-border"
                  : "btn-border"
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-800 font-semibold btn-border"
                  : "btn-border"
              }
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-800 font-semibold btn-border"
                  : "btn-border"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="">
              <Menu/>              
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-64 py-3" : "max-h-0 overflow-hidden"
          }`}
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block w-full text-center hover:bg-blue-500 hover:text-white transition ease-in-out px-4 py-2 text-blue-600 font-bold "
                : "block w-full text-center hover:bg-blue-500 hover:text-white transition ease-in-out px-4 py-2 font-semibold text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block w-full text-center hover:bg-blue-500 hover:text-white transition ease-in-out px-4 py-2 text-blue-600 font-bold "
                : "block w-full text-center hover:bg-blue-500 hover:text-white transition ease-in-out px-4 py-2 font-semibold text-blue-600"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/portfolio"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block w-full text-center hover:bg-blue-500 hover:text-white transition ease-in-out px-4 py-2 text-blue-600 font-bold "
                : "block w-full text-center hover:bg-blue-500 hover:text-white transition ease-in-out px-4 py-2 font-semibold text-blue-600"
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block w-full text-center hover:bg-blue-500 hover:text-white transition ease-in-out px-4 py-2 text-blue-600 font-bold "
                : "block w-full text-center hover:bg-blue-500 hover:text-white transition ease-in-out px-4 py-2 font-semibold text-blue-600"
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>

      <style jsx>{`
        .btn-border {
          position: relative;
          color: blue;
          border: 2px solid transparent; /* Initially invisible border */
          font-size: 16px;
          font-weight: ;
          transition: color 0.3s ease;
        }

        .btn-border::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: blue;
          transition: width 0.3s ease;
        }

        .btn-border:hover {
          color: blue; /* Change text color on hover */
        }

        .btn-border:hover::after {
          width: 100%; /* Expand border width on hover */
        }
      `}</style>
    </div>
  );
}

export default Header;
