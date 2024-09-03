import React from 'react'
import { Routes , Route } from 'react-router-dom' ;
import { lazy , Suspense } from 'react';
// import Homepage from './pages/Homepage';

const Homepage = lazy(()=> import('./pages/Homepage'))
const Services = lazy(()=>import('./pages/Services'))
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
const Reducer = lazy(()=>import('./pages/Reducer'))
import Usememo from './components/Usememo';
function App() {
  return (
    <div>
      <Navbar/>
      <Usememo/>
      <Suspense fallback={<div>Loading</div>}>
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/reducer' element={<Reducer/>}/>
      <Route path='/services' element={<Services/>} />
      <Route path="*" element={<NotFound/>}/>
      </Routes> 
      </Suspense>
    </div>
  )
}

export default App
