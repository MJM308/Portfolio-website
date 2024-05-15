import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/manesh-jaiswar-364a6b24a/"
          target="blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-dribbble"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="copyright">
        Copyright © 2023 <span>Manesh</span>. All Rights Reserved.
      </div>
      <div className="policy">Term & Policy</div>
    </footer>
  );
};

export default Footer;
