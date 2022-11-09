import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllReview from "../allReview/AllReview";
import './ServiceDetails.css'

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  console.log(serviceDetails);

  const [reviews , setReviews]=useState([]);
  useEffect( ()=>{
    fetch('http://localhost:5000/reviews')
    .then(res => res.json())
    .then(data => {
      setReviews(data)
      console.log(data)})
  },[])

//   fs-4 fw-bold pt-2 pb-2 text-start text-danger d-flex justify-content-between"
        //   style={{ width: "90%", height: "60%", margin: "auto"

  const { img, price, name, ratings, description } = serviceDetails;
  return (
    <div className="row">
        {/* details section */}
      <div className="bg-body bg-secondary col-7 border rounded p-3 ">
        <div>
          <img
            className="mt-3"
            src={img}
            style={{ width: "90%", height: "50%" }}
            alt=""
            srcset=""
          />
        </div>
        <div className="fs-4 fw-bold  pt-3 text-start text-danger"
           style={{ width: "90%", margin: "auto"}}>
            {name}
        </div>

        <div className="d-flex pt-3 justify-content-between fs-5 fw-bold text-danger" style={{ width: "90%", margin: "auto"}}>
            {price}
            <p className="pe-2"> ratings: {(ratings).toFixed(1)}</p>
        </div>
        <div className="text-start text-secondary " style={{ width: "90%", margin: "auto"}}>
     <p className="text-primary fw-bold">
         about my work: </p><p>
        {description}
        </p>
        </div>
      </div>
      
      {/* review section */}
      <div className="col-5 border rounded p-2 ">

     <div className="review">
     {
          reviews.map((review) => <AllReview key={review._id} review={review}></AllReview>)
        }
     </div>
        <Link to='/reviews'> <button className="btn btn-primary mt-5">add review</button></Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
