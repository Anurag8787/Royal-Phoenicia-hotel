import React, { useState, useEffect } from "react";
import "../CSS/HotelBox.css";
import slider3 from "../assets/slider3.jpg";
import slider4 from "../assets/slider4.jpg";
import slider5 from "../assets/slider5.jpg";

const HotelBox = () => {
  const slides = [
    {
      image: slider3,
      features: [
        "Favorite Hotel",
        "Business and Event Spaces",
        "Diverse Dining Options",
        "Multiple Swimming Pools",
        "Family-Friendly Amenities",
      ],
    },
    {
      image: slider4,
      features: [
        "Luxury Spa Services",
        "Complimentary Breakfast",
        "24/7 Room Service",
        "Fitness Center",
        "Concierge Desk",
      ],
    },
    {
      image: slider5,
      features: [
        "Eco-Friendly Practices",
        "Airport Shuttle",
        "Pet-Friendly Rooms",
        "City Tour Packages",
        "Secure Parking",
      ],
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feature-container">
      <div className="hero-slider1">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className="feature-box">
                <ul className="feature-list">
                  {slide.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelBox;
