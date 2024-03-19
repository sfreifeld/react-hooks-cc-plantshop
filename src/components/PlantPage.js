import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage({plantArray, setPlantArray}) {

  // state to store search
  const [search, setSearch] = useState('')

  // function to add new plant to plant array
  function addPlant(newPlant) {
    setPlantArray([...plantArray, newPlant])

  }

  // new plant array filtered by search
  const filteredPlants = plantArray.filter((plant) => {
    return (
    plant.name.toLowerCase().includes(search.toLowerCase())
    )
  })


    return (
      <main>
        <NewPlantForm plantArray={plantArray} addPlant={addPlant}  />
        <Search setSearch={setSearch}/>
        <PlantList filteredPlants ={filteredPlants} />
      </main>
    );
  }

  export default PlantPage;
