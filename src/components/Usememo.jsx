import React from 'react'
import { useState , useMemo } from 'react'
function Usememo() {
    const [numbers, setNumbers] = useState([1,2,3,4,5])
    const [count , setCount] = useState(0)
console.log("usememo component is rerendering")
    const handleClick = () => {
        setNumbers([...numbers , numbers.length + 1])
    }

    // useMemo(()=>{},[])

    const sum = useMemo(() => {
        console.log('calculating sum...')
  return numbers.reduce((accu,num)=> accu + num,0)      
    },[numbers])
  return (
    <>
    <button onClick={()=>setCount(count+1)}>increase</button>
    <div className='flex'>
        <p>sum : {sum}</p>
      {numbers?.map((num)=>(
        <p className='text-2xl m-2'>{num}</p>
      ))}
      <button onClick={handleClick} className='btn'>Add</button>
    </div>
    </>
  )
}

export default Usememo
