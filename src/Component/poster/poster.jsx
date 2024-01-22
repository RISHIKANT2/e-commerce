import React from 'react'
import './poster.css'
 const Poster = (props) => {
  return (
    <div className='poster'>
      <div className='poster-left'>
        <div>
            <h1>Sale 50% Off on {props.category} Clothes</h1>
            <p>Avail the Offer as soon as possible</p>
            <p>Click the Button below to explore more</p>
            <button>Explore</button>
        </div>
      </div>
      <div className='poster-right'>
        <img src={props.image} alt="" />
      </div>
    </div>
  )
}

export default Poster;
