import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Importing pages from Pages component
import Home from "./Pages/Home/Home"

import Buy from './Pages/Buy/Buy'
import Sell from './Pages/Sell/Sell'
import Rent from './Pages/Rent/Rent'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "/buy" element = {<Buy />} />
          <Route exact path = "/sell" element = {<Sell />} />
          <Route exact path = '/rent' element = {<Rent/>} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App