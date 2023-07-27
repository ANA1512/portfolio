import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar' 
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Hero from './components/Hero'
import Tech from './components/Stack'


function App() {
 
  return (
    <BrowserRouter>
    <div className= "relative z-0 " >
    <div className= "bg-hero-pattern bg-cover bg-no-repeat bg-center">
         <Navbar/>
         <Hero/>
         </div>
         <About />
         <Tech/>
         <Projects/>
         <Contact/>
    </div>
    
    </BrowserRouter>
  )
}

export default App

