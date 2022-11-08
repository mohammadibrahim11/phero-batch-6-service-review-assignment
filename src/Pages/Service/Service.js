import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    console.log(service);
    const {name,img,price,description} = service;
    // const {}
    return (
        <div>
           
            <div className="card" style={{width: '23rem'}}>
  <img src={img}  className="card-img-top p-2 rounded" alt={name}/>
  <div className="card-body text-start">
    <h5 className="card-title text-dark">name:{name}</h5>
    <h5 className="card-title text-secondary">price:{price}</h5>
    <p className="card-text text-secondary">{description.slice(0,100)}...</p>
    <Link to="" className="btn btn-primary">more info </Link>
  </div>
</div>    
            
        </div>
    );
};

export default Service;