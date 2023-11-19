import React from "react";
import "./Footer.css";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            rem!
          </div>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Lorem ipsum dolor sit amet.</div>
          </div>
        </div>

        <div className="col">
          <div className="title">Categories</div>
          <span className="text">HeadPhones</span>
          <span className="text">Smart-Watch</span>
          <span className="text">Bluetooth-Earbuds</span>
          <span className="text">Wireless-Earbuds</span>
          <span className="text">Home-Theatre</span>
          <span className="text">Projectors</span>
        </div>

        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy-Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms& Conditions</span>
          <span className="text">Contact-Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            React-Store 2023 CREATED BY JOHN-ABOU-AL-YAMIN. PREMIUM E-COMMERCE
            SOLUTIONS...
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;