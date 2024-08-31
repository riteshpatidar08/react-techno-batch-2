import React from 'react'
import { useState } from 'react'
function Conditional() {
    const [isLogin , setIsLogin] = useState(true)
  return (
    <div className='flex h-screen items-center justify-center gap-5'>
      <p>{isLogin ? 'Welcome user':'Please logi in'}</p>
      <button onClick={()=>setIsLogin(!isLogin)} className='bg-sky-500 py-2 px-8'>{isLogin ? 'Logout' : 'Login'}</button>
    </div>
  )
}

export default Conditional


//PROP DRILLING ;