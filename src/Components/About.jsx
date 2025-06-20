// src/components/About.jsx
import React from "react";
import "../CSS/About.css";
import slider14 from "../assets/slider14.jpg";
import slider7 from "../assets/slider7.jpg";
import slider6 from "../assets/slider6.jpg";

const About = () => {
  return (
    <div className="about-section">
      <div className="intro-text">
        <h1>
          Exceptional gastronomy
          <br />
          served in elegant spaces.
        </h1>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={slider14} alt="Reception" />
          <img src={slider7} alt="Reception 2" />
          <img src={slider6} alt="Reception 3" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Royal Phoenicia Hotel offers an array of top-tier facilities
            designed to enhance the comfort and convenience of every guest. The
            hotel features a luxurious spa and wellness center, where guests can
            indulge in soothing treatments and rejuvenating massages. For those
            seeking to maintain their fitness routine, the fully equipped gym
            provides a space for exercise, while the outdoor pool offers a
            relaxing environment to unwind. Dining at the hotel is a pleasure,
            with an on-site restaurant offering a diverse selection of cuisines
            in an elegant atmosphere. Additionally, the hotel provides business
            facilities, including meeting rooms and event spaces, ideal for
            corporate travelers. With its comprehensive range of services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
