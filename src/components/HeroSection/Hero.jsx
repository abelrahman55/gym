import './hero.css';
import React from 'react'
import Header from '../Header/Header';
import {heroImage,heroImageBG,Calories,heart} from '../ExportImages'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'
const Hero = () => {

  const transition={type:'spring',duration:3};
  const mobile=window.innerWidth<=768 ?true :false;
  return (
    <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>
        <div className="the-best-ad">
          <motion.div className='animation'
          initial={{left:'238px'}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          >
          </motion.div>
{/*           <div className='animation'></div>
 */}          <span>the best fitness clib in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal </span>
            <span>Body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>
              <NumberCounter
              end={140}
              start={100}
              delay='2'
              preFix='+'
              />
            </span>
            <span>Expert conaches</span>
          </div>
          <div>
            <span>
              <NumberCounter 
              start={100}
              end={978}
              delay='1'
              preFix='+'
              />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter 
              start={0}
              end={50}
              preFix='+'
              delay='8'
              />
            </span>
            <span>fitnes progress</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get strted</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Join-now</button>
        <motion.div
          initial={{right:'-1rem'}}
          whileInView={{right:'4rem'}}
          transition={transition}
          className="heart-rate">
          <img src={heart} alt="" />
          <span>heart rate</span>
          <span>116 bpm</span>
        </motion.div>
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right:'20rem'}}
        transition={transition}
        src={heroImage} alt=""  className='hero-image'/>
        <img src={heroImageBG} alt="" className='hero-image-back'/>

        <motion.div className="calories"
          initial={{right:'37rem'}}
          whileInView={{right:'28px'}}
          transition={transition}
        >
          <img src={Calories} alt="" />
          <div>
          <span>calories Burrned</span>
          <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero