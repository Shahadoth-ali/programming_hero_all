import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Register = () => {

    const [registerError,setRegisterError]=useState('');
    const [success,setSuccess]=useState('');
    const [show,setShow]=useState(false);


    const handleSubmit=e=>{
        e.preventDefault();
        console.log('form submitted.');
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const accepted=e.target.terms.checked;
      console.log(name,email,password);

          //setting error null
          setRegisterError('');
          setSuccess('');


        //checking password validation
        if(password.length < 6){
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError("password should contain atleast one number and one special character");
            return;
        }
        else if(!accepted){
          setRegisterError('Please accept our terms and conditions');
          return;
        }
      
        //creating user for firebase
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            console.log(result.user);
            setSuccess('User created successfully.');

            //update profile
            updateProfile(result.user,{
              displayName:name,
              photoURL:null
            })
            .then(()=>console.log('profile updated'))
            .catch()

            //send verification email
            sendEmailVerification(result.user)
            .then(()=>{
              alert('please verify email')
            })
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
    {/* form is starting here */}
      <form onSubmit={handleSubmit}>
        <input className="mb-4 w-full py-2 px-4 bg-slate-300" type="text" name="name" id="" placeholder="Your name" required/>
        <br />
        {/* name input field */}
        <input className="mb-4 w-full py-2 px-4 bg-slate-300" type="email" name="email" id="" placeholder="Email Address" required/>
        <br />
        {/* second input field */}
      <div className="relative">
      <input
         className=" w-full py-2 px-4 bg-slate-300"
          type={show?"text" : "password"} 
          name="password" 
          id="" placeholder="Password" required/>
        <span className="absolute mt-3 right-2" onClick={()=>setShow(!show)}>
            {
                show?<IoEyeOutline />:<FaRegEyeSlash />
            }
        </span>
      </div>
        <br />
          {/* third input field */}
          <div className="ml-2">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">Accept our <a href="">Terms and conditions</a></label>
          </div>
          <br />
          {/* fourth input field */}
        <input className="btn btn-secondary mb-4 w-full" type="submit" value="Register" />
      </form>
      {
        registerError && <p className="text-red-500">{registerError}</p>
      }
      {
        success && <p className="text-green-600">{success}</p>
      }
      <p>already have an account?<Link className="text-red-500" to="/login">Login</Link></p>
    </div>

    </div>
  )
}

export default Register

