import React from "react";
import "../CSS/StayPackages.css";

import img1 from "../assets/slider11.jpg";
import img2 from "../assets/slider13.jpg";
import img3 from "../assets/slider12.jpg";

const StayPackages = () => {
  const packages = [
    {
      image: img1,
      title: "Royal Weekend Escape Package",
      subtitle: "From BHD 250 / Per person / 3 Night",
    },
    {
      image: img2,
      title: "Family Fun Staycation",
      subtitle: "From BHD 150 / 4 person / 2 Night",
    },
    {
      image: img3,
      title: "Family Fun Staycation",
      subtitle: "From BHD 150 / 4 person / 2 Night",
    },
  ];

  return (
    <div className="stay-packages">
      <h2 className="stay-heading">Stay packages</h2>
      <div className="package-grid">
        {packages.map((pkg, idx) => (
          <div
            className="package-card"
            style={{ backgroundImage: `url(${pkg.image})` }}
            key={idx}
          >
            <div className="package-overlay">
              <p className="season">All season</p>
              <h3>{pkg.title}</h3>
              <p className="subtitle">{pkg.subtitle}</p>
              <div className="buttons">
                <button className="btn">MORE</button>
                <button className="btn icon-btn">👜</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StayPackages;
