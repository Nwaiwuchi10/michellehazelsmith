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
