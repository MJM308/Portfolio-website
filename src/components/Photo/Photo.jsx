import React from "react";
import "./Photo.css";
import img1 from "../../assets/image/2-img.jpeg";
import img2 from "../../assets/image/1-img.jpg";
import img3 from "../../assets/image/3-img.jpeg";
import img4 from "../../assets/image/4-img.jpeg";
import img5 from "../../assets/image/5-img.jpeg";
import img6 from "../../assets/image/8-img.jpeg";
const Photo = () => {
  return (
    <div id="services">
      <div className="srv-main">
        <h2 className="srv-title">Our Photos</h2>
        <p className="srv-pr">
          How I can help take your next project to new heights! Thousands of
          clients have procured exceptional results while working with Me.
        </p>
      </div>
      <div className="design">
        <a href={img1}>
          <div className="gp-design">
            <img src={img1} alt="" />
          </div>
        </a>
        <a href={img2}>
          <div className="wp-design">
            <img src={img2} alt="" />
          </div>
        </a>
        <a href={img3}>
          <div className="wd-design">
            <img src={img3} alt="" />
          </div>
        </a>
        <a href={img4}>
          <div className="bi-design">
            <img src={img4} alt="" />
          </div>
        </a>
        <a href={img5}>
          <div className="ba-design">
            <img src={img5} alt="" />
          </div>
        </a>
        <a href={img6}>
          <div className="dm-design">
            <img src={img6} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Photo;
