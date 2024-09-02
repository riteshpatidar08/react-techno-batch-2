//REVIEW - COMPLETED TOPICS
//NOTE COMPONENTS
//NOTE JSX
//NOTE PROPS => when you have to pass data from parent to child you can use props ;
//NOTE LIST RENDERING(using map) 
//NOTE FORM HANDLING
//NOTE EVENTS
//NOTE ONCHANGE EVENT
//NOTE ONSUBMIT EVENT

//TODO for tomorrow - useEffect , prop drilling , useContext


<!-- 
 <Button text="Click" />
      
      <Button text="Submit" />
      <h1 style={styles}>React</h1>
      <input maxLength={5} /> -->

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



import Conditional from "./components/Conditional";
import Description from "./components/Description";
import Render from "./components/Render";
import { createContext } from "react";
import Header from "./components/Header";
function App() {
console.log(createContext())
  
  return (
    <div>
    <Render/>
    <Conditional/>
    <Header/>
    <Description/>
    </div>
  );
}

export default App;


//NOTE useState is used when you want to change or update data on the screen
//NOTE useState is a function which you have to call.
//NOTE State = data which changes over time