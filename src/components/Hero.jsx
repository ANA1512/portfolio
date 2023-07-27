import React from 'react'
import Mac from '../assets/mac-float.png'
import {styles} from  '../styles'
import { motion } from "framer-motion";
import '../constants'


function Hero() {
  return (

    <section className= "relative w-full h-screen mx-auto">

    <div className={`{${styles.paddingX}  absolute inset-0 top-[120px]
        max-w-7xl mx-auto flex flex-row  items-start gap-5 `}>
          <div className="flex flex-col justify-center items-center mt-5">   
      </div>
    <div className="lg:flex">
            <div className=" w-full mt-5 lg: flex w-1/2 flex-col justify-center items-center  text-secondary">
                <h1 className="text-4xl lg:text-6xl">Hi, I am anais</h1>
                <p>I am Web developper <br/>and a Product Designer</p>
            </div>
            <div className=" w-full lg:flex w-1/2 justify-center items-center mt-5">
                <img src={Mac} alt="ordi"/>
             </div>
        </div>
     </div> 

     {/* create the signal  using framer motion*/}
     <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">

      <a href="#about">
      <div className="w-[35px] h-[64px] rounded-full border-4 border-secondary flex justify-center items-start p-2 ">
      <motion.div 
      // only want a vertical motion so just y 
      animate={{
        y: [0, 24,0],
        
      }}

      transition ={{
        duration:1.5,
        repeat: Infinity,
        repeatType:'loop'
      }}
      // cursor point appear
      className="w-3 h-3 rounded-full bg-primary mb-1"
    />
    </div>

    </a>
    </div>
    </section>
  )
}

export default Hero
