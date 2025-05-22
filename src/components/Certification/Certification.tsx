// HomeWork.tsx
import React from "react";
import "./Cert.css";
import workImg from "../../assets/Images/Michelle Hazel Certificate-Picsart-AiImageEnhancer.png";

const Certification: React.FC = () => {
  return (
    <div className="home_work">
      {/* <h1>work</h1> */}
      <p>Certification</p>
      {/* <div className="home_work_details"> */}
      {/* <div className="home_work_left"> */}
      <div className="cert-div-img">
        <img src={workImg} alt="work 01" />
      </div>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Certification;
