import React from 'react'
import { motion } from "framer-motion";
import  {SectionWrapper} from "../components/HOC"


function About() {
  return (
      <>
      
    <div className="sm:flex flex-col lg:flex justify-center items-center">
        <motion.div>
        <h1 className='text-secondary text-6xl flex justify-center'>About Me</h1>
      </motion.div>

      <motion.p
        className='mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]'
       >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems.!

      </motion.p>

      
    </div>
   
    </>
  )
}

export default SectionWrapper(About, "about");
