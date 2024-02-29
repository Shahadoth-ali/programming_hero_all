import { Link, useLocation, useNavigate } from "react-router-dom"
import Navbar from "../Shared/Navbar/Navbar"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"


const Login = () => {

  const {signIn}=useContext(AuthContext);


  const location=useLocation();
  const navigate=useNavigate();
  console.log('location from login',location);

    const handleLogin=(e)=>{
       e.preventDefault();
       console.log(e.currentTarget);
       const form=new FormData(e.currentTarget);
       const email=form.get('email');
       const password=form.get('password');
       console.log(email,password);

       //login user
         signIn(email,password)
         .then(result=>{
          console.log(result.user)
          //navigate after login
          navigate(location?.state ? location.state : '/');
         })
         .catch(error=>{
          console.log(error);
         })

    }



  return (
    <div>
        <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        {/* form is starting here */}
      <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          {/* password input field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          {/* btn input */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="ml-4">New here?Please <Link className="text-red-500" to="/register">Register</Link></p>
        <p className="ml-4">continue with <button className="btn btn-ghost">Google</button></p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Login
