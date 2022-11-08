import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../../Layout/Root';
import Home from '../../Pages/Home/Home';
import Services from '../../Pages/Services/Services';


    const router = createBrowserRouter([
        {
            path:'/',
            element:<Root></Root>,
            children:[
            
                {
                    path:'/home',
                    element:<Home></Home>

                },
                {
                    path:'/services',
                    element:<Services></Services>,
                    loader:()=> fetch('http://localhost:5000/services')

                }
            ]
        }
    ])
 
    export default router;

