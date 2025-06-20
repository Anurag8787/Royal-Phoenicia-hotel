import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="container-wrapper">
      <div className="left-panel">
        <div className="nav-section">
          <p>I</p>
          <h3>Rooms</h3>
        </div>
        <div className="nav-section">
          <p>II</p>
          <h3>Wellness</h3>
        </div>
        <div className="nav-section">
          <p>III</p>
          <h3>Gastro</h3>
        </div>
        <div className="nav-section">
          <p>IV</p>
          <h3>Hotel</h3>
        </div>
        <div className="nav-section">
          <p>V</p>
          <h3>Events</h3>
        </div>
        <br />
        <div className="more-info">
          <h4>More about rooms</h4>
          <ul>
            <li>120 comfortable rooms</li>
            <li>Dinings</li>
            <li>Packages</li>
            <li>Pools</li>
          </ul>
        </div>
      </div>

      <div className="right-panel">
        <div className="logo1">ROYAL</div>
        <h2>Wellness & Pools</h2>
        <h2>Hotel Royal Phoenicia</h2>
        <p>
          Building 185
          <br />
          Road Badaun, Block Kalan
          <br />
          Anurag Maurya
          <br />
          Shakya
        </p>

        <p className="contact">+918787007689</p>
        <p className="email">info@royalphoeniciahotel.com</p>
        <p className="contacts-link">Contacts →</p>

        <div className="social-icons">
          <i className="fa fa-instagram"></i>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-youtube"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
