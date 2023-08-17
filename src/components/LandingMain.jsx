import React from "react";
import { useTranslation } from "react-i18next";

const LandingMain = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div>
      <div className="md:flex md:flex-row-reverse lg:hidden px-5">
        <div className="w-full md:w-96">
          <img
            className="w-full h-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Square-white.svg/2048px-Square-white.svg.png"
            alt="Image"
          />
        </div>
        <div className="md:flex-grow md:px-8">
          <h1 className="font-bold text-center text-2xl py-6">
            {t("landingMain.headerMobile")}
          </h1>
          <div className="border-l-8 text-justify border-blue-950 px-5">
            <p>
              <span className="font-bold"> PT. Ghalaya Abadipersada Line</span>{" "}
              adalah perusahaan swasta yang bergerak di bidang jasa jngkutan
              laut di Surabaya dan telah dipercayai oleh berbagai perusahaan
              ternama <span className="font-bold">sejak tahun 1992</span>
            </p>
          </div>
          <div className="pt-8 pb-2 text-center">
            <p className="">Tertarik dengan layanan kami?</p>
          </div>
          <div className="text-center">
            <button className="bg-blue-950 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block px-14">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 ps-8">
            <h1 className="font-bold text-5xl py-6">
              Solusi Logistik <br />
              Terpercaya
            </h1>
            <div className="border-l-8 border-blue-950 text-2xl px-5">
              <p>
                <span className="font-bold">
                  {" "}
                  PT. Ghalaya Abadipersada Line
                </span>{" "}
                adalah perusahaan swasta yang bergerak di bidang jasa angkutan
                laut di Surabaya dan telah dipercayai oleh berbagai perusahaan
                ternama <span className="font-bold">sejak tahun 1992</span>
              </p>
            </div>
            <div className="pt-8 pb-2">
              <p className="text-xl">Tertarik dengan layanan kami?</p>
            </div>
            <div className="">
              <button className="bg-blue-950 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-full">
                Hubungi Kami
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <div className="h-9/12 w-96">
              <div className="">
                <div className="carousel w-full">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMain;
