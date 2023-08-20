import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingMain from "./components/LandingMain";
import LandingVisionMission from "./components/LandingVisionMission";
import LandingService from "./components/LandingService";
import LandingFooter from "./components/LandingFooter";
import LandingClient from "./components/LandingClient";
import LandingContact1 from "./components/LandingContact1";
import LandingCert from "./components/LandingCert";
import LandingPhoto from "./components/LandingPhoto";
import LandingForm from "./components/LandingForm";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* <LandingPhoto /> */}
      <LandingMain />
      <LandingClient />
      <LandingVisionMission />
      <LandingService />
      <LandingCert />
      {/* <LandingContact1 /> */}
      <LandingForm />
      {/* <LandingContact2 /> */}
      {/* <h1 className="text-3xl font-bold">Hmmm</h1> */}
      <LandingFooter />
    </>
  );
}

export default App;
