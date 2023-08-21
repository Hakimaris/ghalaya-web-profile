import React from "react";

const LandingClient = () => {
  return (
    <div className="bg-white text-info">
      <div className="pt-2 ">
        <div className="flex flex-wrap justify-center items-center gap-7 py-9">
          <img src="src\assets\PLN.png" alt="PLN" />
          <img src="src\assets\PLNnusantarapower.png" alt="PLN nusantara" />

          <img
            src="src\assets\PLNpersero.png"
            className="h-28 w-20 light:hidden dark:display"
            alt="PLN Persero"
          />
          <img
            className="h-20"
            src="src/assets/klien/pertamina-light.png"
            alt="Pertamina"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingClient;
