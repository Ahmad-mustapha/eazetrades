import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { About, Home, Contactus, Message, Productdetails, Products, Services, Vendor } from './pages/import'

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contactus />} />
              <Route path='/message' element={<Message />} />
              <Route path='/product-details/:id' element={<Productdetails />} />
              <Route path='/products' element={<Products />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
