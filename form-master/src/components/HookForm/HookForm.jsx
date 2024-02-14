
import useInputState from "../../Hooks/useInputState";


const HookForm = () => {

   const [name,handleNameChange]=useInputState('shahadoth');
   const [email,handleEmailChange]=useInputState('');
   const [password,handlePasswordChange]=useInputState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('form data',name);
        console.log('email is',email);
        console.log('password is:',password);
    }

  return (
    <div>
         <form onSubmit={handleSubmit}>
      
        <label htmlFor="name">Name:</label>
        <input
       value={name}
       onChange={handleNameChange}
        type="text" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input
        value={email}
        onChange={handleEmailChange}
        type="email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input
        value={password}
        onChange={handlePasswordChange}
        type="password" name="password" />
        <br />
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default HookForm
