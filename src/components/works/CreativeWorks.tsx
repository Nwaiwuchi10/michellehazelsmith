// HomeWork.tsx
import React from "react";
import "./Work.css";
import workImg from "../../assets/Images/Michelle Hazel Certificate-Picsart-AiImageEnhancer.png";

const HomeWork: React.FC = () => {
  return (
    <div className="home_work">
      {/* <h1>work</h1> */}
      <p>Certification</p>
      <div className="home_work_details">
        <div className="home_work_left">
          <div>
            <img src={workImg} alt="work 01" />
          </div>
          {/* <div>
            <img src={workImg2} alt="work 02" />
          </div>
        </div>
        <div className="home_work_middle">
          <div>
            <img src={workImg3} alt="work 03" />
          </div>
          <div>
            <img src={workImg4} alt="work 04" />
          </div>
        </div>
        <div className="home_work_right">
          <div>
            <img src={workImg5} alt="work 05" />
          </div>
          <div>
            <img src={workImg6} alt="work 06" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeWork;
