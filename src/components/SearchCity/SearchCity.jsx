import React, { createContext, useState } from 'react';
import './SearchCity.css';

// export const UserContext = createContext();

function SearchCity() {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    // Aquí puedes realizar alguna acción con la ciudad ingresada, como actualizar el estado global de la aplicación, enviar una solicitud HTTP, etc.
    console.log('Ciudad buscada:', e);
  };

  return (
    // <UserContext.Provider value={city}>
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
    // {/* </UserContext.Provider> */}
  );
}

// function SearchCity({ newLocation }) {
//   const [city, setCity] = useState('');

//   const onSubmit = (e) => {
//     e.preventDefault();
//     console.log({ city });
//     if (city === '' || !city) return;

//     newLocation(city);
//   };

//   return (
//     <div className="container">
//       <form onSubmit={onSubmit}>
//         <div className="input-group mb-3 mx-auto">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Ciudad"
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <button className="btn btn-primary input-group-text" type="submit">
//             Buscar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

export default SearchCity;
