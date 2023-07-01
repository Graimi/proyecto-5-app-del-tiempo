/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import './SearchCity.css';

// Creamos la siguiente función para obtener posteriormente el valor de las ciudades buscadas al escribir
async function fetchCityOptions(searchValue, apiKey) {
  // Es importante establecer el límite en 5 para que aparezcan varias
  const directCityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${apiKey}`;
  const response = await fetch(directCityUrl);
  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

// Creamos la función principal de búsqueda de ciudades
function SearchCity({ onCityChange }) {
  // Creamos los diferentes estados donde almacenaremos la información
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

  const apiKey = 'cb658f072db01ec164fb8a14cc6d9da9';

  // Creamos la función para cuando buscamos una ciudad
  const handleChange = async (event) => {
    const { value } = event.target;
    setSearchValue(value);
    // Invocamos a la función fetch anterior
    const cityOptions = await fetchCityOptions(value, apiKey);
    setOptions(cityOptions);
    setSelectedOption(null);
  };

  // Creamos la función cuando seleccionamos una función
  const handleOptionClick = (option) => {
    // Hacemos un parse del valor para convertirlo en un array que posteriormente se exportará
    const optionValue = JSON.parse(option);
    onCityChange(optionValue);
    setSearchValue('');
    setSelectedOption(option);
    setOptions([]);
  };

  // Creamos el template de la barra de búsqueda
  return (
    <div className="wt-search-container">
      {/* En este input se podrá buscar la ciudad que queremos buscar */}
      <input
        id="wt-search-city"
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Busca otra ciudad"
      />
      {/* Hacemos una comprobación y desarrollamos el select de ciudades */}
      {options.length > 0 && (
        <select
          id="wt-search-list"
          value={selectedOption ? selectedOption.name : ''}
          onChange={(event) => handleOptionClick(event.target.value)}
        >
          <option value="">Selecciona una ciudad</option>
          {/* Hacemos un map de los diferentes resultados */}
          {options.map((option) => (
            // Utilizamos el JSON.stringify para poder exportar correctamente los datos
            <option key={option.lat} value={JSON.stringify({ lat: option.lat, lon: option.lon })}>
              {option.name}, {option.state} {option.country}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default SearchCity;
