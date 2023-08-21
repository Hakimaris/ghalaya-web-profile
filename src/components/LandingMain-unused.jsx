import React from "react";
import { useTranslation } from "react-i18next";

const LandingMainRe = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="">
      <div className="md:flex md:flex-row-reverse lg:hidden py-5 px-5 bg-neutral text-info dark:bg-info dark:text-white">
        <div className="w-full md:w-96">
          <img
            className="w-full h-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Square-white.svg/2048px-Square-white.svg.png"
            alt="Image"
          />
        </div>
        <div className="md:flex-grow md:px-8 ">
          <h1 className="font-bold text-center text-2xl py-6">
            {t("landingMain.headerMobile")}
          </h1>
          <div className="border-l-8 text-justify border-info dark:border-neutral px-5">
            <p>{t("landingMain.deskripsi1")}</p>
          </div>
          <div className="pt-8 pb-2 text-center">
            <p className="">{t("landingMain.tertarik")}</p>
          </div>
          <div className="text-center">
            <button className="hover:bg-warning bg-info text-white dark:text-info dark:bg-white font-bold py-2 px-4 rounded-full">
              {t("landingMain.btnHubungi")}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block px-14 bg-neutral text-info dark:bg-info dark:text-white">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 ps-8">
            <h1 className="font-bold text-5xl py-6">
              {t("landingMain.header")}
            </h1>
            <div className="border-l-8 border-info dark:border-neutral text-2xl px-5">
              <p>{t("landingMain.deskripsi1")}</p>
            </div>
            <div className="pt-8 pb-2">
              <p className="text-xl">{t("landingMain.tertarik")}</p>
            </div>
            <div className="pb-4">
              <button className="bg-info text-white dark:text-info dark:bg-white font-bold hover:bg-warning py-2 px-4 rounded-full">
                Hubungi Kami
              </button>
              
            </div>
          </div>
          <div className="col-span-2">
            <div className="h-9/12 w-96">
              <div className="">
                {/* <div className="carousel w-full">
                  <div id="slide1" className="carousel-item relative w-full">
                    <img
                      src="./src/assets/armada/kapal1.jpeg"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide4" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide2" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <img
                      src="./src/assets/armada/kapal2.jpeg"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide1" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide3" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                    <img
                      src="./src/assets/armada/kapal3.jpeg"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide2" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide4" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                    <img
                      src="./src/assets/armada/kapal1.jpeg"
                      className="w-full"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a href="#slide3" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide1" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMainRe;
