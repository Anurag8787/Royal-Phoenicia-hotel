import React from "react";
import "../CSS/Facilities.css";

const facilities = [
  {
    icon: "🛎️",
    title: "Restaurant",
    description:
      "Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest.",
  },
  {
    icon: "🏊‍♂️",
    title: "Pool",
    description:
      "Royal Phoenicia Hotel features multiple outdoor swimming pools, including a dedicated children's pool, offering relaxation for all guests.",
  },
  {
    icon: "🚪",
    title: "Room",
    description:
      "Royal Phoenicia Hotel in Manama, Bahrain, offers a variety of spacious and well-equipped rooms to suit diverse guest preferences.",
  },
];

const Facilities = () => {
  return (
    <div className="facilities-section">
      {facilities.map((item, index) => (
        <div key={index} className="facility-card">
          <div className="facility-icon">{item.icon}</div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Facilities;
