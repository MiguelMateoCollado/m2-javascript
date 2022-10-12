import React from "react";
import styles from "./Card.module.css";
export default function Card(props) {
  // acá va tu código
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <button onClose={props.onClose} className={styles.boton}>
          X
        </button>
      </div>
      <div className={styles.items}>
      <h3 className={styles.ciudadNombre}> {props.name}</h3>
      </div>
      <div className={styles.items}>
        <div className={styles.temps}>
        <p>max</p>
        <p>{props.max}</p>
       
        </div>
        <div className={styles.temps}>
        <p>min</p>
        <p>{props.min}</p>
        </div>
      </div>
      <div className={styles.items}>
        <img
          src={"http://openweathermap.org/img/wn/" + props.img + "@2x.png"}
          alt=""
        />
      </div>
    </div>
  );
}
