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
        An Essential Element in the Energizing Symphony of Daily Rituals
        </h1>
        <p className="primary-text">
        A delightful journey that captivates with every aromatic sip. 
        Indulge in the comforting embrace of bold brews and the subtle dance of complex notes, making each moment a celebration of coffee perfection."
        </p>
        <p className="primary-text">
        A rich infusion that transcends the ordinary. 
        Embrace the bold harmony of flavors, where each sip unfolds a symphony of indulgence, creating a moment that lingers like a well-brewed memory
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;