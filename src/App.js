import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Importing pages from Pages component
import Home from "./Pages/Home/Home"
import Map from "./Pages/Map/Map"
import Buy from './Pages/Buy/Buy'

import Rent from './Pages/Rent/Rent'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "/buy" element = {<Buy />} />
          <Route exact path = '/rent' element = {<Rent/>} />
          <Route exact path = "/map" element = {<Map/>} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App