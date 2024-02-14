import { useEffect } from "react";
import { useRef } from "react";


const RefForm = () => {

    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(nameRef.current.value);
       console.log(emailRef.current.value);
       console.log(passwordRef.current.value);
    }

    useEffect(()=>{
        nameRef.current.focus();
    },[])

  return (
    <div>
        <form onSubmit={handleSubmit}>
      
        <label htmlFor="name">Name:</label>
        <input
        ref={nameRef}
        type="text" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input
        ref={emailRef}
        type="email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input
        ref={passwordRef}
        type="password" name="password" />
        <br />
      <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default RefForm
