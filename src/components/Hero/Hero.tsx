import React from "react";
import "./Hero.css"; // Assuming you have corresponding styles
import { FaCalendarCheck } from "react-icons/fa";
import heroImg from "../../assets/Images/michelle5.jpeg";
const Hero: React.FC = () => {
  return (
    <div>
      <div className="home_hero">
        <div className="home_hero_left">
          <h1>
            <span role="img" aria-label="wave">
              👋
            </span>
            Hello! I’m Kristin Jones
          </h1>
          <p>Bringing Ideas to Life Through Illustration</p>
          <p>
            A passionate illustrator creating vibrant and meaningful visuals for
            brands, books, and digital experiences.
          </p>
          <a href="#" className="home_hero_left-CTA">
            <span>
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
      </div>

      <div className="home_services">
        <h1>services</h1>
        <p>Illustration Services Tailored to Your Needs</p>
        <div className="home_services_details">
          <div>
            <div>
              <p>Digital Illustration</p>
            </div>
          </div>
          <div>
            <div>
              <p>Character Design</p>
            </div>
          </div>
          <div>
            <div>
              <p>Editorial Illustration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
