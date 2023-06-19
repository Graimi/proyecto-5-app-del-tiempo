import React, { useState } from 'react';
import './SearchCity.css';

// Con la siguiente función creamos la barra de búsqueda de la ciudad que quiera buscar el usuario
function SearchCity({ onCityChange }) {
  const [city, setCity] = useState('');

  // Con esta función tendremos que lanzar el valor de city, ver como hacer
  const handleSearch = (cityName) => {
    console.log('Ciudad buscada:', cityName);
    onCityChange(city);
    // return <Api weather="current" city={city} />;
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
