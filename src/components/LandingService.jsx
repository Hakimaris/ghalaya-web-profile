import React from "react";

const LandingService = () => {
  return (
    <div className="py-8 px-8">
      <div className="grid gap-4">
        <div className="text-center">
          <div className="flex flex-col h-full justify-self-center items-center">
            <h1 className="text-3xl font-bold">Layanan Kami</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center justify-self-center gap-4">
          <div className="w-full sm:w-3/5 border border-blue-950 rounded-md p-6 text-center">
            <h1 className="text-xl font-bold pb-3">Placeholder-1</h1>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingService;
