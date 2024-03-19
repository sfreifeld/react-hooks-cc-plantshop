import React from "react";
import { useState } from "react";

function PlantCard({plantItem}) {
  
  // state to store if plant is in stock or not
  const [inStock, setInStock] = useState(true)

  // function to toggle inStock state
  function toggleStockStatus() {
    setInStock(!inStock)
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plantItem.image} alt={plantItem.name} />
      <h4>{plantItem.name}</h4>
      <p>Price: {plantItem.price}</p>
      {inStock ? (
        <button className="primary" onClick={toggleStockStatus}>In Stock</button>
      ) : (
        <button onClick={toggleStockStatus}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
