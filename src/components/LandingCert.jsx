import React from "react";
import { useTranslation } from "react-i18next";

const LandingCert = () => {
  const [t, i18n] = useTranslation("global")
    const handleLanguageButtonClick = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="pb-8 pt-10 px-8 bg-neutral text-info" id="cert">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-1 md:col-span-2 md:ps-8 text-center md:text-left">
          <h1 className="text-3xl font-bold py-4">{t("Sertifikasi.header")}</h1>
          <div className="text-justify md:text-xl">
            <p className="text-base relative z-20 text-gray-500">{t("Sertifikasi.desc")}</p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 px-5 text-xl text-center">
              <img
                className="mx-auto"
                src="iso/iso9001-2015.png"
                alt="ISO 9001:2015"
              ></img>
              <p className="font-bold mt-2">ISO 9001:2015</p>
              <p>ID81685A</p>
            </div>
            <div className="col-span-1 px-5 text-xl text-center">
              <img
                className="mx-auto"
                src="iso/iso14001-2015.png"
                alt="ISO 14001:2015"
              ></img>
              <p className="font-bold mt-2">ISO 14001:2015</p>
              <p>ID81685B</p>
            </div>
            <div className="col-span-1 px-5 text-xl text-center md:col-start-1 md:col-end-3 md:text-left">
              <div className="flex flex-col items-center">
                <img
                  className="mx-auto pb-2"
                  src="iso/iso45001-2018.png"
                  alt="ISO 45001:2018"
                ></img>
                <p className="font-bold">ISO 45001:2018</p>
                <p>ID87828C-1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCert;
