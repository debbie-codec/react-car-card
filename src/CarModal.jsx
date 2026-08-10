// import React from 'react'


// const CarModal = ({ car, onClose }) => {
//   return (
//     <div>
// <div>
//     <h2>{car.title}</h2>
//     <p>{car.description}</p>
//     <img src={car.image} alt={car.title} />
//     <p>{car.year} • {car.mileage} miles</p>
//     <p>${car.price.toLocaleString()}</p>
//     <button onClick={onClose}>Close</button>

// </div>


//     </div>
//   )
// }

// export default CarModal


import React from "react";

const CarModal = ({ car, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
        zIndex: 1000,
      }}
    >
      {/* Modal box */}
      <div
        style={{
          position: "relative",
          width: "600px",
          maxWidth: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "25px",
          boxSizing: "border-box",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            width: "40px",
            height: "40px",
            border: "none",
            borderRadius: "50%",
            backgroundColor: "#111",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          X
        </button>

        {/* Car image */}
        <img
          src={car.image}
          alt={car.title}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        />

        {/* Car title */}
        <h2
          style={{
            fontSize: "30px",
            margin: "0 0 10px",
            color: "#111",
          }}
        >
          {car.title}
        </h2>

        {/* Description */}
        <p
          style={{
            color: "#666",
            fontSize: "16px",
            lineHeight: "1.6",
          }}
        >
          {car.description}
        </p>

        {/* Car information */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <p>
            <strong>Year:</strong> {car.year}
          </p>

          <p>
            <strong>Price:</strong> ${car.price?.toLocaleString()}
          </p>

          <p>
            <strong>Fuel:</strong> {car.fuel}
          </p>

          <p>
            <strong>Transmission:</strong> {car.transmission}
          </p>

          <p>
            <strong>Mileage:</strong> {car.mileage}
          </p>

          <p>
            <strong>Engine:</strong> {car.engine}
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "20px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#111",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CarModal;