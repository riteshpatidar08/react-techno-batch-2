import React from 'react'
import { useRef } from 'react';
function Ref() {
    const inputRef = useRef(null) ;
    console.log(inputRef)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} className='w-64 p-2 h-10 border border-blue-400' type='text' />
            <button className='px-6 py-2 bg-blue-500'>Submit</button>
        </form>
      
    </div>
  )
}

export default Ref ;

// uncontrolled and controlled component
