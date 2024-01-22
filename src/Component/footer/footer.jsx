import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
       <footer>
        <div className='left-footer'>
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>About</li>
            </ul>
        </div>
        <div className="right-footer">
            <p>Subscribe our Website to Get Latest Collections</p>
            <input type="email" placeholder='enter your e-mail' />
            <button className='btn-info'>Subscribe</button>
        </div>
        <div className='img'>
            <img src="./images/twitterIcon.png" style={{width:"25px"}} alt="..." />
            <img src="./images/instagramIcon.png" style={{width:"25px"}} alt="..." />
            <img src="./images/facebookIcon.png" style={{width:"25px"}} alt="..." />
        </div>
       </footer>


    </div>
  )
}

export default Footer;
