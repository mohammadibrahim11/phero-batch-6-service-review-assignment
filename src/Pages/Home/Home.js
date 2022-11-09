import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Services from "../Services/Services";

import "./Home.css";
import ServicesHome from "./servicesHome/ServicesHome";

const Home = () => {
  const servicesHome = useLoaderData();
  console.log(servicesHome);

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

      <div>
        <p className="fs-1 fw-bold text-secondary mt-5 pt-5">See my services</p>
      </div>
      <div className="home-service-card container m-auto mt-5">
        {servicesHome.map((service) => (
          <ServicesHome key={service._id} service={service}></ServicesHome>
        ))}
      </div>

      <div className="mt-4">
        <Link to='/services' ><button className="btn btn-primary">see all services</button></Link>
      </div>
    </div>
  );
};

export default Home;
