import React from "react";
import { FaCalendarCheck, FaClipboard } from "react-icons/fa";
import { FaLinkedin, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import "./Footer.css";
const Footer: React.FC = () => {
  const handleCopyEmail = () => {
    const email = "youremail@example.com";
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <footer>
      <div className="footer_top">
        <div>
          <p>I'm Available for Freelance Projects</p>
          <p>
            Feel free to initiate a project and let's explore how we can
            collaborate.
          </p>
        </div>
        <div className="footer_top-CTA">
          <a href="#contact">
            <span>
              <FaCalendarCheck />
            </span>
            let's connect
          </a>
          <button onClick={handleCopyEmail}>
            <span>
              <FaClipboard />
            </span>
            copy email
          </button>
        </div>
      </div>

      <div className="footer_middle">
        <ul className="footer_middle_nav_links">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#about">about</a>
          </li>
          <li>
            <a href="#work">work</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>

        <div className="footer_middle_socials">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer_bottom">
        Copyright{" "}
        <span>
          <FaRegCopyright />
        </span>{" "}
        2025 xanny_sample_portfolio
      </div>
    </footer>
  );
};

export default Footer;
