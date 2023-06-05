import { useState } from 'react'


import './App.css'
import Hello from './components/Hello/Helllo'
import { Ola } from './components/Hello/Helllo'

function App() {
  return (
    <>
      <Hello nome="Felipe"/>
      <Hello nome="Malucas"/>
      <Ola />
    </>
  )
}


export default App
