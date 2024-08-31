import React from 'react'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
function HeaderProfile() {
  const {data} =  useContext(DataContext)
  return (
    <div>
      <p>Profile component</p>
      <h1>{data}</h1>
    </div>
  )
}

export default HeaderProfile
