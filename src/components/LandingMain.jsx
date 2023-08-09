import React from "react";

const LandingMain = () => {
  return (
    <div className="grid grid-cols-2 gap-4 py-8">
      <div className="ps-8">
        <div>
          <h1 className="font-bold text-4xl py-6">
            Solusi Logistik <br />
            Terpercaya
          </h1>
        </div>
        <div className="border-l-8 border-blue-950 text-xl px-5">
          <p>
            <span className="font-bold"> PT ABCDEFGH</span> adalah perusahaan swasta yang bergerak di
            bidang pelayaran sumber daya hidup dan telah dipercayai oleh
            berbagai perusahaan konsumsi <span className="font-bold">sejak 6 tahun SM</span>.
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
      <div className=" inset-0 flex w-full h-full">
        <div className="h-9/12 w-96">
          <img
            className="inset-0 w-full h-full object-cover object-center"
            // Nanti ganti pakai gambar yang sesuai //
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Square-white.svg/2048px-Square-white.svg.png"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingMain;
