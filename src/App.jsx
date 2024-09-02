import React from 'react'
import { Routes , Route } from 'react-router-dom' ;
import Homepage from './pages/Homepage';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Ref from './components/Ref'
function App() {
  return (
    <div>
      <Navbar/>
      <Ref/>
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/services' element={<Services/>} />
      <Route path="*" element={<NotFound/>}/>
      </Routes> 
    </div>
  )
}

export default App
