/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const User = ({user}) => {
  
    const {id,name,email,phone}=user;

    const userStyle={
        border:'2px solid yellow',
        padding:'10px',
        borderRadius:'20px',
        margin:'5px'
    }
    
  return (
    <div style={userStyle}>
      <h2>Name:{name}</h2>
      <p>email:{email}</p>
      <p>phone: {phone}</p>
      <Link to={`/user/${id}`}>Show details</Link>
    </div>
  )
}

export default User
