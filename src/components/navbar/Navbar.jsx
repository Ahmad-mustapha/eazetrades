import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (text) => {
    setOpenDropdown(openDropdown === text ? null : text);
  };

  const navLinks = [
    { text: 'Products', url: '/products', dropdown: ['Product 1', 'Product 2', 'Product 3'] },
    { text: 'Services', url: '/services', dropdown: ['Service 1', 'Service 2', 'Service 3'] },
    { text: 'Vendors', url: '/vendors' }, // No dropdown
  ];

  return (
    // <nav className="bg-white shadow-md">
      <nav className="mx-auto px-8 py-4 h-[5.5rem] flex justify-between items-center bg-white shadow-md">
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <div><img src={Logo} alt="" /></div>
          <div className="text-2xl font-bold text-gray-800">EAZETRADES</div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <div className="">
            <input
              type="text"
              placeholder="Search for product"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> 
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => link.dropdown && toggleDropdown(link.text)}
                className="text-gray-700 hover:text-blue-600 flex items-center"
              >
                {link.text}
                {/* {link.dropdown && (
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )} */}
              </button>

              {/* Dropdown Menu */}
              {link.dropdown && openDropdown === link.text && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  {link.dropdown.map((item, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Get started
          </button>
        </div>
        </div>

        {/* Get Started Button */}
        
      </nav>
    // </nav>
  );
};

export default Navbar;