import React from 'react'
import  Poster  from '../poster/poster'
import { Link } from 'react-router-dom';

 const Banner = (props) => {
  const {choice}= props;
  return (
    <Link to={choice}><div>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Poster image={"https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA="} category={"Womens"}/>
    </div>
    <div className="carousel-item">
    <Poster image={"https://www.shutterstock.com/image-photo/photo-young-handsome-smiling-positive-260nw-1939038862.jpg"} category={"Mens"}/>
    </div>
    <div className="carousel-item">
    <Poster image={"https://t3.ftcdn.net/jpg/00/98/09/16/360_F_98091618_yCN1zUmBzQRADLXFKt6eujlgXHaRVnWK.jpg"} category={"Kids"}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div></Link>
  )
}

export default Banner;
