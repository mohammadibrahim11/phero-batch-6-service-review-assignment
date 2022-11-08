import React from "react";
import Services from "../Services/Services";

import './Home.css'


const Home = () => {
  return (
    <div>
      <div className="position w-50 m-auto">
        <p className="fw-bold">Proffessional Cleaning Service</p>
        <h1 className="fw-bold fs-1">So Fresh and So Clean</h1>
      </div>
      <div>
        <img
          src="https://i.ibb.co/RQdDkz6/slide-3.jpg"
          className="w-100"
          alt=""
          border=""
        />
      </div>

      <Services></Services>
    </div>
  );
};

export default Home;
