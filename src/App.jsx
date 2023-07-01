import React, { useState } from 'react';
import './App.css';
import Api from './services/Api';
import InvisibleCard from './components/InvisibleCard/InvisibleCard';
import SearchCity from './components/SearchCity/SearchCity';
import Toggle from './components/Toggle/Toggle';
import BackgroundChanger from './components/Background/Background';

function App() {
  // Almacenamos aquí el valor de city
  // Hay algunos dispositivos que directamente no permiten acceder a la ubicación (como mi móvil)
  // Por ello he puesto de base Madrid
  const [lat, setLat] = useState('40.4167047');
  const [lon, setLon] = useState('-3.7035825');
  // Prevenimos cargar un background por defecto por si hay error
  BackgroundChanger('Defecto');

  // Usamos la siguiente función para obtener el valor de city desde SearchCity
  const handleCityChange = (cityName) => {
    setLat(cityName.lat);
    setLon(cityName.lon);
  };

  // Creamos la template de App
  return (
    <div className="app">
      <SearchCity onCityChange={handleCityChange} />
      <article className="wt-app-weather">
        <div className="wt-app-current">
          <InvisibleCard prop={<Api weather="current" lat={lat} lon={lon} />} />
        </div>
        <div className="wt-app-forecast">
          <InvisibleCard prop={<Api weather="forecast" lat={lat} lon={lon} />} />
        </div>
      </article>
      <Toggle />
    </div>
  );
}

export default App;
