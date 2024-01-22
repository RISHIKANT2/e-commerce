import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
// import MenItemsData from '../items/MenItemsData';
import allProduct from '../allproduct/allProduct';
import './product.css'
import RelatedProduct from '../RelatedProduct/relatedProduct';
import { CartContext } from '../idProvider/idProvider';
// import ContextProvider from '../idProvider/idProvider';

const Product = (props) => {
    // const {proCategory}=props;
   const {productId}= useParams();
   const product= allProduct.find((e)=> e.id=== Number(productId));
  //  const {addToCart}= useContext(CartContext);
   console.log(product);
  return (<>
    <div className='mainProduct'>
        <div className='mainContainer'>
       <div className='ExtremeItemLeft'>
        <div className='proImg'>
            <img src={product.img} alt="Hi" />
        </div>
        <div className='proImg my-1'>
            <img src={product.img} alt="..." />
        </div>
        <div className='proImg my-1'>
            <img src={product.img}  alt="..." />
        </div>
       </div>
       <div className="midMainItem">
        <div className='midproImg'>
            <img src={product.img} alt="..." />
        </div>
       </div>
       <div className="ItemDescript">
        <h2><u>{product.name}</u></h2>
        <div className='title'> 
            <span>Special Price</span>
        </div>
        <div className='price'>
        <span>&#8377;{product.new_Price}</span>
        <span style={{textDecoration:"line-through"}}>{product.old_Price}</span>
        </div>
        <div className='discount'>
          <span>{product.discount} Off</span>
       </div>
       <div className='ratings'>
        <div className="specialrating">
        <span>{product.ratings}</span>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" style={{width:"20px"}} alt="" />
        </div>
          <span>{product.rateno} reviews</span>
       </div>
       <div className="brief">
        <p>{product.brief}</p>
       </div>
       <div className="button">
        <button className='btn-1' >Add Now</button>
        <button className='btn-2'>CheckOut</button>
       </div>
       </div>
       </div>
    </div>
    <RelatedProduct  />
    </>
  )
}

export default Product;
