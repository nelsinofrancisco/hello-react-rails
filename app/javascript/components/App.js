import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HelloWorld from './HelloWorld'
import configureStore from "../redux/configureStore"
import { Provider } from "react-redux"

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<>Home!</>}/>
          <Route path="/hello" element={<HelloWorld greeting="Friend" />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
