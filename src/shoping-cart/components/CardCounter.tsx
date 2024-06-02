
'use client'
import React, { useState } from 'react'

export const CardCounter = () => {
    const [count, setCount] = useState(10)
    const add =()=>{
      setCount( count +1)
  }
    const decrement = ()=>{
      if (count <= 0 ) return;
      setCount (count -1)
    }
  
    return (
      <>
      <span>Producto en el carrito</span>
   
        <span className="text-9xl">{count}</span>
      <div className='flex'>
  
      <button
      onClick={add}
     className="flex mr-2 px-8 items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all">+1</button>
    <button
      onClick={decrement}
    className="flex px-8 items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all">-1</button>
      </div>
  
      </>
    
    )
  }
  
