import React from "react";
import Card from "./Card";
export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div>
      {
      props.cities.map(ciudades => (
        <Card
          name={ciudades.name}
          max={ciudades.main.temp_max}
          min={ciudades.main.temp_min}
          img={ciudades.weather[0].icon}
          onClose={ciudades.onClose}
        />
      ))
      }

    </div>
  );
}



