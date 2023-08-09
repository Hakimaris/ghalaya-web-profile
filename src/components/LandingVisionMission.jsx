import React from "react";

const LandingVisionMission = () => {
  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 ...">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg px-4">
            <table class="w-full text-sm text-left">
              <thead class="text-2xl text-center">
                <tr>
                  <th scope="col" class="px-6 py-3 ">
                    Visi
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Misi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="">
                  <th
                    scope="row"
                    class="px-6 py-4 font-xl text-gray-900 whitespace-nowrap text-center"
                  >
                    Ya ya ya
                  </th>
                  <th class="px-6 py-4 font-xl text-gray-900 whitespace-nowrap text-center">
                    lalala
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="... p-4">
          <h1 class="text-4xl font-bold text-center object-center">
            Tentang Kami
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingVisionMission;
