import React from "react";

const LandingPhoto = () => {
  return (
    <div className="pb-8 px-8">
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <img src="./src/assets/kapal1.jpeg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="./src/assets/kapal1.jpeg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="./src/assets/kapal1.jpeg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="./src/assets/armada/kapal2.jpeg" alt="Burger" />
        </div>
        <div className="carousel-item">
          <img src="./src/assets/armada/kapal3.jpeg" alt="Burger" />
        </div>
      </div>
    </div>
  );
};

export default LandingPhoto;
