import React from "react";
import {FaWhatsapp} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {GoLocation} from "react-icons/go";

const LandingFooter = () => {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <ul className="flex justify-center items-center">
        <li className="pb-4 space-x-5">
          <a href="#" className="font-semibold">Tentang Kami</a>
          <a href="#" className="font-semibold">Layanan</a>
          <a href="#" className="font-semibold">Sertifikasi</a>
          <a href="#" className="font-semibold">Kontak</a>
        </li>
      </ul>
      <ul className="flex justify-center items-center">
        <li className="pb-4 space-x-5 px-6">
          <a href="#" className="font-semibold"><FaWhatsapp className="-mr-1 h-8 w-8"/></a>
          </li>
        <li className="pb-4 space-x-5 px-6">
          <a href="#" className="font-semibold"><FiMail className="-mr-1 h-8 w-8"/></a>
          </li>
        <li className="pb-4 space-x-5 px-6">
          <a href="#" className="font-semibold"><GoLocation className="-mr-1 h-8 w-8"/></a> 
        </li>
      </ul>
      <p>&copy; {new Date().getFullYear()} PT. Ghalaya Abdi Persada Line. All rights reserved.</p>
    </footer>
  );
}


export default LandingFooter;