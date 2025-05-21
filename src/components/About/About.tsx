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
          <h1>about</h1>
          <p>A Pencil, A Vision, & Endless Possibilities</p>
          <p>
            Hey there! I’m Kristin Jones, an illustrator with a passion for
            bringing stories to life through colors, lines, and creativity. Ever
            since I could hold a pencil, I’ve been sketching worlds beyond
            imagination—whether it’s whimsical characters, dreamy landscapes, or
            intricate designs. <br />
            <br />
            With a love for digital painting, I specialize in creating
            illustrations for books, branding, social media, and personal
            commissions. My art is inspired by nature, fantasy, everyday life,
            emotions and I believe that every piece of artwork has a story
            waiting to be told.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
