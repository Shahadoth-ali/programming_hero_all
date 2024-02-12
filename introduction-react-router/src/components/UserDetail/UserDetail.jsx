/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom"


const UserDetail = () => {


    const user=useLoaderData();
    console.log(user);
    const {username,website,phone}=user;

  return (
    <div>
      <h2>Details about user</h2>
      <p>username:{username}</p>
      <p>phone:{phone}</p>
      <p>website:{website}</p>
    </div>
  )
}

export default UserDetail
