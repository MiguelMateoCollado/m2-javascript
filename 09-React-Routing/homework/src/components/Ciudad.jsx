import React from "react";
import { useParams } from "react-router-dom";

export default function Ciudad({ cities }) {
  let params = useParams()
  if(!cities.length) return <h1>No hay ciudades</h1>

  let [city] = cities.filter(city => city.id === parseInt(params.ciudadId))

  return (
    <div className="ciudad">
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
}
