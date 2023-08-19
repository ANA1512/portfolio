import React,{ useState} from 'react'
import  {SectionWrapper} from "./hoc"
import { motion } from "framer-motion";
import Card from './Card/Card'
import {projectInfo} from  '../constants' 
import ReactPlayer from 'react-player';
import {styles} from '../styles'
import github from '../assets/github.png'
import { textVariant} from '../utils/motion';
import { Link } from 'react-router-dom'


function ProjectDisplay() {
  
  //Modal open and close
  const [overview, setOverview] = useState([]);
  const [overviewtoggle, setoverviewtoggle] = useState(false);
 
  const changeOverview = (details) => {
      setOverview([details])
      setoverviewtoggle(!overviewtoggle);
    
      if (document.body.style.overflow !== "hidden") {
         document.body.style.overflow = "hidden"; 
      } else {
        document.body.style.overflow = "scroll";
      }
     };

  return (
    <div>
        <motion.div 
        variants={textVariant()}
        className='flex flex-col justify-center items-center'
        >
        <h1 className='text-secondary text-5xl flex justify-center'>Projects</h1>

        <p className='text-secondary '>View the code of this portfolio</p> 

        <Link to="https://github.com/ANA1512/portfolio" target="_blank" rel="noopener  noreferrer" 
          className="w-11 h-11 rounded-full flex justify-center items-center cursor-pointer "
         >
          <img src={github} alt="icongithub" className="w-10 h-10 object-contain border-4 rounded-full  hover:bg-secondary github flex justify-center " />      
        </Link>
      </motion.div>

    
  {/* Card project */}

        <motion.div 
        variants={textVariant()}
        className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center gap-4 mt-2">
        {projectInfo.map((files)=>{
            return(
                <div key={files.id}  onClick ={()=>changeOverview(files) } >
                  <Card image={files.image}  />
                </div>
            )
        })} 
      
      </motion.div>

  {/* Modal */}

    {overviewtoggle && (
    
      <div className={`{${styles.paddingX} overview-container overflow-hidden overflow-y-scroll overscroll-none
       scrollbar scrollbar-thumb-pink-50 scrollbar-track-slate-600  z-1  onClick={changeOverview} flex justify-center items-center`} >
      <div className= "overview-body" 
        onClick={(e)=>e.stopPropagation()}  >
      <div className= "overview-header  relative">
        <button onClick={changeOverview} className="close hover:bg-secondary">Close</button>
      </div>
    
     
      <div className="overview-content overflow-hidden ">
        {overview.map((modal)=>{
          return(
             <div className = "content-car" key={modal.id}>
             <div className="content-video">
                <ReactPlayer
                  width='100%' height='auto'
                   url={modal.video}
                   pip={true}
                   controls={true}
                   playing={true}
                   className="videobox  xl:w-1/2 "
                />
              
             <div className= 'details text-center text-secondary  overscroll-auto flex flex-col justify-center items-center ' >
                <p className='text-3xl font-bold title-description mt-2'> {modal.title}</p>
                <p className="text-[20px] text-center description mx-10 mt-2">{modal.description}</p>
     
                 {/* icon github */}
                <div
                  onClick={()=>window.open(modal.source_code_link,"_blank")}
                 className="w-11 h-11 rounded-full flex justify-center items-center cursor-pointer mb-2 mt-2 "
                >
                  <img src={github} alt="icongithub" className="w-10 h-10 object-contain border-4 rounded-full  hover:bg-secondary github flex justify-center " />
                    
                </div>

             </div>   
          </div>
        </div>

          )
        })}
        
      </div>
      </div>
     </div>
   
     
)}


      

    </div>
  )
}

export default SectionWrapper(ProjectDisplay);

