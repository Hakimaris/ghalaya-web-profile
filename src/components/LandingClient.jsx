import React from "react";

const LandingClient = () => {
  return (
    <div className="m-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Telah dipercayai oleh</h1>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-7 py-9">
        <img src="src\assets\PLN.png" alt="PLN" />
        <img src="src\assets\PLNnusantarapower.png" alt="PLN nusantara" />
        <img src="src\assets\PJB.png" alt="PJB" />
        <img src="src\assets\Pertamina.png" alt="Pertamina" />
      </div>
    </div>
  )
}

export default LandingClient;