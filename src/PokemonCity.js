import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(event) {
    const {value} = event.target;
    setCity(value);
  }

  return (
    <div>
      <input type="text" value={city} placeholder="Some text" onChange={updateCity} />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
