/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const CoffeeCard = ({coffee}) => {

    const {photo,name,details,quantity,supplier,taste}=coffee;

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
<button className="btn btn-active btn-secondary">Edit</button>
<button className="btn btn-active btn-accent">Delete</button>
     </div>
    
  </div>
</div>
  )
}

export default CoffeeCard
