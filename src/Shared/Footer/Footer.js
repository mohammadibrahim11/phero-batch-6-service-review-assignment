import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="f-about">
        <div className="footer-logo">
          <Link to="/home">
            <img
              src="https://cdn.ayroui.com/1.0/images/footer/logo.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <p className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <div
        className="
                  copyright
                  text-center
                  d-md-flex
                  justify-content-between
                  align-items-center
                  "
      >
        <p className="text">Copyright © 2024 AyroUI. All Rights Reserved</p>
        <div className="icons">
          <Link to="/">
            <FaFacebook />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
