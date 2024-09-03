import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-violet-500 h-10 flex justify-center items-center text-white gap-4'>
      <Link to='/'>Home</Link>
      <Link to='/services'>Services</Link>
      <Link to='/reducer'>UseReducer</Link>
    </div>
  )
}

export default Navbar
