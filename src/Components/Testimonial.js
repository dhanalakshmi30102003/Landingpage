import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">Explore firsthand experiences: Hear what our customers are saying about us</h1>
        <p className="primary-text">
        Savoring the exquisite blends at this coffee haven is a delight – each cup is a masterpiece of flavor. 
        The inviting ambiance and skilled baristas make this spot a must-visit for any coffee connoisseur
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Savoring the exquisite blends at this coffee haven is a delight-each cup is a masterpiece of flavor.
        The inviting ambiance and skilled baristas make this spot a must-visit for any coffee connoisseur
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Mathew</h2>
      </div>
    </div>
  );
};

export default Testimonial;