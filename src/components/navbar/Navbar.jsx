import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useLocation } from 'react-router-dom';
import { Searchbarnav } from '../imports';
import './navbar.css';

const navLinks = [
  {
    text: 'Products',
    url: '/products',
    dropdown: [
      { name: 'Jeans', slug: 'jeans' },
      { name: 'Shirts', slug: 'shirts' },
      { name: 'Shoes', slug: 'shoes' },
    ],
  },
  {
    text: 'Services',
    url: '/services',
    dropdown: [
      { name: 'Service 1', slug: 'service-1' },
      { name: 'Service 2', slug: 'service-2' },
      { name: 'Service 3', slug: 'service-3' },
    ],
  },
  { text: 'Vendors', url: '/vendors' }, // No dropdown
];

export const Sidebar = ({ isOpen, setOpenNav, openDropdown, setOpenDropdown, toggleDropdown }) => (
  <div className={`flex flex-col pl-4 justify-center gap-10 text-[#094C41] text-[16px] h-screen w-[70%] sm:w-[50%] fixed right-0 top-0 z-50 transition-transform duration-500 bg-[#fff] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
    {/* Navigation Links with Dropdowns */}
    {navLinks.map((link, index) => (
      <div key={index} className="relative text-[16px] lg:text-[19px] font-[400]">
        {link.dropdown ? (
          <button
            onClick={() => link.dropdown && toggleDropdown(link.text)} // Use the toggleDropdown function
            className="text-gray-700 hover:text-blue-600 flex items-center"
          >
            {link.text}
            {link.dropdown && (
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
            )}
          </button>
        ) : (
          <Link
            to={link.url} // Use the Link component for non-dropdown links
            className="text-gray-700 hover:text-blue-600"
          >
            {link.text}
          </Link>
        )}

        {/* Dropdown Menu */}
        {link.dropdown && openDropdown === link.text && (
          <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            {link.dropdown.map((item, idx) => (
              <Link
                key={idx}
                to={`/${link.text.toLowerCase()}/${item.slug}`} // Navigate to the correct route
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}

    {/* Get Started Button */}
    <div className='w-[135px]'>
      <button className="bg-[#5F3AFB] w-full text-white px py-2 rounded-[100px] text-[16px] lg:text-[19px]">
        Get started
      </button>
    </div>
  </div>
);

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNav, setOpenNav] = useState(false);

  const location = useLocation();
  const ToggleMenu = () => {
    setOpenNav(!openNav);
  };

  const toggleDropdown = (text) => {
    setOpenDropdown(openDropdown === text ? null : text);
  };

  return (
    <nav className="mx-auto px-8 py-4 h-[5.5rem] flex justify-between items-center gap-4 bg-[#EEEAFF] border-b-[1px] border-slate-300 fixed top-0 left-0 w-full z-30">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-[2.3rem] :w-[2rem]">
          <img className="w-full" src={Logo} alt="Logo" />
        </div>
        <div className="hidden sm:flex text-2xl font-bold text-gray-800">EAZETRADES</div>
      </div>

      {/* Search Bar */}
      <Searchbarnav />
      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-[11px] lg:gap-[28px]">
        {/* Navigation Links with Dropdowns */}
        {navLinks.map((link, index) => (
          <div key={index} className="relative text-[16px] lg:text-[19px] font-[400]">
            {link.dropdown ? (
              <button
                onClick={() => link.dropdown && toggleDropdown(link.text)}
                className="text-gray-700 hover:text-blue-600 flex items-center"
              >
                {link.text}
                {link.dropdown && (
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
                )}
              </button>
            ) : (
              <Link
                to={link.url} // Use the Link component for non-dropdown links
                className="text-gray-700 hover:text-blue-600"
              >
                {link.text}
              </Link>
            )}

            {/* Dropdown Menu */}
            {link.dropdown && openDropdown === link.text && (
              <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                {link.dropdown.map((item, idx) => (
                  <Link
                    key={idx}
                    to={`/${link.text.toLowerCase()}/${item.slug || item.url}`} // Navigate to the correct route
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Get Started Button */}
        <div className='w-[135px]'>
          <button className="bg-[#5F3AFB] w-full text-white px py-2 rounded-[100px] text-[16px] lg:text-[19px]">
            Get started
          </button>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className={`menu z-50 fixed right-[2rem] flex md:hidden flex-col gap-2 cursor-pointer bg-[#5F3AFB] rounded-full h-[45px] justify-center items-center w-[45px]`} onClick={ToggleMenu}>
        <p className={`block w-8 h-[3px] rounded-md bg-[#fff] transition-transform duration-500 ${openNav ? 'rotate-45 translate-y-[12px]' : ''}`}></p>
        <p className={`block w-8 h-[3px] rounded-md bg-[#fff] transition-transform duration-500 ${openNav ? 'opacity-0' : 'opacity-100'}`}></p>
        <p className={`block w-8 h-[3px] rounded-md bg-[#fff] transition-transform duration-500 ${openNav ? '-rotate-45 -translate-y-[8px]' : ''}`}></p>
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={openNav}
        setOpenNav={setOpenNav}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        toggleDropdown={toggleDropdown} // Pass the toggleDropdown function
      />

      {/* Overlay */}
      <div
        className={`${openNav ? 'bg-transparent backdrop-blur-[10px] h-screen w-full fixed left-0 top-0 z-40' : 'hidden'}`}
        onClick={() => setOpenNav(false)}
      ></div>
    </nav>
  );
};

export default Navbar;