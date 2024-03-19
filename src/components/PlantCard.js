import React from "react";
import { useState } from "react";

function PlantCard({plantItem, updatePlantPrice, deletePlant}) {
  
  // state to store if plant is in stock or not
  const [inStock, setInStock] = useState(true)

  // function to toggle inStock state
  function toggleStockStatus() {
    setInStock(!inStock)
  }
  // state to store plant new price
  const [newPrice, setNewPrice] = useState(plantItem.price)

  // function to update plant's price
  const handlePriceSubmit = (event) => {
    event.preventDefault()
    updatePlantPrice(plantItem.id, newPrice)
  }


  return (
    <li className="card" data-testid="plant-item">
      <button className="delete" onClick={() => deletePlant(plantItem.id)}>Delete</button>
      <img src={plantItem.image} alt={plantItem.name} />
      <h4>{plantItem.name}</h4>
      <p>Price: {plantItem.price}</p>
      <form onSubmit={handlePriceSubmit}>
        <input
          type="number"
          value={newPrice}
          placeholder="new plant price"
          onChange={(e) => setNewPrice(e.target.value)}
        />
        <button type="submit">Update Price</button>
      </form>
      {inStock ? (
        <button className="primary" onClick={toggleStockStatus}>In Stock</button>
      ) : (
        <button onClick={toggleStockStatus}>Out of Stock</button>
      )}
    </li>
  )
}

export default PlantCard;
