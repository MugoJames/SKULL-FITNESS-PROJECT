import React from 'react'
import './Program.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
function Program() {
  return (
    <div className="Programs" id="Programs">
      <div className="Programs-header">
        <span className='stroke-text'>Delve into</span>
        <span>our workout's </span>
        <span className='stroke-text'> to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) =>(
          <div className="categoy">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span> <img src={RightArrow} alt="" /></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Program