/* eslint-disable no-undef */
import { getAuth,GithubAuthProvider, signInWithPopup,signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
// const cors=require("cors");

// app.use(cors({
//     origin:"http://localhost:5173/login"
// }));

const Login = () => {


    const [user,setUser]=useState(null);

    const auth=getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitProvider=new GithubAuthProvider();

    const handleGoogleSignIn=()=>{
       signInWithPopup(auth,provider)
       .then(result=>{
        const loggedInuser=result.user;
        console.log(loggedInuser);
        setUser(loggedInuser);
       })
       .catch(error=>{
        console.log('error',error.message);
       })
    }

        const handleGithubSignIn=()=>{
          signInWithPopup(auth,gitProvider)
          .then(result=>{
            const loggeduser=result.user;
            console.log(loggeduser);
          })
          .catch(error=>{
            console.log(error.message);
          })
        }

       const handleSignOut=()=>{
        signOut(auth)
        .then((result) => {
           console.log(result);
           setUser(null);
          }).catch((error) => {
            console.log(error)
          })
       }
  return (
    <div>
      {
          user? <button onClick={handleSignOut}>Sign out</button> :    
         <>
           <button onClick={handleGoogleSignIn}>Google Login</button>
           <button onClick={handleGithubSignIn}>Github Login</button>
         </>
        }
      {
        user && <div>
        <h3>User:{user.displayName}</h3>
        <p>Email:{user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>
      }
    </div>
  )
}

export default Login
