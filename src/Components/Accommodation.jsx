import React from "react";
import "../CSS/Accommodation.css";

import roomsImg from "../assets/slider7.jpg";
import poolsImg from "../assets/slider4.jpg";
import diningImg from "../assets/slider6.jpg";

const Accommodation = () => {
  const data = [
    { label: "Rooms", image: roomsImg },
    { label: "Pools", image: poolsImg },
    { label: "Dining", image: diningImg },
  ];

  return (
    <div className="accommodation">
      <div className="accommodation-container">
        {data.map((item, index) => (
          <div
            key={index}
            className="accommodation-box"
            style={{ "--bg": `url(${item.image})` }}
          >
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <button className="accommodation-btn">
  <span>Accommodation</span>
</button>

    </div>
  );
};

export default Accommodation;
