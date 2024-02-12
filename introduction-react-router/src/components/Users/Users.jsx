/* eslint-disable no-unused-vars */
import "./Users.css";

import { useLoaderData } from "react-router-dom"
import User from "../User/User";


const Users = () => {

    const users=useLoaderData();
    console.log(users);

  return (
    <div>
      <p>all users should be seen here.</p>
     
      <div className="users">
        {
            users.map(user=><User key={user.id}
            user={user}
            ></User>)
        }
      </div>
    </div>
  )
}

export default Users
