import React from "react";
import "../CSS/SpaWellness.css";

import fitness from "../assets/slider10.jpg";
import dining from "../assets/slider9.jpg";
import spa from "../assets/slider8.jpg";

const SpaWellness = () => {
  const items = [
    {
      image: fitness,
      title: "Fitness",
      subtitle: "Center",
    },
    {
      image: dining,
      title: "On-Site",
      subtitle: "Dining",
      button: "Spa & Wellness",
    },
    {
      image: spa,
      title: "Wellness Center",
      subtitle: "& Spa",
      desc: "Guests can unwind with various spa services, including full-body massages, steam rooms, and other spa facilities.",
    },
  ];

  return (
    <div className="spa-section">
      {items.map((item, idx) => (
        <div
          className="spa-card"
          key={idx}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="spa-content">
            <h2>
              {item.title}
              <br />
              <span>{item.subtitle}</span>
            </h2>
            {item.desc && <p>{item.desc}</p>}
            {item.button && <button>{item.button}</button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpaWellness;
