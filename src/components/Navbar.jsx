import React, { useState } from "react";
import Dropdownlang from "./Dropdownlang";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-2">
      <h1 className="w-3/12 flex items-center">
        <a href="">
          <svg width="50" height="50" viewBox="0 0 250 202" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Vector">
<path d="M45.5 10.6043L0 109.104H86.5C90.1 109.104 94 103.771 95.5 101.104C107.5 71.6043 132.2 11.6043 135 7.60431C137.8 3.60431 141.5 1.60431 143 1.1043C117.333 0.27097 64.4 -0.895697 58 1.1043C51.6 3.1043 47 8.27097 45.5 10.6043Z" fill="#26CAFB"/>
<path d="M150.5 10.3834L104.5 109.883L62 200.383C87.1667 201.883 139.5 203.683 147.5 198.883C155.5 194.083 161.167 186.217 163 182.883L199 103.383C211.833 72.3834 238 9.68344 240 6.88344C242 4.08343 247.167 1.71677 249.5 0.883443C223.5 0.216776 170 -0.716557 164 0.883443C158 2.48344 152.5 7.88344 150.5 10.3834Z" fill="#FA0006"/>
</g>
</svg>
        </a>
        <a className="ml-2 font-semibold text-lg" href="#">Hello</a>
      </h1>
     
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-xl focus:outline-none"
        onClick={toggleMobileMenu}
      >
        ☰
      </button>
      
      {/* Navigation Links */}
      <nav className={`nav font-semibold text-lg lg:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-red-800 border-opacity-0 hover:border-opacity-100 hover:text-red-800 duration-200 cursor-pointer active">
            <a href="">Tentang Kami</a>
          </li>
          <li className="p-4 border-b-2 border-red-800 border-opacity-0 hover:border-opacity-100 hover:text-red-800 duration-200 cursor-pointer">
            <a href="">Layanan</a>
          </li>
          <li className="p-4 border-b-2 border-red-800 border-opacity-0 hover:border-opacity-100 hover:text-red-800 duration-200 cursor-pointer">
            <a href="">Sertifikasi</a>
          </li>
          <li className="p-4 border-b-2 border-red-800 border-opacity-0 hover:border-opacity-100 hover:text-red-800 duration-200 cursor-pointer">
            <a href="">Kontak</a>
          </li>
          {/* <li>
            <div className="w-3/12 flex justify-end">
              <Dropdownlang />
            </div>
          </li> */}
        </ul>
      </nav>
      
      <div className="w-3/12 flex justify-end">
        <Dropdownlang />
      </div>
    </header>
  );
};

export default Navbar;
