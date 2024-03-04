import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom"


const Users = () => {

    const users=useLoaderData();
    const [newUsers,setNewUsers]=useState(users);

    const handleDeleteUser=(_id)=>{
     console.log('delete',_id)
     fetch(`http://localhost:5000/users/${_id}`,{
        method:'DELETE'
     })
     .then(res=>res.json())
     .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
          alert('deleted successfully');
          const remaining=newUsers.filter(user=>user._id !== _id);
          setNewUsers(remaining);
        }
     })
    }

  return (
    <div>
      <h2>total user is:{users.length}</h2>
      <div>
        {
            newUsers.map(user=> <p key={user._id}>
                {user.name}
                {user._id}
                <Link to={`/update/${user._id}`}>
                <button>Update</button>
                </Link>
                <button onClick={()=>handleDeleteUser(user._id)}>X</button>
                </p>)
        }
      </div>
    </div>
  )
}

export default Users
