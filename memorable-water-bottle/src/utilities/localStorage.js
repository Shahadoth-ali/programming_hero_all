/* eslint-disable no-unused-vars */
const getStoredCart=()=>{
    const storedCart=localStorage.getItem('cart')
    //jodi item age hote thake taile json akare pabo ai jayga hote na thakle array
    if(storedCart){
        return JSON.parse(storedCart)
    }
    return [];
}

const saveCartToLS=cart=>{
    const cartStringified=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const addToLS=id=>{
    const cart=getStoredCart();
    cart.push(id);//cart patanor age item add korlam

    //save to local storage
    saveCartToLS(cart);//cart patalam jeta okhane giye just string hbe
}


const removeFromLS=(id)=>{
    const cart=getStoredCart();
    const remaining=cart.filter(idx=>idx !== id);
    saveCartToLS(remaining);
}


export {addToLS,getStoredCart,removeFromLS}
