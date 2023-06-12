import React from 'react';
import './SearchCity.css';

function SearchCity() {
  return (
    <div className="wt-search-container">
      <img
        className="wt-search-icon"
        src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1686580940/App%20Tiempo/icons/buscar_vyhbas.png"
        alt="lupa"
      />
      {/* <p>Busca otra ciudad</p> */}
      <input
        type="text"
        name="wt-search-city"
        id="wt-search-city"
        placeholder="Busca otra ciudad"
      />
      {/* <h3>Busca otra ciudad</h3> */}
    </div>
  );
}

export default SearchCity;
