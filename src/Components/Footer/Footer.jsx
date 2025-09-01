import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footertop-left">
            <div className='subh'>SUBHAM CHOUDHARY</div>
            <p>I create modern, responsive web applications and manage the full process from development to deployment, ensuring smooth performance and scalability</p>
        </div>
        <div className="footertop-right">
            <div className="footeremail-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div> 
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>@ 2025 subham choudhary. All rights resurved</p>
        <div className='footer-bottom-right'>
            <p>Terms of services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
