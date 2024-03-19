import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  //fetches plant data from server and stores it in plantArray
  const [plantArray, setPlantArray] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlantArray(data)
        
      })
  }, [])


  return (
    <div className="app">
      <Header />
      <PlantPage plantArray={plantArray} setPlantArray={setPlantArray} />
    </div>
  );
}

export default App;
