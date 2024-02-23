import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";


const Register = () => {

    const [registerError,setRegisterError]=useState('');
    const [success,setSuccess]=useState('');
    const [show,setShow]=useState(false);


    const handleSubmit=e=>{
        e.preventDefault();
        console.log('form submitted.');
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email);
        console.log(password);

          //setting error null
          setRegisterError('');
          setSuccess('');


        //checking password validation
        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if(!/^[a-zA-Z0-9!@#$%^&*]/.test(password)){
            setRegisterError("password should contain atleast one number and one special character");
            return;
        }
      
        //creating user for firebase
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess('User created successfully.');
        })
        .catch(error=>{
            console.error(error.message);
            setRegisterError(error.message);
        })
    }




  return (
    <div>
    <div className="mx-auto md:w-1/2">
    <h2 className="text-3xl my-4">Please Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="mb-4 w-3/4 py-2 px-4 bg-slate-300" type="email" name="email" id="" placeholder="Email Address" required/>
        <br />
        <input
         className="mb-4 w-3/4 py-2 px-4 bg-slate-300"
          type={show?"text" : "password"} 
          name="password" 
          id="" placeholder="Password" required/>
        <span onClick={()=>setShow(!show)}>
            {
                show?<IoEyeOutline />:<FaRegEyeSlash />
            }
        </span>
        <br />
        <input className="btn btn-secondary mb-4 w-3/4" type="submit" value="Register" />
      </form>
      {
        registerError && <p className="text-red-500">{registerError}</p>
      }
      {
        success && <p className="text-green-600">{success}</p>
      }
    </div>

    </div>
  )
}

export default Register

