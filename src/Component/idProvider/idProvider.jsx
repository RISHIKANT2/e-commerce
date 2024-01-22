import React, { createContext, useState } from 'react'
import allProduct from '../allproduct/allProduct';


export const CartContext= createContext(null);
const getdefaultCart= ()=>{
  let cart={};
  for(let index=0;index<allProduct.length+1;index++){
    cart[index]=0;
  }
  return cart;
}

const ContextProvider = (props) => {
  const [cartItem,setcartItem]= useState(getdefaultCart());
  
  const addToCart= (itemId)=>{
  setcartItem((prev)=>{
    return ({...prev,[itemId]:prev[itemId]+1})
  })
  }
  console.log(cartItem);
  const RemoveFrmCart= (itemId)=>{
    setcartItem((prev)=>{
      return ({...prev,[itemId]:prev[itemId]-1})
    })
    }
    const contextValue= {cartItem,addToCart,RemoveFrmCart};


  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  )
}

export default ContextProvider;