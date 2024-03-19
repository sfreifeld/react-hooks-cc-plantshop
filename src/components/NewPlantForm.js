import React from "react";
import { useState } from "react";

function NewPlantForm({addPlant}) {

  // states to store form inputs
  const [plantName, setPlantName] = useState("")
  const [plantImg, setPlantImg] = useState("")
  const [plantPrice, setPlantPrice] = useState("")

  // functions to handle form inputs
  function handlePlantNameChange(event) {
    setPlantName(event.target.value)
  }

  function handlePlantImgChange(event) {
    setPlantImg(event.target.value)
  }

  function handlePlantPriceChange(event) {
    setPlantPrice(event.target.value)
  }

  // creates a new plant object and posts it to the db
  function handleSubmit(event) {
    event.preventDefault();
    const newPlant = { name: plantName, image: plantImg, price: plantPrice };

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlant),
    })
    .then(response => response.json())
    .then(data => {
      addPlant(data)
    })

    // Reset form fields
    setPlantName("");
    setPlantImg("");
    setPlantPrice("");
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handlePlantNameChange} value={plantName}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handlePlantImgChange} value={plantImg}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePlantPriceChange} value={plantPrice} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
