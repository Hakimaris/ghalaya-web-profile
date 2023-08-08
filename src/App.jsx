import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <h1 className="text-3xl font-bold">Hmmm</h1>
    </>
  );
}

export default App;
