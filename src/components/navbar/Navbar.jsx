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
  { text: 'Vendors', url: '/vendors' }, // No dropdown
];


export const Sidebar = ({ isOpen, setOpenNav, openDropdown, setOpenDropdown, toggleDropdown }) => {
  const [hoveredItem, setHoveredItem] = useState(null); // Track hovered item

  return (
    <div className={`flex flex-col pl-4 justify-center gap-10 text-[#094C41] text-[16px] h-screen w-[70%] sm:w-[50%] fixed right-0 top-0 z-50 transition-transform duration-500 bg-[#fff] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      {navLinks.map((link, index) => (
        <div key={index} className="relative text-[16px] lg:text-[19px] font-[400]">
          {link.dropdown ? (
            <button
              onClick={() => link.dropdown && toggleDropdown(link.text)}
              className="text-gray-700 hover:text-blue-600 flex items-center"
            >
              {link.text}
              {link.dropdown && ( // Show arrow only for "Products" and "Services"
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
              onClick={() => setOpenNav(false)}
              to={link.url}
              className="text-gray-700 hover:text-blue-600"
            >
              {link.text}
            </Link>
          )}

          {/* Parent Dropdown Menu */}
          {link.dropdown && openDropdown === link.text && (
            <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              {link.dropdown.map((item, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)} // Set hovered item
                  onMouseLeave={() => setHoveredItem(null)} // Clear hovered item
                >
                  <Link
                    to={`/${link.text.toLowerCase()}/${item.slug}`}
                    onClick={() => setOpenNav(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    {item.name}
                  </Link>

                  {/* Child Dropdown Menu (shown on hover) */}
                  {item.children && hoveredItem === item.name && (
                    <div className="absolute left-full top-0 ml-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                      {item.children.map((child, childIdx) => (
                        <Link
                          key={childIdx}
                          to={`/${link.text.toLowerCase()}/${item.slug}/${child.slug}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Get Started Button */}
      <div className='w-[135px]'>
        <Link 
          to='/signup'
          onClick={() => setOpenNav(false)}
          className="bg-[#5F3AFB] w-full text-white px-4 py-2 rounded-[100px] text-[16px] lg:text-[19px]">
          Get started
        </Link>
      </div>
    </div>
  );
};


const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNav, setOpenNav] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null); // Track hovered item

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
      <Link to='/' className="flex items-center gap-2">
        <div className="w-[2.3rem] :w-[2rem]">
          <img className="w-full" src={Logo} alt="Logo" />
        </div>
        <div className="hidden sm:flex text-2xl font-bold text-gray-800">EAZETRADES</div>
      </Link>

      {/* Search Bar */}
      <Searchbarnav />

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-[11px] lg:gap-[28px]">
        {navLinks.map((link, index) => (
          <div key={index} className="relative text-[16px] lg:text-[19px] font-[400]">
            {link.dropdown ? (
              <button
                onClick={() => link.dropdown && toggleDropdown(link.text)}
                className="text-gray-700 hover:text-blue-600 flex items-center"
              >
                {link.text}
                {link.dropdown && ( // Show arrow only for "Products" and "Services"
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
                to={link.url}
                className="text-gray-700 hover:text-blue-600"
              >
                {link.text}
              </Link>
            )}

            {/* Parent Dropdown Menu */}
            {link.dropdown && openDropdown === link.text && (
              <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                {link.dropdown.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.name)} // Set hovered item
                    onMouseLeave={() => setHoveredItem(null)} // Clear hovered item
                  >
                    <Link
                      to={`/${link.text.toLowerCase()}/${item.slug}`}
                      onClick={() => setOpenNav(false)}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg w-full text-left"
                    >
                      {item.name}
                    </Link>

                    {/* Child Dropdown Menu (shown on hover) */}
                    {item.children && hoveredItem === item.name && (
                      <div className="absolute left-full top-0 ml-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                        {item.children.map((child, childIdx) => (
                          <Link
                            key={childIdx}
                            to={`/${link.text.toLowerCase()}/${item.slug}/${child.slug}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Get Started Button */}
        <div className='w-[135px]'>
          <Link to='/signup' className="bg-[#5F3AFB] w-full text-white px-4 py-2 rounded-[100px] text-[16px] lg:text-[19px]">
            Get started
          </Link>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className={`menu z-50 fixed right-[2rem] flex md:hidden flex-col cursor-pointer bg-[#5F3AFB] rounded-full h-[40px] justify-center items-center w-[40px]`} onClick={ToggleMenu}>
        <p className={`block w-[1.3rem] h-[2px] rounded-md bg-[#fff] transition-transform duration-500 ${openNav ? 'rotate-45 translate-y-[10px]' : ''}`}></p>
        <p className={`block w-[1.3rem] h-[2px] rounded-md bg-[#fff] transition-transform duration-500 ${openNav ? 'opacity-0' : 'opacity-100'}`}></p>
        <p className={`block w-[1.3rem] h-[2px] rounded-md bg-[#fff] transition-transform duration-500 ${openNav ? '-rotate-45 -translate-y-[8px]' : ''}`}></p>
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={openNav}
        setOpenNav={setOpenNav}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        toggleDropdown={toggleDropdown}
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