import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import NumberCounter from "number-counter"
import {motion} from 'framer-motion'

const Hero = () => {
  const trasition = {type: 'spring',duration : 3}
  const mobile = window.innerWidth <=768 ? true: false;
  return (
    <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header/>

            <div className="the-best-add">
                <motion.div
                initial={{left: mobile ? '164px': '238px'}}
                whileInView={{left: '8px'}}
                transition={{...trasition, type:'tween'}}
                ></motion.div>
                <span>Skull Fitness: The best gym in town for ultimate strength.</span>
            </div>
            <div className="hero-text">
              <div>
                <span className='stroke-text'>build</span>
                <span>your</span>
              </div>
              <div><span>dream body</span></div>
              <div>
                <span>
                  At Skull Fitness, we empower you to build your dream body with expert guidance,
                  state-of-the-art equipment, and a supportive community.
                  </span>
              </div>
            </div>
            {/*Figures */}
            <div className="figures">
              <div>
                <span>
                  <NumberCounter end={140} start={100} delay={4} preFix="+"/>
                </span>
                <span>expert coaches</span>
                </div>
              <div>
                <span>
                  <NumberCounter end={976} start={799} delay={4} preFix="+"/>
                </span>
                <span>Health Nut</span>
                </div>
              <div>
                <span>
                  <NumberCounter end={50} start={0} delay={4} preFix="+"/>
                </span>
                <span>Training modules</span>
                </div>
            </div>
            {/* Buttons */}
            <div className="hero-buttons">
              <button className="btn">Start Off</button>
              <button className="btn">Explore Further</button>
            </div>
        </div>
        <div className="right-h">
           <button className='btn'>Join Now</button>

           <motion.div
           transition={trasition}
           whileInView={{right:"4rem"}}
           initial={{right:"-1rem"}}
           className="heart-rate">
               <img src={Heart} alt="" />
               <span>Pulse Rate</span><span>119 bpm</span>
           </motion.div>
           <img src={hero_image} alt="" className="hero-image" />
           <motion.img
           initial={{right:"11rem"}}
           whileInView={{right:"20rem"}}
           transition={trasition}
           src={hero_image_back} alt="" className="hero-image-back" />

        </div>

    </div>
  )
}
export default Hero;