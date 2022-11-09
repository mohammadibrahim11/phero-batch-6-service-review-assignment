// import { signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
// import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignIn = () => {

    const [error,setError] = useState();

    const {createUser, updateUserProfile, signInWithGoogle}= useContext(AuthContext);

    const handleSignIn=event=>{

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL =form.photoURL.value;
    console.log(name, email, password,photoURL);

 createUser(email,password)
 .then(result=>{
    const user = result.user;
    // Navigate('/login')
    console.log(user);
    handleUserProfile(name,photoURL)
    // form.reset();
 })
 .catch(error => {
    console.error(error)
    setError(error.message)              
});
};

const handleUserProfile = (name,photoURL)=>{
    const profile = {
        displayName:name,
        photoURL:photoURL,
        }
        updateUserProfile(profile)
        .then(()=>{

        })
        .catch((error)=>console.error(error))


}

const handleGoogleSignIn=()=>{
    signInWithGoogle()
    .then(result =>{
        const user = result.user;
        console.log(user);
        Navigate('/services')
        
    })
    .catch(error => {
        console.error(error)
        setError(error.message)
    });
   
    
}
    return (
        <div>
            <form onSubmit={handleSignIn}>
            <div>
                    <input type="text" name='name' placeholder='your name' />
                    <input type='photoURL' name='photoURL'placeholder='url'></input>

                    <input type="email" name='email' placeholder='your email'/>

                    <input type="password" name='password' placeholder='your password' />

                </div>

                <div>
                   <input type="submit" value='sign up' />
                </div>
                <div>
                    <button onClick={handleGoogleSignIn} >sign in with google</button>
                </div>
                <div>
                    <button >sign in with github</button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;