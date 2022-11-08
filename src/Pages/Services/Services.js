import React, { useEffect, useState } from 'react';
// import { useRouteLoaderData } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'

const Services= () => {
  // const  {servicesData} = useRouteLoaderData();
  // console.log(servicesData);
  const [services,setServices]=useState([]);

  useEffect( ()=>{
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setServices(data)});
  },[])

    return (
        <div className='mt-5 mb-5 pt-5 '>
    
        <p className='fs-1 text-center fw-bolder' style={{color: '#4B5B68'}} >Professional Cleaning <br /> Services</p>

         
       <div className='service-card container m-auto mt-5'>
       {
            services.map((service)=> <Service key={service._id} service={service}></Service>)
          }
       </div>
        </div>
    );
};

export default Services
;

