import React from 'react'

function Button({text}) {
    console.log(text)
  return (
    <div>
    <button className='bg-blue-500 py-2 px-6 rounded-md m-2 text-white'>{text}</button>
    </div>
  )
}

export default Button


// rfce = for normal function component.
//rafce = for arrow function component.
//props = props are used to share data from parent component to child component
