import React from 'react';
import './Card.css';

function Card({ prop }) {
  return (
    // <div className="blurred-box">
    <div className="card">
      <div>{prop}</div>
    </div>
  );
}

export default Card;
