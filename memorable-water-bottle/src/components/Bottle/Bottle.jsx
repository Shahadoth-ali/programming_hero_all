/* eslint-disable react/prop-types */
import "./Bottle.css";

const Bottle = ({bottle,handleAddToCart}) => {

    const {img,name,price}=bottle;

  return (
    <div className="mybottle">
      <h3>Name:{name}</h3>
      <img src={img} alt="" />
      <p>Price:{price}</p>
      <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
    </div>
  )
}

export default Bottle
