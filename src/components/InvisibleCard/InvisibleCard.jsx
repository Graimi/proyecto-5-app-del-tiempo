import React from 'react';
import './InvisibleCard.css';

// Englobamos los estilos generales de la invisibleCard con la siguiente función
function InvisibleCard({ prop }) {
  return <div className="invisible-card">{prop}</div>;
}

export default InvisibleCard;
