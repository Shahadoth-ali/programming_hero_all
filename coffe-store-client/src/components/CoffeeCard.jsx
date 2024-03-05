/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const CoffeeCard = ({coffee}) => {

    const {photo,name,details,quantity,supplier,taste}=coffee;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure className="w-1/4"><img src={coffee.photo} alt="Movie"/></figure>
  <div className="flex">
    {/* first element of card body */}
    <div>
    <h2 className="card-title">Name: {name}</h2>
    <p>{quantity}</p>
    <p>{supplier}</p>
    <p>{taste}</p>
    <p>{details}</p>
    </div>
    {/* second element of card body */}
    <div className="card-actions justify-end">
     <div>
     <button className="btn btn-active btn-primary">Primary</button>
<button className="btn btn-active btn-secondary">Secondary</button>
<button className="btn btn-active btn-accent">Accent</button>
     </div>
    </div>
  </div>
</div>
  )
}

export default CoffeeCard
