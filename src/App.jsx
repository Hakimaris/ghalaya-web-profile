import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingMain from "./components/LandingMain";
import LandingVisionMission from "./components/LandingVisionMission";
import LandingService from "./components/LandingService";
import LandingFooter from "./components/LandingFooter";
import LandingClient from "./components/LandingClient";
import LandingContact1 from "./components/LandingContact1";
import LandingContact2 from "./components/LandingContact2";
import "./App.css";
import LandingCert from "./components/LandingCert";

function App() {
  return (
    <>
      <Navbar />
      <LandingMain />
      <LandingVisionMission />
      <LandingService />
      <LandingClient />
      <LandingContact1 />
      <LandingCert />
      <LandingContact2 />
      <h1 className="text-3xl font-bold">Hmmm</h1>
      <LandingFooter />
      
    </>
  );
}

export default App;
