import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle';

const LogIn = () => {
    const {signIn} = useContext(AuthContext);
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
      // Navigate('/login')
      console.log(user);
      // form.reset();
   })
   .catch(error => console.error(error));
  
  
  
    }
    return (
        <div>
            <form onSubmit={handleLogIn}>
                <div>
                    <input type="email" name='email' />
                    <input type="password" name='password' />

                </div>

                <div>
                <input type="submit" value="log in" />
                </div>
            </form>
        </div>
    );
};

export default LogIn;