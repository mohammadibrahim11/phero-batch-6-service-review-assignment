import React, { useContext, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle';

const LogIn = () => {

    const [error,setError]=useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location =useLocation()
    const from = location.state?.from?.pathname || '/'

    console.log(signIn);
    useTitle('login')


    const handleLogIn =event=>{
   event.preventDefault();
   const form = event.target;
   const email = form.email.value;
   const password =form.password.value;
   console.log(email,password);

   signIn(email,password)
   .then(result=>{
      const user = result.user;
      console.log(user.email);
      const currenUser = {
        email:user.email
    }

    console.log(currenUser);
//    get jwt token 
fetch('http://localhost:5000/jwt',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(currenUser)
})
.then(res =>res.json())
.then(data => {
    console.log(data)
})


    //   navigate(from, {replace:true});
      form.reset();
      setError('');
   })
   .catch(error => {
    setError(error.message)
    console.error(error)});
  
  
  
    }
    return (
        <div>
            <form onSubmit={handleLogIn}>
                <div>
                    <input type="email" name='email' />
                    <input type="password" name='password' />

                </div>
               <div>
               {error}
               </div>
                <div>
                <input type="submit" value="log in" />
                </div>

              
            </form>
        </div>
    );
};

export default LogIn;