import React from 'react';
import './App.css';
import Card from './components/Cards/Card';
import Weather from './components/Weather/Weather';
import Api from './services/Api';
import InvisibleCard from './components/InvisibleCard/InvisibleCard';
import weatherIcons from './data/weatherIcons';
import SearchCity from './components/SearchCity/SearchCity';
// import { weatherURL } from './services/Api';

function App() {
  console.log(weatherIcons['01d'].background);
  return (
    <div className="app">
      <InvisibleCard prop={<SearchCity />} />
      <div className="wt-app-weather">
        {/* <Card prop={<Api weather="yesterday" />} /> */}
        {/* <InvisibleCard prop={<Api weather="yesterday" />} /> */}
        <InvisibleCard prop={<Api weather="current" />} />
        <div className="wt-app-forecast">
          <InvisibleCard prop={<Api weather="forecast" />} />{' '}
        </div>
        {/* <InvisibleCard prop={<Api weather="forecast" />} /> */}
        {/* <InvisibleCard prop={<Weather url="current" />} /> */}
        {/* <Card prop={<Weather url="current" />} /> */}
        {/* <Card prop="Forecast" /> */}
      </div>
    </div>
  );
}

export default App;
