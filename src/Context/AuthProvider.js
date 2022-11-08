import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth = getAuth(app);
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState();

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
     return createUserWithEmailAndPassword(auth,email,password);
    };

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    };
 const logOut = () =>{
    return signOut(auth);
 };

 const  signInWithGoogle =()=>{
    return signInWithPopup(auth,googleProvider)
 }


 useEffect( ()=>{
    const unsubscribe = onAuthStateChanged( auth,currentUser =>{
        console.log(currentUser);
        setUser(currentUser);
    })

    return ()=>{
        return unsubscribe;
    }
 },[])

    const authInfo= {
        createUser,
        signIn,
        logOut,
        user,
        signInWithGoogle
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
               {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;