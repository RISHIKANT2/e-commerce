import React from 'react'
import './relatedProduct.css'
import allProduct from '../allproduct/allProduct'
import Items from '../items/items'

const RelatedProduct = (props) => {
    const {product}= props;
  return (
    <div>
       <div className="title">
        <h2>Related Product</h2>
       </div>
       <div className="items row">
        {allProduct.map((items)=>{
            
            return <div className='col'>
                <Items  img={items.img} name={items.name} rating={items.ratings} id={items.id}/>
                </div>
        })}
       </div>
    </div>
  )
}

export default RelatedProduct;
