import React, { useState } from "react";

const Imageslider = () => {
  const Imageslides = [
    { URL: "../Data/img.home/poster01.webp" },
    { URL: "../Data/img.home/poster02.webp" },
    { URL: "../Data/img.home/poster03.webp" },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % Imageslides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + Imageslides.length) % Imageslides.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "500px",
        height: "300px",
        margin: "auto",
      }}
    >
      <img
        src={Imageslides[current].URL}
        alt={`slide-${current}`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          cursor: "pointer",
        }}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Imageslider;
