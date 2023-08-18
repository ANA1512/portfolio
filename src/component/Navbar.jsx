import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import menu from '../assets/menu.svg';
import close from '../assets/close.svg'
import {styles} from '../styles'

function Navbar() {

  const [toggle, setToggle] = useState(false);

  return (
    <header>
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 text-[20px]
    backdrop-blur-sm bg-white/30` }>
    
    <div className= "w-full flex justify-between items-center max-w-7x1 mx-auto">
       <NavLink
         to="/"
         className= "flex items-center gap-2"
         onClick={()=>{
           window.scrollTo(0,0); 
         }}
       >
       </NavLink>

         {/* link navbar */}

          <ul className="list-none hidden sm:flex flex-row gap-10 text-secondary ">
            <NavLink to='/' className="hover:text-orange-500" >
              <p>Home</p>
            </NavLink>
            <NavLink to='/about' className="hover:text-orange-500">
              <p >About</p>
            </NavLink>

            <NavLink to='/ProjectDisplay' className="hover:text-orange-500">
            <p>Projects</p>
            </NavLink>

            <NavLink to='/contact' className="hover:text-orange-500">
            <p>Contact</p>
            </NavLink>
          </ul>  


        {/* mobile hamburger menu  */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
          src={toggle ? close: menu}
          alt="menu"
          className= "w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}/>
          
          {/* show menu */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-pink-100  absolute top-20 
          right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl`}>

            
             <ul className="list-none flex justify-end  items-start flex-col gap-4 text-secondary">
                <NavLink to='/' >
                  <p>Home</p>
                </NavLink>
                    
                <NavLink to='/about'>
                  <p >About</p>
                </NavLink>

                <NavLink to='/ProjectDisplay'>
                  <p>Projects</p>
                </NavLink>

                <NavLink to='/contact'>
                  <p>Contact</p>
                </NavLink>

             </ul>   
          </div>
        </div>  
    
    </div>
    </nav>
    
    </header>
  )
}

export default Navbar
