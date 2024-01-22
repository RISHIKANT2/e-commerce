import React, { createContext } from 'react'
import '../items/items.css'
import { Link } from 'react-router-dom';

const Items = (props) => {
//  const IdProvider= createContext(null);
//  const contextValue= id;
  const {img,name,rating,id}=props;
  return (
    
    <div className='box '>
<div className="card" style={{width: "220px", height:"400px"}}>
  <Link to={`/product/${id}`}><img  onClick={window.scrollTo(0,0)} src={img} className="card-img-top" style={{height:"250px"}} alt="..."/></Link>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Rating:{rating}
    <img src="https://cdn-icons-png.flaticon.com/512/541/541415.png"/>
    </p>
    <a href="#" className="btn btn-primary">Visit</a>
  </div>
</div>
    </div>
  )
}
export default Items;
