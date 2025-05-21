import React from "react";
import "./Navbar.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav_logo">
        <h1>
          <a href="index.html">
            Kristin Jones{" "}
            <span>
              <i className="fa-solid fa-paintbrush"></i>
            </span>
          </a>
        </h1>
      </div>

      <input type="checkbox" id="nav_checkbox" />
      <label htmlFor="nav_checkbox" id="nav_toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-list nav_toggle-open"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-x-lg nav_toggle-close"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </label>

      <div className="nav_links">
        <ul>
          <li>
            <a href="index.html">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">work</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </div>

      <div className="nav_socials">
        <a href="#">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="#">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
