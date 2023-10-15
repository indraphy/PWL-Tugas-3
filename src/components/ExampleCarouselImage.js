import React from "react";

const ExampleCarouselImage = ({ backgroundColor, text }) => {
  const style = {
    backgroundColor: backgroundColor || "darkblue", // Warna latar belakang default adalah lightblue
    height: "300px", // Sesuaikan tinggi sesuai kebutuhan Anda
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white", // Warna teks
  };

  return (
    <div style={style}>
      <h3>{text}</h3>
    </div>
  );
};

export default ExampleCarouselImage;
