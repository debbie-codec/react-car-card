import React from "react";
import CarModal from "./CarModal";
import "./App.css";
import CarCard from "./CarCard";
import { useState } from "react";
import SearchInput from "./SearchInput";
import cars from "./cars.json";
import { FaSearch } from "react-icons/fa";

const App = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCardClick = (car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  // Filter cars based on search
  const filteredCars = cars.filter((car) =>
    car.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
  );

  const containerStyle = {
    padding: "40px 20px",
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  };

  const headerStyle = {
    marginBottom: "10px",
  };

  const titleStyle = {
    fontSize: "36px",
    fontWeight: "700",
    color: "#111",
    margin: "0 0 8px 0",
  };

  const subtitleStyle = {
    fontSize: "16px",
    color: "#666",
    margin: 0,
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "28px",
    width: "100%",
  };

  const emptyStateStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 20px",
    textAlign: "center",
    minHeight: "500px",
  };

  const emptyIconStyle = {
    fontSize: "72px",
    marginBottom: "20px",
    opacity: "0.6",
    animation: "float 3s ease-in-out infinite",
  };

  const emptyTitleStyle = {
    fontSize: "26px",
    fontWeight: "600",
    color: "#333",
    margin: "0 0 12px 0",
  };

  const emptyTextStyle = {
    fontSize: "16px",
    color: "#999",
    margin: 0,
    maxWidth: "400px",
  };

  const statsStyle = {
    fontSize: "14px",
    color: "#bbb",
    marginTop: "24px",
    fontStyle: "italic",
  };

  const resultCountStyle = {
    fontSize: "13px",
    color: "#999",
    marginBottom: "20px",
  };

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Car Showcase</h1>
        <p style={subtitleStyle}>Explore our premium vehicle collection</p>
      </div>

      {/* Search Input */}
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Cars Grid or Empty State */}
      {filteredCars.length > 0 ? (
        <>
          <div style={resultCountStyle}>
            Showing <strong>{filteredCars.length}</strong> of <strong>{cars.length}</strong> cars
          </div>
          <div style={gridStyle}>
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                title={car.title}
                description={car.description}
                image={car.image}
                onCardClick={() => handleCardClick(car)}
              />
            ))}
          </div>
        </>
      ) : (
        <div style={emptyStateStyle}>
          <div style={emptyIconStyle}></div>
          <h2 style={emptyTitleStyle}>No cars found</h2>
          <p style={emptyTextStyle}>
           < FaSearch /> We couldn't find any cars matching <strong>"{searchTerm}"</strong>. Try searching for a different model or brand.
          </p>
          <p style={statsStyle}>
             Total cars available: {cars.length}
          </p>
        </div>
      )}

      {/* Modal */}
      {selectedCar && (
        <CarModal car={selectedCar} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;