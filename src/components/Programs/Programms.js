import './Programms.css'
import React from 'react'
import {programsData} from '../data/ProgrammsData.js'
import {Rightarrow} from '../ExportImages';
const Programms = () => {
  return (
    <div className='programms' id='programms'>
      <div className="programms-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>To shape you</span>
      </div>
      <div className="programms-categories">
        {
          programsData.map((program)=>{
            return(
              <div className='category'>
                {program.image}
                <span>{program.heading}</span>
                <p>{program.details}</p>
                <div className="join-now">
                  <span>Join now</span>
                  <img src={Rightarrow} alt="" />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Programms