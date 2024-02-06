/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import "./Cart.css";

const Cart = ({cart,handleRemoveFromCart}) => {



  return (
    <div>
      <h4>Cart Item: {cart.length}</h4>
      <div className="cart">
       {
       cart.map(bottle=><div >
        <img src={bottle.img}></img>
        <button onClick={()=>handleRemoveFromCart(bottle.id)}>remove</button>
        </div>)
       }
      </div>
    </div>
  )
}

export default Cart
