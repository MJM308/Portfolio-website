import React from "react";
import "./Skill.css";
import design from "../../assets/image/design.webp";
const Skill = () => {
  return (
    <>
      <div id="Skill">
        <div className="skillTitle">
          <h1>What to do</h1>
        </div>
        <div className="skillDesc">
          I combine our passion for design focused in people with advanced
          development technologies. 350+ clients have procured exceptional
          results and happiness while working with me.
        </div>
        <div className="skillBars">
          <div className="skillBar">
            <div className="skillImg">
              <img src={design} alt="logo" />
            </div>
            <div className="skillHead">
              <div className="skillHeadTitle">UI/UX Design</div>
              <div className="skillHeadDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
                soluta.
              </div>
            </div>
          </div>
          <div className="skillBar">
            <div className="skillImg">
              <img src={design} alt="logo" />
            </div>
            <div className="skillHead">
              <div className="skillHeadTitle">Website Development</div>
              <div className="skillHeadDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
                soluta.
              </div>
            </div>
          </div>
          <div className="skillBar">
            <div className="skillImg">
              <img src={design} alt="logo" />
            </div>
            <div className="skillHead">
              <div className="skillHeadTitle">App Design</div>
              <div className="skillHeadDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
                soluta.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
