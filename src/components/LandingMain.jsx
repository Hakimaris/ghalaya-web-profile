import React from "react";
import { useTranslation } from "react-i18next";

const LandingMain = () => {
  const [t, i18n] = useTranslation("global");
  const handleLanguageButtonClick = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <section className="w-screen h-screen">
      <header className="">
        <div className="navbar text-info w-full h-20 border-b border-gray-300/50 z-20 bg-opacity-70 backdrop-blur-2xl relative lg:absolute">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 "
              >
                <li>
                  <a>{t("navbar.tentangKami")}</a>
                </li>
                <li>
                  <a href="#service">{t("navbar.layanan")}</a>
                </li>
                <li>
                  <a href="#klien">{t("navbar.klien")}</a>
                </li>
                <li>
                  <a href="#cert">{t("navbar.sertifikasi")}</a>
                </li>
                <li>
                  <a href="#kontak">{t("navbar.kontak")}</a>
                </li>
              </ul>
            </div>
            {/* <img
              src="./src/assets/logo/logo-darkmode.svg"
              className="light:hidden xl:w-40 lg:w-40 md:w-20 sm:w-20 xs:w-2"
              alt="Ghalaya Logo"
            ></img> */}
            <img
              src="logo/logo-lightmode.svg"
              className="xl:w-40 lg:w-40 md:w-20 sm:w-20 xs:w-2"
              alt="Ghalaya Logo"
            ></img>
          </div>
          <div className="navbar-center hidden font-bold lg:flex">
            <ul className="menu menu-horizontal px-5 ">
              <li>
                <a className="hover:text-base-200" href="#aboutus">{t("navbar.tentangKami")}</a>
              </li>
              <li>
                <a className="hover:text-base-200" href="#service">{t("navbar.layanan")}</a>
              </li>
              <li>
                <a className="hover:text-base-200" href="#klien">{t("navbar.klien")}</a>
              </li>
              <li>
                <a className="hover:text-base-200" href="#cert">{t("navbar.sertifikasi")}</a>
              </li>
              <li>
                <a className="hover:text-base-200" href="#kontak">{t("navbar.kontak")}</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex-none">
              <div title="Change Language" className="dropdown dropdown-end">
                <div
                  tabIndex="0"
                  className="btn btn-ghost normal-case"
                  data-svelte-h="svelte-16sc62l"
                >
                  <svg
                    className="h-5 w-5 fill-current"
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
                    className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                  >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                  </svg>
                </div>{" "}
                <div className="dropdown-content bg-base-100 text-base-content rounded-box top-px mt-16 w-56 overflow-y-auto shadow">
                  <ul className="menu menu-sm gap-1" tabIndex="0">
                    <li>
                      <button onClick={() => handleLanguageButtonClick("en")}>
                        <img
                          className="drop-shadow"
                          loading="lazy"
                          width="20"
                          height="20"
                          alt="English"
                          src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg"
                        ></img>{" "}
                        English
                      </button>{" "}
                    </li>
                    <li>
                      <button onClick={() => handleLanguageButtonClick("id")}>
                        <img
                          className="drop-shadow"
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
      </header>

      <main className="w-screen h-screen lg:overflow-hidden bg-neutral">
        <div className="w-full relative lg:h-screen lg:pt-0 pt-32 flex">
          <div className="lg:w-1/2 w-full h-full flex justify-end">
            <div className="h-full w-full flex flex-col justify-center items-start sm:items-center lg:items-start max-w-2xl mx-auto lg:mx-0 px-8 sm:pl-24 pr-10 space-y-8">
              <h1 className="relative z-20 w-full text-left sm:text-center lg:text-left">
                <span className="block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">
                    {" "}
                    {t("landingMain.header")}
                  </span>
                  <span className="block relative"></span>
                </span>
              </h1>
              <p className="text-base relative z-20 text-gray-500 sm:text-xl lg:text-lg xl:text-xl text-left sm:text-center lg:text-left">
                {t("landingMain.deskripsi1")}
              </p>
              <div className="z-20 relative sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left w-full">
                <button
                  submit="true"
                  className="rounded bg-info hover:bg-accent px-4 font-medium text-sm text-white sm:mt-0 mt-3 flex justify-center items-center flex-shrink-0 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 py-2.5"
                >
                  {t("landingMain.tertarik")}
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-screen lg:block hidden bg-[url('/src/assets/armada/kapal2.jpeg')] "></div>
        </div>
      </main>
    </section>
  );
};

export default LandingMain;
