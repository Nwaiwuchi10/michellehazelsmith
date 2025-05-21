import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import testimony from "../../assets/Images/testimony.jpg";
import "./Testimony.css";
const Testimonials: React.FC = () => {
  return (
    <div className="testimonials">
      <h1>testimonials</h1>
      <p>What Clients Say</p>
      <div className="testimonial">
        <div>
          <img src={testimony} alt="Testimonial from Emma Carter" />
        </div>
        <div>
          <span>
            <FaQuoteLeft />
          </span>
          <p>
            Working with Kristin was an absolute joy! Her illustrations brought
            our brand to life with vibrant colors and stunning detail. She
            perfectly captured our vision and delivered beyond our expectations.
            Highly professional, creative, and easy to collaborate with. I can’t
            recommend her enough!
          </p>
          <p>Emma Carter, Creative Director at Luna & Co.</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
