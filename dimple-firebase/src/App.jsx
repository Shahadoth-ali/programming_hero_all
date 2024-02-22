import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebase/firebase.config";
import { useState } from "react";




const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider();

function App() {

  const [user,setUser]=useState(null);
  
  const handleSignIn=()=>{
    signInWithPopup(auth,googleProvider)
    .then(result=>{
      const user=result.user;
      console.log(user);
      setUser(user);
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  return (
    <>
     <button onClick={handleSignIn}>
      Google logIn
     </button>
    {
      user &&  <p>
      {user.displayName}
     </p>
    }
    </>
  )
}

export default App
