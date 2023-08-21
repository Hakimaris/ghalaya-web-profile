import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LandingMain from "./components/LandingMain";
import LandingVisionMission from "./components/LandingVisionMission";
import LandingService from "./components/LandingService";
import LandingFooter from "./components/LandingFooter";
import LandingClient from "./components/LandingClient";
import LandingCert from "./components/LandingCert";
import LandingForm from "./components/LandingForm";
import "./App.css";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <LandingMain />
      <LandingClient />
      <LandingVisionMission />
      <LandingService />
      <LandingCert />
      <LandingForm />
      <LandingFooter />
    </>
  );
}

export default App;
