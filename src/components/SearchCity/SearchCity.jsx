import React, { useState } from 'react';
import './SearchCity.css';

// Con la siguiente función creamos la barra de búsqueda de la ciudad que quiera buscar el usuario
function SearchCity({ onCityChange }) {
  const [city, setCity] = useState('');

  // Con esta función lanzamos el valor de city a la función onCityChange en App
  const handleSearch = (cityName) => {
    onCityChange(cityName);
  };

  // Creamos el template para la barra
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
      <button className="wt-search-button" type="submit" onClick={() => handleSearch(city)}>
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
