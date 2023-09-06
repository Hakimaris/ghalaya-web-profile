import React from "react";

const LandingClient = () => {
  return (
    <section class="bg-neutral" id="klien">
      <div class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-4">
          <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src="klien\PLN.png" alt="PLN" />
          </div>
          <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img src="klien\PLNnusantarapower.png" alt="PLN nusantara" />
          </div>
          <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img
              src="klien\PLNpersero.png"
              className="h-28 w-20 light:hidden dark:display"
              alt="PLN Persero"
            />
          </div>
          <div class="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img
              className="h-20"
              src="klien/pertamina-light.png"
              alt="Pertamina"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingClient;
