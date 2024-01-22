import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';



export const  Navbar = () => {
    const [tag,setTag]=useState("shop");
  return (
    <div className='navbar'>
      <div className='heading'>
      <img src="./images/e-commerce.png" alt="" />
      <span>Yo-Commerce</span>
      </div>
        <ul>
            <li onClick={()=>{setTag("shop")}}><Link to="/" style={{color:"whitesmoke", textDecoration:"none"}}>Shop</Link>{tag==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setTag("men")}}><Link to="/men" style={{color:"whitesmoke" ,textDecoration:"none"}}>Men</Link>{tag==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setTag("women")}}><Link to="/women" style={{color:"whitesmoke" ,textDecoration:"none"}}>Women</Link>{tag==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setTag("kid")}}><Link to="/kid" style={{color:"whitesmoke", textDecoration:"none"}}>Kid</Link>{tag==="kid"?<hr/>:<></>}</li>
        </ul>
      <div className='login'>
        <span ><Link to="/login" style={{color:"whitesmoke" ,textDecoration:"none"}} >Login</Link></span>
        <img src="./images/account.png" alt="" />
        <span ><Link to="/signup" style={{color:"whitesmoke" ,textDecoration:"none"}} >Sign-Up</Link></span>
        <img src="./images/cart-icon.png" alt="" />
      </div>
    </div>
  )
}

export default Navbar;