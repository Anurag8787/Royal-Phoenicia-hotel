// Navbar.jsx
import React from "react";
import "../CSS/Navbar.css";
import logo from "../assets/logo.png";
const Navbar1 = () => {
  return (
    <>
      <header>
        <div className="menu-btn">
          <button className="menu-button">
            <i className="fa-solid fa-bars"></i> Menu
          </button>
        </div>
        <div className="rating">
          <div className="year">2 0 2 2</div>
          <div className="logo">
            <img src={logo} alt="Slider 1" />
          </div>
          <div className="stars">★ ★ ★ ★ ★</div>
        </div>
        <div className="booking-btn">
          <button className="menu-button">
            <i className="fa-solid fa-calendar-check"></i> Booking
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar1;
