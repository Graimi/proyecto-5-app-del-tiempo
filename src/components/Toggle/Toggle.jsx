import React from 'react';
import './Toggle.css';

// Creamos la función para realizar el toggle entre elementos
function Toggle() {
  // Aplicamos esta subfunción la cual contendrá la lógica del cambio
  function toggleFunction() {
    const card = document.querySelector('.wt-toggle-card');
    const current = document.querySelector('.wt-app-current');
    const forecast = document.querySelector('.wt-app-forecast');

    if (card.innerHTML === 'Previsión') {
      card.innerHTML = 'Tiempo actual';
      current.style.display = 'none';
      forecast.style.display = 'flex';
    } else {
      card.innerHTML = 'Previsión';
      current.style.display = 'flex';
      forecast.style.display = 'none';
    }
  }
  // Devolvemos el template
  return (
    <article className="wt-toggle">
      <button type="button" onClick={toggleFunction} className="wt-toggle-button">
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1686665354/App%20Tiempo/icons/swap_q1h4bz.png"
          alt="toggle"
          className="wt-toggle-button-icon"
        />
        <h3 className="wt-toggle-card">Previsión</h3>
      </button>
    </article>
  );
}

export default Toggle;
