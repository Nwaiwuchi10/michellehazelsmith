import React from "react";
import "./About.css"; // Optional: if you want to move styles separately
import abtimg from "../../assets/Images/michelle2.jpeg";
const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about_content">
        <div className="about_left">
          <img src={abtimg} alt="About" />
        </div>
        <div className="about_right">
          <h1 style={{ marginTop: "60px" }}>About</h1>
          <p>Financial Consultant and Wealth Creation Strategist</p>
          <p style={{ marginBottom: "120px" }}>
            Hey there! I’m Michelle Hazel smith, is a financial consultant who
            understands that there’s more to financial planning than helping you
            decide how to invest. Because those decisions aren’t just about
            money, they’re about what that money can do–for you, your family and
            your community.
            <br />
            <br />
            I'm a Financial Consultant and Wealth Creator living in USA, who has
            over 20 years of professional experience, and has merits of awards
            as well as Professional Certificate/ license in Europe ,
            North-American and Africa.
            <br />
            <br />
            Evelyn Susanne Scarlett is employed by Elite Globe INC., which
            provides investment advisory service for clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
