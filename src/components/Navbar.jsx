// src/components/Navbar.jsx

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  function slideToHome() {
    navigate('/');
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <nav className="bg-gray-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <div className="font-bold hover:text-gray-300 cursor-pointer">
          <p className="sm:text-2xl w-full text-4xl">Github Tracker</p>
          <button onClick={toggleMenu} className='absolute top-6 right-3 sm:hidden'>
            {isMenuOpen ? <IoMdClose size={30} /> : <IoIosMenu size={30} />}
          </button>
        </div>

        {/* Links/Buttons */}
        <div className='hidden sm:flex w-full sm:w-1/2 justify-around sm:justify-end gap-6 mt-4 sm:mt-0'>
          <NavLink to="/dashboard" className="text-base p-2 sm:p-[10px] font-medium hover:font-semibold">
            Dashboard
          </NavLink>
          <NavLink to="/dashboard/about" className="text-base p-2 sm:p-[10px] font-medium hover:font-semibold">
            About
          </NavLink>
       
          <NavLink to="/dashboard/contact" className="text-base p-2 sm:p-[10px] font-medium hover:font-semibold">
            Contact Us
          </NavLink>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isMenuOpen && (
          <div className="absolute top-[60px] bg-gray-600 right-0 w-2/3 shadow-lg p-5 transition-transform duration-300 transform translate-x-0 sm:hidden z-20">
            <nav className="flex flex-col items-start space-y-4">
              <NavLink onClick={toggleMenu} to="/dashboard" className="text-base font-medium hover:text-green-500">
                Dashboard
              </NavLink>
              <NavLink onClick={toggleMenu} to="/dashboard/about" className="text-base font-medium hover:text-green-500">
                About
              </NavLink>
              <NavLink onClick={toggleMenu} to="/dashboard/contact" className="text-base font-medium hover:text-green-500">
                Contact Us
              </NavLink>

            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
