import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const LandingContact1 = () => {
  return (
    <div className="py-9 px-4 md:px-14">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2">
          <h1 className="font-bold text-3xl md:text-4xl py-2 text-center md:text-right">
            Hubungi Kami
          </h1>
          <div className="border-blue-950 md:border-r-8 md:border-l-0 sm:border-l-8 md:text-xl px-5">
            <p className="md:text-right">
              Jika Anda memiliki
              <span className="font-bold"> pertanyaan, kritik, masukan</span>
              atau{" "}
              <span className="font-bold">tertarik dengan layanan kami</span>,
              jangan ragu untuk menghubungi kami.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <ul>
            <li className="pb-4 space-x-5 px-6 flex items-center">
              <FaWhatsapp className="h-8 w-8" />
              <a href="#" className="font-semibold ml-2">
                Contact Me
              </a>
            </li>
            <li className="pb-4 space-x-5 px-6 flex items-center">
              <FiMail className="h-8 w-8" />
              <a href="#" className="font-semibold ml-2">
                Ghalaya@mail
              </a>
            </li>
            <li className="pb-4 space-x-5 px-6 flex items-center">
              <GoLocation className="h-8 w-8" />
              <a href="#" className="font-semibold ml-2">
                Jl. Teluk Kumai Barat No. 68-70 Perak Utara Surabaya, Jawa Timur
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingContact1;
