import React, { useRef } from "react";
import "./Contact.css";
import comp1 from "../../assets/image/google.png";
import comp2 from "../../assets/image/microsoft.jpg";
import comp3 from "../../assets/image/amazon.png";
import comp4 from "../../assets/image/flip.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_74c3ycj", "template_4hpf8n8", form.current, {
        publicKey: "DETlTSKJtdepviOJG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Send !");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div id="client">
        <h2>My Client</h2>
        <p>
          I have had opportunity to worka devirse group of companies.Some of the
          notable companies I have worked with include.
        </p>
        <div className="clientComp">
          <img src={comp1} alt="" />
          <img src={comp2} alt="" />
          <img src={comp3} alt="" />
          <img src={comp4} alt="" />
        </div>
      </div>
      <div id="Contact">
        <div className="conTitle">
          <h2>Contact Me</h2>
        </div>
        <div className="conDesc">
          <p>Please fill out the form below to discuss only work opportunies</p>
        </div>
        <form action="" ref={form} onSubmit={sendEmail}>
          <div className="ConForm">
            <input
              type="text"
              placeholder="Your Name"
              className="cntInt"
              name="user_name"
            />
            <br />
            <input
              type="text"
              placeholder="Your Email"
              className="cntInt"
              name="user_email"
            />
            <br />
            <textarea
              type="text"
              placeholder="Your messase"
              className="cntIntArea"
              name="message"
            />
          </div>
          <button className="conBtn" value="Send">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
