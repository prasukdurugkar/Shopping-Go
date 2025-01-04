import React from "react";
import "./about.css";
import { Avatar, Button } from "@material-ui/core";
import founder from "../images/founder.jpg";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/sujit_chougule_7/";
  };
  return (
    <div className="aboutSection">
      <div className="">
        <h1>About Us</h1>

        <div>
          <div className="midBox">
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={founder}
              alt="Founder"
            />
            <h2>Sujit Kiran Chougule</h2>
            <a href="mailto:sujitchougule2003@gmail.com">
              <Button>
                <h4>sujitchougule@gmail.com</h4>
              </Button>
            </a>
            <div className="botomLinks">
              <a href="https://github.com/sujitChougule">GitHub</a>
              <a href="https://www.linkedin.com/in/sujit-chougule-259932230/">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/sujit_chougule_7/">
                Instagram
              </a>
            </div>
            <div className="para">
              <p>
                🚀 MERN Stack Wizard 🌐 Hey there! 👋 I'm Sujit Chougule, a
                passionate MERN (MongoDB, Express.js, React, Node.js) developer
                on a mission to craft seamless and dynamic web experiences. 💻✨
                Whether I'm wrangling data in MongoDB, building with React
                magic, or ensuring smooth server operations with Node.js, I
                thrive on turning ideas into functional and user-friendly
                applications. 🚀 Let's code dreams into reality! 💡✌️
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
