import React from 'react';
import './App.css';
import Card from './components/Cards/Card';
import Weather from './components/Weather/Weather';
import Api from './services/Api';
import InvisibleCard from './components/InvisibleCard/InvisibleCard';
import weatherIcons from './data/weatherIcons';
import SearchCity from './components/SearchCity/SearchCity';
import Toggle from './components/Toggle/Toggle';
// import { weatherURL } from './services/Api';

function App() {
  return (
    <div className="app">
      {/* <InvisibleCard prop={<SearchCity />} /> */}
      <SearchCity />
      <article className="wt-app-weather">
        {/* <Card prop={<Api weather="yesterday" />} /> */}
        {/* <InvisibleCard prop={<Api weather="yesterday" />} /> */}
        <div className="wt-app-current">
          <InvisibleCard prop={<Api weather="current" />} />
        </div>
        <div className="wt-app-forecast">
          <InvisibleCard prop={<Api weather="forecast" />} />
        </div>
        {/* <InvisibleCard prop={<Api weather="forecast" />} /> */}
        {/* <InvisibleCard prop={<Weather url="current" />} /> */}
        {/* <Card prop={<Weather url="current" />} /> */}
        {/* <Card prop="Forecast" /> */}
      </article>
      {/* <InvisibleCard prop={<Toggle />} /> */}
      <Toggle />
    </div>
  );
}

export default App;
