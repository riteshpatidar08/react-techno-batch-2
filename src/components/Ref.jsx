import React, { useEffect } from 'react'
import { useRef } from 'react';


function Ref() {
    const inputRef = useRef(null) ;
    console.log(inputRef)

    useEffect(()=>{
   inputRef.current.focus()
    },[]) ;

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

//uncontrolled and controlled component

//NOTE useRef is used to get the direct dom refence..  
//NOTE  when i am getting input values from the dom it doestnot cause re-render the application..

//NOTE when we use controlled components which are dependent on the react state to get the value whenever the value chnage it will cause our application to rerender , means the component will call again and again..