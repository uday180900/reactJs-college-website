import React from 'react'
import './Campus.css'
import gallery from '../../assets/hero.jpeg';
import arrow_right from '../../assets/arrow-right.png'

function Campus() {
  return (
    <div className='campus'>
      <div className="gallery">
        <img  src={gallery} alt=''/>
        <img  src={gallery} alt=''/>
        <img  src={gallery} alt=''/>
        <img  src={gallery} alt=''/>
      </div>
      <buttom className='btn dark-btn'>see more<img src={arrow_right} alt=''/></buttom>
    </div>
  )
}

export default Campus
