import React, { useState, useEffect } from "react";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import "../CSS/Slider.css";

const Slider = () => {
  const images = [slider1, slider2];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
            <div className="hero-overlay">
              <h2>Hotel</h2>
              <h2>Royal Phoenicia</h2>
              <p>YOUR FAVOURITE PLACE. OUR FAMILY STORY.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
