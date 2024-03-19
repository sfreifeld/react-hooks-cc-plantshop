import React from "react";
import PlantCard from "./PlantCard";

function PlantList({filteredPlants, updatePlantPrice, deletePlant}) {
  // returns a plant card for every plant, filtered by search
  const plantArrayElement = filteredPlants.map((plant)=> {
    return (
      <PlantCard key={plant.id} plantItem={plant} updatePlantPrice={updatePlantPrice} deletePlant={deletePlant}/>
    )
  })
  return (
    <ul className="cards"> 
      {plantArrayElement}
    </ul>
  );
}

export default PlantList;
