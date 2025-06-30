
import React, { useState } from "react";
import { Link } from "react-scroll"; 
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed shadow-md top-0 left-0 w-full py-4 px-20 bg-[#F8AC8C]  flex justify-between items-center z-50 max-sm:px-8 max-md:fixed">
      {/* Logo */}
      <a href="/" className="text-2xl mb-2 font-bold text-gray-700">
        Portfolio
      </a>

      {/* Hamburger Menu Icon */}
      <div className="text-2xl text-white mb-2 cursor-pointer lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RxCross2/> : <RxHamburgerMenu/>}
      </div>

      {/* Navbar Links */}
      <nav className={`lg:flex ${menuOpen ? "block" : "hidden"} absolute lg:static top-16 bg-slate-500 right-0 lg:top-0 lg:right-0 bg-gray-80 lg:bg-transparent w-full lg:w-auto p-8 lg:p-0`}>
        <ul className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-4 lg:space-y-0">
          <li>
            <Link to="home" smooth={true} duration={500} className={`text-lg menu-item ${menuOpen ? "text-yellow-400" : "text-gray-600"}   cursor-pointer`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className={`text-lg menu-item ${menuOpen ? "text-yellow-400" : "text-gray-600"}   cursor-pointer`}>
              About
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className={`text-lg menu-item ${menuOpen ? "text-yellow-400" : "text-gray-600"}   cursor-pointer`}>
              Services
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} className={`text-lg menu-item ${menuOpen ? "text-yellow-400" : "text-gray-600"}   cursor-pointer`}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className={`text-lg menu-item ${menuOpen ? "text-yellow-400" : "text-gray-600"}   cursor-pointer`}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
