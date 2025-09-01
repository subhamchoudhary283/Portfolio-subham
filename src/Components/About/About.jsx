import React from 'react'
import './About.css'
import subh from '../../assets/subh.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-section">
            <div className="about-left">
                <img className='subh1' src={subh} alt="" />
            </div>
            <div className='about-right'>
                <div className="about-para">
                    <p>I am an experienced Fullstack Developer with over 2 year of expertise in building modern, responsive, and scalable web applications. I specialize in front-end development with technologies like HTML, CSS, JavaScript, and React, as well as back-end development using Node.js and databases</p>
                    <p>Beyond coding, I also handle deployment and optimization to deliver seamless user experiences. Passionate about continuous learning, I thrive on creating digital solutions that solve real-world problems.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"40%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"10%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"30%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default About
