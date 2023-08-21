import React from "react";

const LandingService = () => {
  return (
    <div className="py-20 px-8 bg-neutral text-info dark:bg-info dark:text-white">
      <div className="grid gap-4">
        <div className="text-center">
          <div className="flex flex-col h-full justify-self-center items-center">
            <h1 className="text-3xl font-bold">Layanan Kami</h1>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          <div class="w-full sm:w-3/5 border border-info dark:border-white rounded-md p-6 text-center">
            <h1 class="text-xl font-bold pb-3">Placeholder-1</h1>
            <p class="sm:max-w-xs mx-auto">Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingService;
