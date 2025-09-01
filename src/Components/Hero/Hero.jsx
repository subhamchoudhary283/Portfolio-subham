import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profileimg.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img className='subham-img' src={profile_img} alt="" />
      <h1><span>I'm Subham Choudhary,</span> fullstack Developer </h1>
      <p>I'm Subham Choudhary, Fullstack Developer. I create modern, responsive web applications and manage the full process from development to deployment, ensuring smooth performance and scalability.</p>
      <div className='hero-action'>
        <div className="hero-connect">
          <AnchorLink className='al' href='#contact' offset={50}>
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
