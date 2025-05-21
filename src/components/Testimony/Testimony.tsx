import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import testimony from "../../assets/Images/michelle4.jpeg";
import "./Testimony.css";
const Testimonials: React.FC = () => {
  return (
    <div className="testimonials">
      <h1>Vission</h1>
      <p>My Career Mission</p>
      <div className="testimonial">
        <div>
          <img src={testimony} alt="Testimonial from Emma Carter" />
        </div>
        <div>
          {/* <span>
            <FaQuoteLeft />
          </span> */}
          <p>
            As a Crypto Investment Banker & Consultant, my vision is to redefine
            financial empowerment through blockchain innovation, providing
            institutions, startups, and high-net-worth individuals with trusted,
            data-driven, and strategic guidance in navigating the evolving
            digital asset landscape.
            <br />
            <br />I aim to become a global leader in crypto finance advisory,
            facilitating secure capital flow, regulatory compliance, and
            sustainable digital asset growth. By combining traditional
            investment banking principles with cutting-edge blockchain insights,
            I strive to bridge the gap between legacy finance and decentralized
            systems—ensuring that clients capitalize on the transformative
            potential of crypto assets.
          </p>

          <p>
            Ultimately, my mission is to foster transparency, trust, and
            transformation in digital finance, enabling a future where
            blockchain-driven wealth creation is accessible, intelligent, and
            resilient..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
