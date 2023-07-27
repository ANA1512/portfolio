import React from 'react'
import '../index.css'
//  import {motion, useScroll, useTransform} from 'framer-motion'
// import  VideoJS from './VideoJS'
// import video from '../assets/video.mp4'
import {projects} from '../constants'

const Card =({index, name, description, image, source_code_link}) => {


return(

  <div>
  <div  className="bg-tertiary p-5   sm:w-[360px] w-full flex justify-center">

    <div className="mt-5 ">
        <h3 className='text-red-700 font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-green text-[14px]'>{description}</p>
    </div>

    <div className="relative w-[530px] h-[230px] flex">
    <img
     src={image}
      alt={name}
      className= "w-full h-full object-cover rounded-2xl"
    />
  </div>
  </div>
  </div>
)


}



const Projects =() => {
  //  let {scrollYProgress} =useScroll();
  //  let x= useTransform (scrollYProgress, [0,1], ["0%","100%"]);

//    const videoJsOptions = {
        
//     controls: true,
//     sources: [{

//       src: video,
//       type: 'video/mp4'
//     }]

//    }
  return (

         <div className= "mt-20 flex flex-wrap gap-24">
         {projects.map((project, index)=>(
          <Card 
          key={`project-${index}`}
          index={index}
          {...project}
          />
         ))} 
          {/* <VideoJS options= {videoJsOptions} /> 
          */}
         
    </div>
  )
}

export default Projects
