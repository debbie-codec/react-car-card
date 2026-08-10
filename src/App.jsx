import React from "react";
import CarModal from "./CarModal";
import "./App.css";
import CarCard from "./CarCard";
import { useState } from "react";
import SearchInput from "./SearchInput";
import cars from "./cars.json";





const App = () => {
  // selectedCar stores the car that the user clicks
  // Initially, no car is selected, so we use null
  const [selectedCar, setSelectedCar] = useState(null);

  // searchTerm stores whatever the user types into the search input
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars);

  // This function receives the car that was clicked
  // and saves it inside selectedCar
  const handleCardClick = (car) => {
    setSelectedCar(car);
  };

  // This function closes the modal
  // by changing selectedCar back to null
  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto",  display: 'flex', flexDirection: 'column' }}>

     

      {/* Display cars */}
      <div>
 {/* Search input */}
      <div>
        <SearchInput
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>


        {filteredCars

          // Filter cars based on what the user searches
          .filter((car) =>
            car.title
              .toLowerCase().trim()
              .includes(searchTerm.toLowerCase().trim())
          )

          // Create a CarCard for every matching car
          .map((car) => (
            <CarCard
              key={car.id}

              // Passing the car information as props
              title={car.title}
              description={car.description}
              image={car.image}

              // IMPORTANT:
              // We use an arrow function here.
              // This prevents handleCardClick from running immediately.
              // It will run only when the CarCard is clicked.
              onCardClick={() => handleCardClick(car)}
            />
          ))}

          
      </div>

      {/* 
        Only show the modal when selectedCar is NOT null.
        
        If selectedCar is null:
        → modal does not appear
        
        If selectedCar contains a car:
        → modal appears
      */}
      {selectedCar && (
        <CarModal
          car={selectedCar}
          onClose={handleCloseModal}
        />
      )}

    </div>
  );
};

export default App;