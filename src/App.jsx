import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingMain from "./components/LandingMain";
import LandingVisionMission from "./components/LandingVisionMission";
import LandingService from "./components/LandingService";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <LandingMain />
      <LandingVisionMission />
      <LandingService />
      <h1 className="text-3xl font-bold">Hmmm</h1>
    </>
  );
}

export default App;
