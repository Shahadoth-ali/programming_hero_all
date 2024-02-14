import { useState } from "react"


const StatefulForm = () => {

    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [name,setName]=useState(null);
    const [error,setError]=useState('');

    const handlePassword=(e)=>{
        // console.log(e.target.value);
        setPassword(e.target.value);
      
    }

 const handleSubmit=(e)=>{
   e.preventDefault();
   if(password.length<6){
    setError('Password should be at least 6 characters')
   }else{
    setError('');
    console.log(email,password,name);
   }
  
 }

 const handleEmailChange=(e)=>{
//    console.log(e.target.value);
   setEmail(e.target.value);
 }

 const handleNameChange=(e)=>{
//    console.log(e.target.value);
   setName(e.target.value);
 }

  return (
    <div>
       <form onSubmit={handleSubmit}>
      
        <label htmlFor="name">Name:</label>
        <input
        onChange={handleNameChange}
         type="text" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input 
        onChange={handleEmailChange}
        type="email" name="email" />
        <br />
      <label htmlFor="phone">Password</label>
      <input 
      onChange={handlePassword}
      type="password" name="password" />
      <br />
      <input type="submit" value="Submit" />
      {
        error && <p>
            {error}
        </p>
      }
      </form>
    </div>
  )
}

export default StatefulForm
