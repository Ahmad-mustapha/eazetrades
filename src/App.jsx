import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { About, Home, Contactus, Message, Productdetails, Vendor, Signup, Login, Forgetpassword } from './pages/import'
import ScrollToTop from './components/randoms/ScrollToTop'
import Resetpassword from './pages/forgetpassword/Resetpassword'

function App() {

  return (
    <>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/about-us' element={<About />} />
              <Route path='/vendors' element={<Vendor />} />
              <Route path='/contact-us' element={<Contactus />} />
              <Route path='/message' element={<Message />} />
              <Route path='/product-details/:id' element={<Productdetails />} />
              {/* <Route path='/products' element={<Products />} /> */}
            </Route>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/forgetpassword' element={<Forgetpassword />}/>
            <Route path='/resetpassword' element={<Resetpassword />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
