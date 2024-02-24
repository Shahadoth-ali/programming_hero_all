/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react"
import auth from "../firebase/firebase.config";



export const AuthContext=createContext(null);
//baire create hoy.vitore giye provider sathe niye value accept kore
//component k niye parent e giye baccha ney
//oi baccha k props hisabe ney and pete rakhe

const AuthProvider = ({children}) => {
  
   const [user,setUser]=useState(null);

const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

   const authInfo={user,createUser}


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