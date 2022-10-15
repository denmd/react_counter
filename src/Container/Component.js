import React, { useState } from 'react'
import '../Container/Component.css';


function Component() {
  const [count,setCount]=useState(0)
  return (
    <div className='main-body'>
        <div className='content'>
            <h1 className='title'>Counter</h1>
            <h1 className='count'>{count  }</h1>
        </div>
        <div className='buttons'>
            <button className='button1' onClick={()=>
              setCount(count+1)
            }>Increment +</button>
            <button className='button2' onClick={()=>setCount(count-1)}>Decrement -</button>
        </div>
    </div>
  )
}

export default Component;