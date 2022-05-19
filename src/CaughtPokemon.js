import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const catchPokemon = () => {
    pokemonNameInput && setCaught(caught.concat(pokemonNameInput));
    setPokemonNameInput("");
  };

  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokémon on {props.date}
      </p>
      <input
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button onClick={catchPokemon}>Caught a Pokémon</button>
      {
        <ul>
          {caught.map((pokemon, index) => {
            return <li key={index}>{pokemon}</li>;
          })}
        </ul>
      }
    </div>
  );
};
export default CaughtPokemon;
