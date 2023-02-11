import './plans.css';
import React from 'react'
import {plansdata} from '../data/PlanesData';
import {Rightarrow,whitetick} from '../ExportImages'
const Plans = () => {
  return (
    <div className='plans'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className='header'>
        <span className='stroke-text'>Ready to Start</span>
        <span>Your Journey</span>
        <span className='stroke-text'>now withus</span>
      </div>
      <div className="plans-cards">
        {
          plansdata.map((plan,i)=>{
            return(
              <div className="plan" key={{i}}>
                {plan.icon}
                <h4>{plan.name}</h4>
                <div className='price'>
                  <span>$</span>
                  <span>{plan.price}</span>
                </div>
                <div className="plan-bene">
                  {
                    plan.features.map((feature,i)=>{
                      return(
                        <div className='feature'>
                          <img src={whitetick} alt="" />
                          <span key={i}>{feature}</span>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="see">
                  <span>see more benefits</span>
                  <img src={Rightarrow} alt="" />
                </div>
                <button>Join now</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Plans