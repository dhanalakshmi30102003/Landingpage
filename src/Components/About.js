import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        Coffee: A Crucial Brew
        </h1>
        <p className="primary-text">
        Sip into the world of coffee bliss, where every cup tells a story of comfort and rich flavors, 
        inviting you to relish the essence of pure indulgence
        </p>
        <p className="primary-text">
          sip a cup of hot coffee and enjoy your day!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Take a Look
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;