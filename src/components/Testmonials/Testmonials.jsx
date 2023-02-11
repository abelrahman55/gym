import './testmonials.css';
import {motion} from 'framer-motion';
import React from 'react'
import {testimonialsData} from '../data/Testmonialsdata'
import { useState } from 'react';
import { Leftarrow, Rightarrow } from '../ExportImages';
const Testmonials = () => {
  const transition={type:'spring',duration:3};
  const [selected,setselected]=useState(0);
  let tlength=testimonialsData.length;
  return (
    <div className='testmonials'>
      <div className="left-testmonials">
        <h3 className='test-title'>
          Testmonials
        </h3>
          <span className='stroke-text'>What they</span>
          <span>say about us</span>
        <motion.p
        key={selected}
        animate={{opacity:0,x:-100}}
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
        transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.p>
        <h6>
          <span>{testimonialsData[selected].name} </span>
          <span>- {testimonialsData[selected].status}</span>
        </h6>
      </div>
      <div className="right-testmonials">
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={transition}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.div
        initial={{opacity:0,x:100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.img
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        transition={transition}
        exit={{opacity:0,x:100}}
        src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img src={Leftarrow} alt="" 
          onClick={()=>{
            selected ===0?setselected(tlength-1):
            setselected((prev)=>prev-1);
          }}
          />
          <img src={Rightarrow} alt="" 
          onClick={()=>{
            selected===tlength-1?setselected(0):
            setselected((prev)=>prev+1)
          }}
          />
        </div>
      </div>
    </div>
  )
}

export default Testmonials