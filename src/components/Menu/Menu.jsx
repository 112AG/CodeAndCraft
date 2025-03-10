import React, { useContext } from "react";
import "./Menu.css"
import { AppContext } from "../../utils/AppContext";

const Menu = () => {
  const {menuOpen, setMenuOpen} = useContext(AppContext);

  return (
    <div className="menu-container">
      <svg
        className={`hamburger-menu ${menuOpen ? "active" : ""}`}
        width="42"
        height="42"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <path
          className="hamburger-stroke hamburger-top"
          d="M10.0095 13.7987H32.6435C34.2939 13.7987 37.7362 14.3962 38.3021 16.7863C39.0094 19.7738 39.7167 27.9895 32.6435 34.7115C26.985 40.0891 17.0827 38.446 17.0827 38.446C17.0827 38.446 6.47296 34.7115 4.35101 25.7489C2.22907 16.7863 5.76564 10.8112 11.4241 6.32984C17.0827 1.84852 27.6924 4.08921 30.5216 5.58295C33.3509 7.07669 31.9363 10.0642 30.5216 11.558C29.107 13.0518 18.0258 24.753 12.1315 30.977"
        />
        <path className="hamburger-stroke hamburger-middle" d="M10.0714 21H33.0714" />
        <path
          className="hamburger-stroke hamburger-bottom"
          d="M10.058 28.4219H32.8648C34.5278 28.1763 37.9963 27.0955 38.5665 24.7374C39.2792 21.7898 39.8479 12.6851 32 6.50005C23.5496 -0.159893 10.7707 5.57807 7.20714 10.7364C3.64358 15.8946 2.21816 24.0005 7.20714 31.3695C12.1961 38.7385 22.1741 38.7385 26.4504 37.2647C29.8714 36.0856 31.2018 35.2996 31.4394 35.054C32.1521 34.5627 33.0074 32.9907 30.7267 30.6326C28.446 28.2745 17.4227 16.8771 12.1962 11.4732"
        />
      </svg>
    </div>
  );
};

export default Menu;
