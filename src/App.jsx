import React, { useState } from 'react';
import './App.css';
import Api from './services/Api';
import InvisibleCard from './components/InvisibleCard/InvisibleCard';
import SearchCity from './components/SearchCity/SearchCity';
import Toggle from './components/Toggle/Toggle';

function App() {
  // Almacenamos aquí el valor de city
  // Hay algunos dispositivos que directamente no permiten acceder a la ubicación (como mi móvil)
  // Por ello he puesto de base Madrid
  const [city, setCity] = useState('Madrid');

  // Usamos la siguiente función para obtener el valor de city desde SearchCity
  const handleCityChange = (cityName) => {
    setCity(cityName);
  };

  console.log('Ciudad:', city);

  // Creamos la template de App
  return (
    <div className="app">
      <h1>{city}</h1>
      <SearchCity onCityChange={handleCityChange} />
      <article className="wt-app-weather">
        <div className="wt-app-current">
          <InvisibleCard prop={<Api weather="current" city={city ? city : {}} />} />
        </div>
        <div className="wt-app-forecast">
          <InvisibleCard prop={<Api weather="forecast" city={city} />} />
        </div>
      </article>
      <Toggle />
    </div>
  );
}

export default App;
