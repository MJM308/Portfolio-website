import React from "react";
import "./SkillLevel.css";
import LanImg from "../../assets/image/AllLan.jpg";
const SkillLevel = () => {
  return (
    <div id="SkillLevel" className="skill-container">
      <div className="photo-container">
        <img src={LanImg} alt="" />
      </div>
      <div className="skill">
        <h3>My Skills</h3>
        <p>
          Lisque persius interesset his et, in quot quidam persequeris vim, ad
          mea essent possim iriure.
        </p>
        <div className="progress-container">
          <div className="prograss1">
            <div className="pro-title">
              <p>HTML</p>
              <p>96%</p>
            </div>
            <div className="pro-bar">
              <div className="pro-html"></div>
            </div>
          </div>
          <div className="prograss1">
            <div className="pro-title">
              <p>CSS</p>
              <p>85%</p>
            </div>
            <div className="pro-bar">
              <div className="pro-css"></div>
            </div>
          </div>
          <div className="prograss1">
            <div className="pro-title">
              <p>Java Script</p>
              <p>70%</p>
            </div>
            <div className="pro-bar">
              <div className="pro-js"></div>
            </div>
          </div>
          <div className="prograss1">
            <div className="pro-title">
              <p>React</p>
              <p>60%</p>
            </div>
            <div className="pro-bar">
              <div className="pro-react"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillLevel;
