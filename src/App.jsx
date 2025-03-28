import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import { About, Home, Contactus, Message, Productdetails, Vendor, Signup, Login, Forgetpassword } from './pages/import'
import ScrollToTop from './components/randoms/ScrollToTop'
import Resetpassword from './pages/forgetpassword/Resetpassword'
import { Products } from './pages/products/Products'

const navLinks = [
  {
    text: 'Products',
    url: '/products',
    dropdown: [
      {
        name: 'Fashion',
        slug: 'fashion',
        children: [
          { name: 'Jeans', slug: 'jeans' },
          { name: 'Shirts', slug: 'shirts' },
          { name: 'Shoes', slug: 'shoes' },
        ],
      },
      {
        name: 'Electronics',
        slug: 'electronics',
        children: [
          { name: 'Cameras', slug: 'cameras' },
          { name: 'Phones', slug: 'phones' },
          { name: 'Laptops', slug: 'laptops' },
        ],
      },
    ],
  },
  {
    text: 'Services',
    url: '/services',
    dropdown: [
      {
        name: 'Service 1',
        slug: 'service-1',
        children: [
          { name: 'Sub-Service 1', slug: 'sub-service-1' },
          { name: 'Sub-Service 2', slug: 'sub-service-2' },
        ],
      },
      {
        name: 'Service 2',
        slug: 'service-2',
        children: [
          { name: 'Sub-Service 3', slug: 'sub-service-3' },
          { name: 'Sub-Service 4', slug: 'sub-service-4' },
        ],
      },
    ],
  },
  { text: 'Vendors', url: '/vendors' },
];

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/vendors' element={<Vendor />} />
          <Route path='/contact-us' element={<Contactus />} />
          <Route path='/message' element={<Message />} />
          
          {/* Product Details Route */}
          <Route 
            path='/product-details/:id' 
            element={<Productdetails />} 
          />
          
          {/* Products Routes */}
          <Route path='/products' element={<Products />} />
          
          {/* Dynamic Category Routes */}
          {navLinks.map((link) => {
            if (link.dropdown) {
              return [
                // Main category route (e.g., /products/fashion)
                <Route
                  key={link.slug}
                  path={`/${link.text.toLowerCase()}/:category`}
                  element={<Products />}
                />,
                // Subcategory routes (e.g., /products/fashion/shoes)
                ...link.dropdown.flatMap(category => (
                  category.children?.map(subCategory => (
                    <Route
                      key={`${category.slug}-${subCategory.slug}`}
                      path={`/${link.text.toLowerCase()}/${category.slug}/${subCategory.slug}`}
                      element={<Products category={subCategory.slug} />}
                    />
                  )) || []
                ))
              ];
            }
            return null;
          })}
        </Route>
        
        {/* Auth Routes */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgetpassword' element={<Forgetpassword />} />
        <Route path='/resetpassword' element={<Resetpassword />} />
        
        {/* 404 Not Found Route - Add this at the end */}
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App