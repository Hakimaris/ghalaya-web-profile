import React from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const LandingFooter = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <footer className="bg-info text-white py-4 text-center">
      <ul className="flex justify-center items-center">
        <li className="pb-4 space-x-5">
          <a href="#" className="font-semibold">
            {t("navbar.tentangKami")}
          </a>
          <a href="#" className="font-semibold">
            {t("navbar.klien")}
          </a>
          <a href="#" className="font-semibold">
            {t("navbar.sertifikasi")}
          </a>
          <a href="#" className="font-semibold">
            {t("navbar.kontak")}
          </a>
        </li>
      </ul>
      <p>
        &copy; {new Date().getFullYear()} PT. Ghalaya Abdi Persada Line. All
        rights reserved.
      </p>
    </footer>
  );
};

export default LandingFooter;
