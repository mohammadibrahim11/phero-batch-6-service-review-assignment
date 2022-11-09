// import React, { useEffect, useState } from 'react';
import './AllReviews.css'

const AllReview = ({review}) => {
    console.log(review);

    const {name,photoURL,text}=review;

    // const [addreview,SetAddReviews]= useState({})

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/reviews/${service}`)
    //     .then(res => res.json())
    //     .then(data => SetAddReviews(data))
    // },[service])
   
    return (
        
        <div className='d-flex '>

            <div>
                <img src={photoURL} alt="" srcset="" className='rounded-circle' />
            </div>
            <div className='text-start ps-2 fs-6'>
               <span> {name}</span>
               <br />
               <span> {text}</span>

            </div>
          
        </div>
    );
};

export default AllReview;