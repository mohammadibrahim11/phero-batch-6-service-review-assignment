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
      console.log(user);
      navigate(from, {replace:true});
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