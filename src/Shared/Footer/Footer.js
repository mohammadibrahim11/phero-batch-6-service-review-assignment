import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" container d-flex justify-content-between mt-5 pt-5">
     
        <div>
          <p>2022 all rights reserved</p>
        </div>
        <div>
          <h1>proCleaner</h1>
        </div>
        <div className="">
        <span>  <FaFacebook /></span>
        <span>  <FaInstagramSquare /></span>
        <span>  <FaTwitter /></span>
         
        
        </div>
     
    </div>
  );
};

export default Footer;
