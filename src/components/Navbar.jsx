import React, { useState } from "react";
import Dropdownlang from "./Dropdownlang";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [activeLanguage, setActiveLanguage] = useState("indonesia");
  const handleLanguageButtonClick = (language) => {
    setActiveLanguage(language);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Tentang Kami</a>
            </li>
            <li>
              <a>Layanan</a>
            </li>
            <li>
              <a>Klien</a>
            </li>
            <li>
              <a>Sertifikasi</a>
            </li>
            <li>
              <a>Kontak</a>
            </li>
          </ul>
        </div>
        <img
          src="./src/assets/logo_ghalaya.png"
          className="xl:w-40 lg:w-40 md:w-20 sm:w-20 xs:w-2"
          alt="Ghalaya Logo"
        ></img>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-5">
          <li>
            <a>Tentang Kami</a>
          </li>
          <li>
            <a>Layanan</a>
          </li>
          <li>
            <a>Klien</a>
          </li>
          <li>
            <a>Sertifikasi</a>
          </li>
          <li>
            <a>Kontak</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex-none">
          <div title="Change Language" class="dropdown dropdown-end">
            <div
              tabindex="0"
              class="btn btn-ghost normal-case"
              data-svelte-h="svelte-16sc62l"
            >
              <svg
                class="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
                <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path>
              </svg>{" "}
              <svg
                width="12px"
                height="12px"
                class="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>{" "}
            <div class="dropdown-content bg-base-100 text-base-content rounded-box top-px mt-16 w-56 overflow-y-auto shadow">
              <ul class="menu menu-sm gap-1" tabindex="0">
                <li>
                  <button
                    className={activeLanguage === "english" ? "active" : ""}
                    onClick={() => handleLanguageButtonClick("english")}
                  >
                    <img
                      class="drop-shadow"
                      loading="lazy"
                      width="20"
                      height="20"
                      alt="English"
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg"
                    ></img>{" "}
                    English{" "}
                  </button>{" "}
                </li>
                <li>
                <button
                  className={activeLanguage === "indonesia" ? "active" : ""}
                  onClick={() => handleLanguageButtonClick("indonesia")}
                >
                    <img
                      class="drop-shadow"
                      loading="lazy"
                      width="20"
                      height="20"
                      alt="Indonesia"
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ee-1f1e9.svg"
                    ></img>{" "}
                    Indonesia{" "}
                  </button>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
