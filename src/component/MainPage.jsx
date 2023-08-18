import React from 'react'
import Navbar from './Navbar'
import NavPage from './NavPage'

function MainPage() {
  return (
    <div>
        <section>
             {/* navbar section */}
            <div>
              <Navbar/>
            </div>

            {/* navPage section */}
            <div>
              <NavPage/>
            </div>
        </section>
      
    </div>
  )
}

export default MainPage
