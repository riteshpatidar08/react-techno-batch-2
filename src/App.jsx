import Button from './Button';
import { useState } from 'react';
import List from './components/List'
import Form from './components/Form';
function App() {

  const [firstName,setFirstName] = useState('abc')

  const handleClick = () => {
  setFirstName('xyz')
   console.log(firstName)

  }
  return (
    <div>
      <p>{firstName}</p>
     <button onClick={handleClick} className='bg-blue-500 py-2 px-6 rounded-md m-2 text-white'>Click</button>
     <List/>
     <Form/>
    </div>
  );
}

export default App;


//NOTE useState is used when you want to change or update data on the screen
//NOTE useState is a function which you have to call.
//NOTE State = data which changes over time