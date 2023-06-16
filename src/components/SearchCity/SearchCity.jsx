import React, { useState } from 'react';
import './SearchCity.css';

function SearchCity() {
  const [city, setCity] = useState('');

  return (
    <div className="wt-search-container">
      <input
        type="text"
        name="wt-search-city"
        id="wt-search-city"
        placeholder="Busca otra ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="wt-search-button" type="submit" onClick={() => console.log(city)}>
        <img
          className="wt-search-icon"
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1686580940/App%20Tiempo/icons/buscar_vyhbas.png"
          alt="lupa"
        />
      </button>
    </div>
  );
}

export default SearchCity;
