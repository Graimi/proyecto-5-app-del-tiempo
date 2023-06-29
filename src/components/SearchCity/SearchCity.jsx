/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// import React, { useState } from 'react';
// import './SearchCity.css';

// async function fetchCityOptions(searchValue, apiKey) {
//   const directCityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${apiKey}`;
//   const response = await fetch(directCityUrl);
//   const data = await response.json();
//   return Array.isArray(data) ? data : [];
// }

// function SearchCity({ onCityChange }) {
//   const [searchValue, setSearchValue] = useState('');
//   const [options, setOptions] = useState([]);

//   const apiKey = 'cb658f072db01ec164fb8a14cc6d9da9';

//   const handleChange = async (event) => {
//     const { value } = event.target;
//     setSearchValue(value);

//     const cityOptions = await fetchCityOptions(value, apiKey);
//     setOptions(cityOptions);
//   };

//   const handleOptionClick = (option) => {
//     onCityChange(option);
//     setSearchValue('');
//     setOptions([]);
//   };

//   return (
//     <div className="wt-search-container">
//       <input
//         id="wt-search-city"
//         type="text"
//         value={searchValue}
//         onChange={handleChange}
//         placeholder="Escribe una ciudad"
//       />

//       {options.length > 0 && (
//         <ul id="wt-search-list">
//           {options.map((option) => (
//             <li key={option.geonameid} onClick={() => handleOptionClick(option.name)}>
//               {option.name}, {option.state} {option.country}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default SearchCity;

import React, { useEffect, useState } from 'react';
import './SearchCity.css';

async function fetchCityOptions(searchValue, apiKey) {
  const directCityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${apiKey}`;
  const response = await fetch(directCityUrl);
  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

function SearchCity({ onCityChange }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);

  const apiKey = 'cb658f072db01ec164fb8a14cc6d9da9';

  const handleChange = async (event) => {
    const { value } = event.target;
    setSearchValue(value);

    const cityOptions = await fetchCityOptions(value, apiKey);
    setOptions(cityOptions);
    setSelectedOption(null);
  };

  const handleOptionClick = () => {
    onCityChange(searchValue);
    setSearchValue('');
    setSelectedOption(option);
    setOptions([]);
  };

  useEffect(() => {
    onCityChange(searchValue);
    // setSearchValue('');
    // setOptions([]);
  }, [searchValue]);

  return (
    <div className="wt-search-container">
      <input
        id="wt-search-city"
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Escribe una ciudad"
      />

      {options.length > 0 && (
        <select
          id="wt-search-list"
          value={selectedOption ? selectedOption.name : ''}
          onChange={(event) =>
            // handleOptionClick(options.find((option) => option.name === event.target.value))
            // handleOptionClick(event.target.value)
            setSearchValue(event.target.value)
          }
        >
          <option value="">Selecciona una opción</option>
          {options.map((option) => (
            <option key={option.lat} value={option.name}>
              {option.name}, {option.state} {option.country}
            </option>
          ))}
        </select>
      )}
      <h1>{searchValue}</h1>
    </div>
  );
}

export default SearchCity;
