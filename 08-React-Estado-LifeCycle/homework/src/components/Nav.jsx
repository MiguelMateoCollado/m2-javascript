import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
function Nav({onSearch}) {
  return (
    <div className="navbar">
    <div className='navbar-item'> <img src={Logo} alt=""/> Henry Weather App </div>
    <div className='navbar-item'>
      <SearchBar onSearch={onSearch}/>
    </div>
    </div>
  );
};

export default Nav;
