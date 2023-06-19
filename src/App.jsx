import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather/Weather';
import Api from './services/Api';
import InvisibleCard from './components/InvisibleCard/InvisibleCard';
import weatherIcons from './data/weatherIcons';
import SearchCity from './components/SearchCity/SearchCity';
import Toggle from './components/Toggle/Toggle';

function App() {
  const [city, setCity] = useState('Madrid');

  const handleCityChange = (cityName) => {
    setCity(cityName);
    console.log('Machine', city);
  };

  return (
    <div className="app">
      {/* <SearchCity /> */}
      <SearchCity onCityChange={handleCityChange} />
      <article className="wt-app-weather">
        {/* <InvisibleCard prop={<Api weather="yesterday" />} /> */}
        <div className="wt-app-current">
          <InvisibleCard prop={<Api weather="current" city={city} />} />
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
