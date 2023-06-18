import React, { useState } from 'react';
import './App.css';
import Weather from './components/Weather/Weather';
import Api from './services/Api';
import InvisibleCard from './components/InvisibleCard/InvisibleCard';
import weatherIcons from './data/weatherIcons';
import SearchCity from './components/SearchCity/SearchCity';
import Toggle from './components/Toggle/Toggle';

function App() {
  return (
    <div className="app">
      <SearchCity />
      <article className="wt-app-weather">
        {/* <InvisibleCard prop={<Api weather="yesterday" />} /> */}
        <div className="wt-app-current">
          <InvisibleCard prop={<Api weather="current" />} />
        </div>
        <div className="wt-app-forecast">
          <InvisibleCard prop={<Api weather="forecast" />} />
        </div>
      </article>
      <Toggle />
    </div>
  );
}

export default App;
