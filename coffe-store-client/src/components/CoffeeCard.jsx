/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({coffee,coffees,setCoffees}) => {

    const {_id,photo,name,details,quantity,supplier,taste}=coffee;

    const handleDelete=(id)=>{
      console.log(id);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         
          fetch(`http://localhost:5000/coffee/${id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
             Swal.fire({
            title: "Deleted!",
            text: "Your Coffee has been deleted.",
            icon: "success"
            
          });
          const remaining=coffees.filter(cof=>cof._id !==_id);
          setCoffees(remaining);
            }
          })
        }
      });
    }

  return (
    <div className="card card-side bg-base-100 shadow-xl gap-2">
  <figure className="w-1/4"><img src={coffee.photo} alt="Movie"/></figure>
  <div className="flex justify-between gap-2 w-full">
    {/* first element of card body */}
    
    <div className="mx-auto my-auto">
    <h2 className="card-title">Name: {name}</h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{taste}</p>
    <p>{details}</p>
    </div>
    {/* second element of card body */}
    
     <div className="flex flex-col mt-14 my-2 gap-2">
     <button className="btn btn-active btn-primary">View</button>
     <Link to={`updateCoffee/${_id}`}>
     <button className="btn btn-active btn-secondary">Edit</button>
     </Link>
<button
onClick={()=>handleDelete(_id)}
className="btn btn-active btn-accent">Delete</button>
     </div>
  </div>
</div>
  )
}

export default CoffeeCard
