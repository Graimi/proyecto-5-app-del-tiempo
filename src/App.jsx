import React from 'react';
import './App.css';
import Card from './components/Cards/Card';
import Weather from './components/Weather/Weather';
import Api from './services/Api';
// import { weatherURL } from './services/Api';

function App() {
  return (
    <div className="app">
      {/* <Card prop={<Api weather="yesterday" />} /> */}
      {/* <Card prop={<Api weather="current" />} /> */}
      <Weather url="current" />
      <Card prop={<Weather url="current" />} />
      <Card prop="Forecast" />
    </div>
  );
}

export default App;
