import React from 'react';
import styles from "./Card.module.css";
export default function Card ({min, max, name, img, onClose}) {
    return (
      <div className={styles.container}>
      <div className={styles.items}>
        <button onClick={onClose} className={styles.boton}>
          X
        </button>
      </div>
      <div className={styles.items}>
      <h3 className={styles.ciudadNombre}>{name}</h3>
      </div>
      <div className={styles.items}>
        <div className={styles.temps}>
        <p>max</p>
        <p>{max}</p>
       
        </div>
        <div className={styles.temps}>
        <p>min</p>
        <p>{min}</p>
        </div>
      </div>
      <div className={styles.items}>
        <img
          src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
          alt=""
        />
      </div>
    </div>
    );
};
