import React from 'react'

import {stack} from "../constants"
import Ball from "../components/Ball"
const Stack = () => {
    return (
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {stack.map((stacks) => (
          <div className='w-15 h-15' key={stacks.name}>
           
           <Ball icon= {stacks.icon}/>
      
          </div>
        ))}

      
      </div>
    );
  };
export default Stack
