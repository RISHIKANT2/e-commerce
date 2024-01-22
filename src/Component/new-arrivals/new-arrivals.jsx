import React from 'react'
import Items from '../items/items';
import '../new-arrivals/new-arrivals.css'

const NewArrivals = (props) => {
    const {CategoryItem,title}=props;

  return (
    <div className='row box1 my-2'>
    <div className='head'><h1>{title}</h1><hr/></div>
     {CategoryItem.map((element)=>{
        return <div className='col' key={element.img}>
        <Items img={element.img} name={element.name} rating={element.ratings} id={element.id}/>
        </div>
     })}
    </div>
  )
}
export default NewArrivals;
