import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { TiThMenu } from "react-icons/ti";
export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <img src="images/logo2.jpg" alt="" />
            <p>manesh</p>
          </div>
          <ul>
            <Link
              activeClass="active"
              to="Hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li>Home</li>
            </Link>
            <Link
              activeClass="active"
              to="Skill"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <li>About</li>
            </Link>
            <Link
              activeClass="active"
              to="Work"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <li>Work</li>
            </Link>
            <Link
              activeClass="active"
              to="SkillLevel"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li>Skill</li>
            </Link>
            <Link
              activeClass="active"
              to="client"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li>Client</li>
            </Link>
          </ul>
          <button
            className="contact-btn"
            onClick={() => {
              document
                .getElementById("Contact")
                .scrollIntoView({ behavior: "smooth", offset: "50" });
            }}
          >
            Contact
          </button>
        </div>
        <div className="menu">
          <div className="menubar">
            <div className="mobile-nav">
              <Link
                activeClass="active"
                to="Hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li>Home</li>
              </Link>
              <Link
                activeClass="active"
                to="Skill"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                <li>About</li>
              </Link>
              <Link
                activeClass="active"
                to="Work"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                <li>Work</li>
              </Link>
              <Link
                activeClass="active"
                to="SkillLevel"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li>Skill</li>
              </Link>
              <Link
                activeClass="active"
                to="client"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <li>Client</li>
              </Link>
              <button
                className="mobile-con"
                onClick={() => {
                  document
                    .getElementById("Contact")
                    .scrollIntoView({ behavior: "smooth", offset: "50" });
                }}
              >
                Contact
              </button>
            </div>
            <TiThMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
