/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";



export const AuthContext=createContext(null);
//baire create hoy.vitore giye provider sathe niye value accept kore
//component k niye parent e giye baccha ney
//oi baccha k props hisabe ney and pete rakhe

const provider = new GoogleAuthProvider();


//component start
const AuthProvider = ({children}) => {
  
   const [user,setUser]=useState(null);
   const [loading,setLoading]=useState(true);

const createUser=(email,password)=>{
  setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}

   const signInUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut=()=>{
    setLoading(true);
    return signOut(auth);
   }

   const lgInWithGoogle=()=>{
    setLoading(true);
    return signInWithPopup(auth,provider)
   }

   //observe auth state change
   useEffect(()=>{
 const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
     //observe korte giye user k pelam,er age firebase e user 
     //pataichi but setUser kokhono use korini,just form diye
     //user ta firebase e dhukaichi,r ekhane observe korte giye 
     //sei user ta setUser er maddhome user e set korlam
      setUser(currentUser);
      setLoading(false);
      console.log('current user',currentUser);
    });
    return()=>{
      unSubscribe();
    }
   },[])

   const authInfo={
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    lgInWithGoogle
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
/**
 * 1.create context and export it
 * 2.set provider with value
 * 3.use the Auth Provider in the main.jsx file
 * 4.access children in the AuthProvider component
 * as children and use it in the middle of provider
 * 
 */