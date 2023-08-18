import React from 'react'
import { motion } from "framer-motion";
import { learning } from '../constants'
import { textVariant, fadeIn } from '../utils/motion';
import SectionWrapper from '../component/hoc/SectionWrapper';

function Me() {
  return (
    <div>
     {/* About part */}
    <div className="sm:flex  text-center flex-col lg:flex justify-center items-center">
        <motion.div variants={textVariant()}>
          <h1 className='text-secondary text-5xl flex justify-center about '>About Me</h1>
        </motion.div>

        <motion.p
        variants={fadeIn("","",0.1,1)}
        className='lg: text-secondary text-[23px] max-w-3xl leading-[30px] mt-10 '
       >
          Before web development, I studied law and then audiovisual.
          However, I always have been interested in design motion and drawing.
          So, I decided to start a Web design course. That's how I discover HTML and CSS. 
          I really enjoy building things. So, I decided to dive deep into this.
          It's a long road, but I am a hard worker. I am ready to work on ambitious projects with interesting people.
        
        <p className='text-[19px] mt-5 mb-10'>Visit my
        <a href="https://www.linkedin.com/in/anais-philocles-7bb53672/" target="_blank" 
        rel="noopener  noreferrer" 
        ><span className="text-[#FA7D5E] "> LinkedIn</span> for more details.</a> 
      
      </p>
      </motion.p>
 
    </div>
        {/* Skills card */}
    
    <div className="sm:flex  text-center flex-col lg:flex justify-center items-center ">
        <motion.div variants={textVariant()}>
        <p className='text-secondary text-3xl flex justify-center about mt-15'>Skills</p>
        </motion.div>
    </div>

    <div className= "w-full  gap-4 flex flex-wrap justify-center items-center mt-10">
       {learning.map((image)=>{
         return(
          <motion.div  key= {image.id}
          variants={fadeIn("right", "spring", image.id * 0.5, 1.5)}

          >
          <img src={image.image} alt="stackimg"/>
        </motion.div>
        
         )

       })}
    </div>
    </div>
   
  )
}

export default SectionWrapper(Me);
