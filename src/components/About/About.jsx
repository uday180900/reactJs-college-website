import React from 'react'
import './About.css'
import logo from '../../assets/hero.jpeg'
import play from '../../assets/react.svg'

function About({setPlayState}) {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={logo} alt='' className='anout-img'/>
        <img src={play} alt='' className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrows leaders today</h2>
        <p>Learn How to make a complete website using React JS. Build college / university website in React JS step by step tutorial.</p>
        <p>Learn How to make a complete website using React JS. Build college / university website in React JS step by step tutorial.</p>
        <p>Learn How to make a complete website using React JS. Build college / university website in React JS step by step tutorial.</p>
      </div>
    </div>
  )
}

export default About
