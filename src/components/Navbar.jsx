import React from "react";
import Dropdownlang from "./Dropdownlang";
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className="bg-emerald-900 border-gray--200 mb-6">
      <div className="container flex mx-auto justify-between items-center px-6">
        <div>
          <a>a</a>
          <a href="#" className="text-white text-xl font-semibold">Ghalaya Abadi Persada Line</a>
        </div>

        <ul className="flex space-x-10 py-6 px-10">
          <li><a href="#" className="text-slate-400 hover:text-sky-400">Tentang Kami</a></li>
          <li><a href="#" className="text-slate-400 hover:text-sky-400">Layanan Kami</a></li>
          <li><a href="#" className="text-slate-400 hover:text-sky-400">Sertifikasi</a></li>
          <li><a href="#" className="text-slate-400 hover:text-sky-400">Kontak</a></li>
          <li><Dropdownlang /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
