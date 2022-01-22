import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HelloWorld from './HelloWorld'

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<>Home!</>}/>
        <Route path="/hello" element={<HelloWorld greeting="Friend" />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
