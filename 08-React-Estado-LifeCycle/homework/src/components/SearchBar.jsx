import React, { useState } from "react";
import './SBStyles.css'
export default function SearchBar({onSearch}) {
  const [city,setCity] = useState("")
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city)
      setCity("")
    }}>
      <input
        className="buscador"
        type="text"
        value={city}
        placeholder="Ciudad..."
        onChange={e =>setCity(e.target.value)}
      />
      <input type="submit" className="boton" onSearch={onSearch} value="AGREGAR"/>
    </form>
  );
}
