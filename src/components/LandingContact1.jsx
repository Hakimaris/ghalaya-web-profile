import React from "react";
import {FaWhatsapp} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {GoLocation} from "react-icons/go";

const LandingContact1 = () => {
  return (
    <div className="flex justify-center items-center py-9">
      <div className="grid grid-cols-2 gap-4 px-14">
        <div>
          <h1 className="font-bold text-4xl py-2 text-right">
            Hubungi Kami
          </h1>
          <div className="border-r-8 border-blue-950 text-2xl px-5">
            
            <p className="text-right">Jika Anda memiliki 
              <span className="font-bold"> pertanyaan, kritik, masukan</span>.atau <span className="font-bold">tertarik dengan layanan kami</span>, jangan ragu untuk menghubungi kami.
            </p> 
          </div>
        </div>
        <div className="flex flex-wrap">
          <ul className="">
        <li className="pb-4 space-x-5 px-6">
          <a href="#" className="font-semibold"><FaWhatsapp className="-mr-1 h-8 w-8"/> Contact Me</a>
          </li>
        <li className="pb-4 space-x-5 px-6">
          <a href="#" className="font-semibold"><FiMail className="-mr-1 h-8 w-8"/>Ghalaya@mail</a>
          </li>
        <li className="pb-4 space-x-5 px-6">
          <a href="#" className="font-semibold"><GoLocation className="-mr-1 h-8 w-8"/>Jl. Teluk Kumai Barat No. 68-70
Perak Utara
Surabaya, Jawa Timur</a> 
        </li>
      </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingContact1;
