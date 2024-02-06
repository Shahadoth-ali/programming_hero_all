/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react"
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles,setBottles]=useState([]);
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])


    //load data from local storage
    useEffect(()=>{
      console.log(bottles.length);//initially 0 hbe karon data fetch na kortei eta call hbe tai dependency te eta dibo
      if(bottles.length){
        const storedCart=getStoredCart();
        console.log(storedCart,bottles);
         
        const savedCart=[];
        for(const id of storedCart){
          console.log(id);
          const bottle=bottles.find(bottle=>bottle.id===id);
          console.log(bottle)
          if(bottle){
            savedCart.push(bottle);
          }
        }
        console.log('savedCart',savedCart);
        setCart(savedCart);
      }
   
    },[bottles])



    const handleAddToCart=(bottle)=>{
      const newCart=[...cart,bottle];
      setCart(newCart);
      //following code is for stored data in local storage
      addToLS(bottle.id);
    }

//removing item from cart
const handleRemoveFromCart=(id)=>{
  //remove from visual cart
  const remainingCart=cart.filter(bottle=> bottle.id !== id);
  setCart(remainingCart);
  //remove from ls
  removeFromLS(id);

}



  return (
    <div>
      <h2>Total bottle no:{bottles.length}</h2>
      {/* <h4>In Cart:{cart.length}</h4> */}
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
   <div className="bottle-container">
   {
        bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle}
        handleAddToCart={handleAddToCart}
        ></Bottle>)
      }
   </div>
    </div>
  )
}

export default Bottles
