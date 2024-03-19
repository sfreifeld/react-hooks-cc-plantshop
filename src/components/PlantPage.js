import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage({plantArray, setPlantArray}) {

  // makes a delete call and then sets the plantArray to a new array without that plant
  function deletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setPlantArray(plantArray.filter((plant) => plant.id !== id))
    })
  }

  // makes a patch call to the db to update price and then changes it in plantArray
  function updatePlantPrice(id, newPrice) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ price: newPrice }),
    })
    .then(response => response.json())
    .then(updatedPlant => {
      setPlantArray(plantArray.map(plant => plant.id === id ? updatedPlant : plant))
    })
  }

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
        <PlantList filteredPlants ={filteredPlants} updatePlantPrice={updatePlantPrice} deletePlant={deletePlant}  />
      </main>
    );
  }

  export default PlantPage;
