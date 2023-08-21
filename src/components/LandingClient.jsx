import React from "react";

const LandingClient = () => {
  return (
    <div className="bg-neutral text-info dark:bg-info dark:text-white">
      <div className="pt-2 ">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Telah dipercayai oleh</h1>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-7 py-9">
          <img src="src\assets\PLN.png" alt="PLN" />
          <img src="src\assets\PLNnusantarapower.png" alt="PLN nusantara" />

          <img
            src="src\assets\PLNpersero.png"
            className="h-28 w-20 light:hidden dark:display"
            alt="PLN Persero"
          />
          <img
            className="h-24 light:display dark:hidden"
            src="src/assets/klien/pertamina-light.png"
            alt="Pertamina"
          />
          <img
            className="h-24 light:hidden dark:display"
            src="src/assets/klien/pertamina-dark.png"
            alt="Pertamina"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingClient;
