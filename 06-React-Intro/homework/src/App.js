import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import data, { Londres } from './data.js';

function App() {
  return (
    <div className="App">
      <div>
        <Card
          max={Londres.main.temp_max}
          min={Londres.main.temp_min}
          name={Londres.name}
          img={Londres.weather[0].icon}
          onClose={() => alert(Londres.name)}
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
