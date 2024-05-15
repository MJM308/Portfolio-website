import React from "react";
import bg from "../../assets/image/Main.png";
import "./Hero.css";
import resume from "../../../public/images/ManeshJaiswarCV.pdf";
const Hero = () => {
  return (
    <>
      <div id="Hero" className="main">
        <div className="main-containe">
          <span className="hello">
            Hello,
            <br />
          </span>
          <h3 className="title">
            I am <b>Manesh</b>
            <br />
            Software Developer
          </h3>
          <p>
            I am skilled Web Developer with experience in creating visually
            appealing and user friendly websites.
          </p>
          <a href={resume} target="blank">
            <button className="hire">Resume</button>
          </a>
        </div>
        <div className="main-img">
          <img src={bg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
