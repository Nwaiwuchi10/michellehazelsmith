import React from "react";
import { FaCalendarCheck, FaClipboard } from "react-icons/fa";
import { FaWhatsapp, FaMessage } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import "./Footer.css";
const Footer: React.FC = () => {
  const phoneNumber = "+16402022405";
  const WhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  //   const handleCopyEmail = () => {
  //     const email = "youremail@example.com";
  //     navigator.clipboard.writeText(email);
  //     alert("Email copied to clipboard!");
  //   };

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
            <span onClick={WhatsappClick}>
              <FaCalendarCheck />
            </span>
            let's connect
          </a>
          <button>
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
          {/* <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a> */}
          <a
            href="mailto:michellehazelsmith@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMessage />
          </a>
          <a
            // href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            onClick={WhatsappClick}
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
        2025
      </div>
    </footer>
  );
};

export default Footer;
