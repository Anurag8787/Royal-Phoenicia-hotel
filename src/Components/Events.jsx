// src/components/CompanyCard.jsx
import React from "react";
import "../CSS/Events.css";
import slider15 from "../assets/slider15.jpg";

const Events = () => {
  return (
    <div className="company-section">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${slider15})` }}
      >
        <div className="card">
          <h2>For companies</h2>
          <p>
            Host your formal business meetings in a unique and refreshing
            setting. Enjoy elegant venues, comfortable accommodations, and
            exceptional cuisine that elevate every professional gathering.
          </p>
          <button className="more-btn">MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Events;
