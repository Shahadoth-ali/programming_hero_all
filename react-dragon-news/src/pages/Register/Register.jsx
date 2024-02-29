import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const {createUser}=useContext(AuthContext)

    const handleRegister=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const email=form.get('email');
        const password=form.get('password');
        console.log(name,email,password);


        //createUser
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error);
        })
    }


  return (
    <div>
        <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Register now!</h1>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        {/* form is starting here */}
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
          </div>
        {/* email field */}
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
      </div>
        {/* terms input field */}
      <div className="ml-2">
          <input type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">Accept our <a href="">Terms and conditions</a></label>
          </div>
      {/* btn input */}
      <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
      </div>
    </form>
    <p className="ml-4 mb-3">Already have an account? <Link className="text-red-500" to="/login">Login</Link></p>
  </div>
</div>
</div>
    </div>
  )
}

export default Register
