import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
    setCaught(caught.concat("Picachu"));
  };

  return (
    <div>
      <p>
        Caught {caught.length} Pokémon on {props.date}
      </p>

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
