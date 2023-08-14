import React from "react";

const LandingMain = () => {
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
            Solusi Angkutan Laut Terpercaya
          </h1>
          <div className="border-l-8 text-justify border-blue-950 px-5">
            <p>
              <span className="font-bold"> PT. Ghalaya Abadipersada Line</span>{" "}
              adalah perusahaan swasta yang bergerak di bidang pelayaran sumber
              daya tambang dan telah dipercayai oleh berbagai perusahaan ternama{" "}
              <span className="font-bold">sejak tahun 1992</span>.
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
                adalah perusahaan swasta yang bergerak di bidang pelayaran
                sumber daya tambang dan telah dipercayai oleh berbagai
                perusahaan ternama <span className="font-bold">sejak tahun 1992</span>
                .
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
              <img
                className="w-full h-full object-cover object-center"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Square-white.svg/2048px-Square-white.svg.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingMain;
