import React from 'react'
import { Link } from 'react-router-dom'
import {styles} from  '../styles'
import { motion } from "framer-motion";
import Mac from '../assets/mac-float.png';
import '../constants'
import '../index.css'


function Hero() {
  return (

    <section className= " relative w-full h-screen mx-auto  bg" >
            
      <div className={`{${styles.paddingX}  absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row  items-start 
      lg:top-[80px] gap-6 sm:items-center  md:items-center `}>
       
      {/* text intro */}
      <div className={`{${styles.padding} lg:flex  h-[800px] gap-7 mt-[-180px] container-hero ` } >
      <div className=" sm:items-center  w-full mt-5 lg: flex w-1/2 flex-col justify-center
       text-secondary ">
          <h1 className="text-center text-3xl ">Hi, I am Anais</h1>
          <p className="text-center text-3xl ">
            I am Web developper <br/>and a Product Designer <br/> based in Paris</p>
          <Link to="/contact" className='text-center  '>
            <button className='sm:text-4  w-40 mx-auto border-2 border-[#FEF2F2] rounded-full p-2 mt-4 text-2xl text-[#FA7D5E] lg:text-center hover:shadow-lg'>
              Contact me
            </button>
          </Link>
        
      </div>

      {/* image portfolio */}
      <motion.div 
        className=" w-full  mt-10  lg:flex w-1/2 justify-center items-center   ">
          <img src={Mac} alt="ordi"/>
      </motion.div>
     </div>
     </div> 
    
   
   
    </section>
  )
}

export default Hero