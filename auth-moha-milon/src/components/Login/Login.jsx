import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {


  const {signInUser,lgInWithGoogle}=useContext(AuthContext);
  const navigate=useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);

        //signInUser
        signInUser(email,password)
        .then(result=>{
          console.log(result.user)
          //form reset
          e.target.reset();
          navigate('/');
        })
        .catch(error=>console.error(error))
    }

    const handleGoogleLogin=()=>[
        lgInWithGoogle()
        .then(result=>{
          console.log(result.user);
          navigate('/');
        })
        .catch(error=>console.error(error))
    ]


  return (
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
        <p className="ml-4">continue with <button onClick={handleGoogleLogin} className="btn btn-ghost">Google</button></p>
      </div>
    </div>
  </div>
  )
}

export default Login
