import React from 'react'
import './Programs.css'
import hero from '../../assets/hero.jpeg'
import logo from '../../assets/react.svg'

function Programs() {
  return (
    <div className='programs'>
      <div className="program">
        <img src={hero} alt=''/>
        <div className="caption">
            <img src={logo} alt=''/>
            <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={hero} alt=''/>
        <div className="caption">
            <img src={logo} alt=''/>
            <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={hero} alt=''/>
        <div className="caption">
            <img src={logo} alt=''/>
            <p>Post Degree</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
