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