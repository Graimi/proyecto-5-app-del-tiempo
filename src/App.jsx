import React from 'react';
import './App.css';
import Card from './components/Cards/Card';

function App() {
  return (
    <div className="app">
      <Card prop="Yesterday" />
      <Card prop="Current" />
      <Card prop="Forecast" />
    </div>
  );
}

export default App;
