import './choosing.css';
import React from 'react'
import {OnlyImage,TopImage,BotLeft,BotRight, BenImage, par1, par2, par3} from '../ExportImages'
const Choosing = () => {
  return (
    <div className='choosing'>
      <div className="choosing-left">
        <img src={OnlyImage} alt="" />
        <img src={TopImage} alt="" />
        <img src={BotLeft} alt="" />
        <img src={BotRight} alt="" />
      </div>
      <div className="choosing-right">
        <span>some reasons</span>
        <div className='why'>
          <span className='stroke-text'>WHY</span>
          <span>CHOOSE US</span>
        </div>
        <div className='benefites'>
          <div className='benefite'>
            <img src={BenImage} alt="" />
            <span>over 140+ expert coachs</span>
          </div>
          <div className='benefite'>
            <img src={BenImage} alt="" />
            <span>train smarter and faster than before</span>
          </div>
          <div className='benefite'>
            <img src={BenImage} alt="" />
            <span>over 140+ expert coachs</span>
          </div>
          <div className='benefite'>
            <img src={BenImage} alt="" />
            <span>train smarter and faster than before</span>
          </div>
        </div>
        <div className="partners">
          <h4>OUR PARTNERS</h4>
          <div className="images">
            <img src={par1} alt="" />
            <img src={par2} alt="" />
            <img src={par3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choosing