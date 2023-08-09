import React from "react";

const LandingVisionMission = () => {
  return (
    <div className="py-8">
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
  );
};

export default LandingVisionMission;
