import React from "react";
import "./Hero.css"; // Assuming you have corresponding styles
import { FaCalendarCheck } from "react-icons/fa";
import heroImg from "../../assets/Images/michelle5.jpeg";
import whatsapp from "../../assets/Images/whatsapp.png";
const Hero: React.FC = () => {
  const phoneNumber = "+16402022405";
  const WhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <div>
      <div className="home_hero">
        <div className="home_hero_left">
          <h1>
            <span role="img" aria-label="wave">
              👋
            </span>
            Hello! I’m Michelle Hazel smith
          </h1>
          <p>Crypto Investment Banker & Consultant</p>
          <p>
            Michelle Hazel smith is a seasoned Financial Consultant and Wealth
            Creation Strategist based in the United States, who has over 20
            years of professional experience to her field. She holds numerous
            prestigious awards and possesses certified licenses and professional
            credentials across Europe, North America, and Africa.
          </p>
          <p>
            <svg
              style={{ alignContent: "center" }}
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
            </svg>
            <span style={{ marginLeft: "5px", marginTop: "-5px" }}>
              michellehazelsmith@gmail.com
            </span>
          </p>
          <a href="#" className="home_hero_left-CTA">
            <span onClick={WhatsappClick}>
              <FaCalendarCheck />
            </span>
            Let's Talk
          </a>
        </div>
        <div className="home_hero_right">
          <div>
            <img src={heroImg} alt="Illustration of Kristin Jones" />
          </div>
        </div>
        <div className="whatsapp-img-div">
          <div className="whatsapp-img-size" onClick={WhatsappClick}>
            <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
          </div>{" "}
        </div>
      </div>

      <div className="home_services">
        <h1>services</h1>
        <p>Illustration Services Tailored to Your Needs</p>
        <div className="home_services_details">
          <div>
            <div>
              <p>Trading</p>
            </div>
          </div>
          <div>
            <div>
              <p>Wallet</p>
            </div>
          </div>
          <div>
            <div>
              <p>Blockchain</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
