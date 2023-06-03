import React from 'react';
import './App.css';
import Card from './components/Cards/Card';
import Weather from './components/Weather/Weather';
import Api from './services/Api';
import InvisibleCard from './components/InvisibleCard/InvisibleCard';
// import { weatherURL } from './services/Api';

function App() {
  return (
    <div className="app">
      {/* <Card prop={<Api weather="yesterday" />} /> */}
      <InvisibleCard prop={<Api weather="current" />} />
      <InvisibleCard prop={<Weather url="current" />} />
      {/* <Card prop={<Weather url="current" />} /> */}
      {/* <Card prop="Forecast" /> */}
    </div>
  );
}

export default App;
