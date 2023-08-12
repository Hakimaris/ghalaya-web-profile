import React from "react";

const LandingVisionMission = () => {
  return (
    <div className="pt-8">
      <div className="md:hidden px-5">
      <h1 className="text-3xl font-bold text-center pb-3 custom-header">Tentang Kami</h1>
        <div className="grid md:grid-cols-2 px-2">
          <div className="border-b border-blue-950 pb-2">
            <h1 className="font-bold text-xl text-center"> Visi </h1>
            <p className="py-1 text-justify">
              Menjadikan PT. GHALAYA ABADI PERSADA LINE sebagai perusahaan
              Pelayaran dan Angkutan Laut yang terbaik dan terpercaya.
            </p>
          </div>
          <div className="pt-2 border-b border-blue-950 pb-2">
            <h1 className="font-bold text-xl text-center"> Misi </h1>
            <p className="py-1 text-justify">
              Selalu memberikan solusi di bidang Pelayaran dan Angkatan Laut
              yang bermutu dan berkualitas tinggi secara efektif dan efisien
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="grid grid-cols-7">
          <div className="col-span-4 ...">
            <div className="grid grid-cols-2 ps-8">
              <div className="text-center">
                <h1 className="font-bold text-2xl"> Visi </h1>
                <p className="py-1">
                  Menjadikan PT. GHALAYA ABADI PERSADA LINE sebagai perusahaan
                  Pelayaran dan Angkutan Laut yang terbaik dan terpercaya.
                </p>
              </div>
              <div className="text-center">
                <h1 className="font-bold text-2xl"> Misi </h1>
                <p className="py-1">
                  Selalu memberikan solusi di bidang Pelayaran dan Angkatan Laut
                  yang bermutu dan berkualitas tinggi secara efektif dan efisien
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 text-center object-center ...">
            <h1 className="text-4xl font-bold">Tentang Kami</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingVisionMission;
