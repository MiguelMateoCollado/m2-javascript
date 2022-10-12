import React from 'react';

export default function Card(props) {
  // acá va tu código
  return <div>
    <h2> {props.name}</h2>
    <h3>Temperatura max {props.max}</h3>
    <h3>Temperatura min {props.min}</h3>
    <img src={'http://openweathermap.org/img/wn/' + props.img + '@2x.png'} alt=""/>
    <button onClose={props.onClose}>X</button>
  </div>
};