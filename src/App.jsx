import React from 'react';
import './App.css';
import Card from './components/Cards/Card';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="app">
      <Card prop="Yesterday" />
      <Card prop={<Weather />} />
      <Card prop="Forecast" />
    </div>
  );
}

export default App;
