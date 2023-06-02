import React from 'react';
import './InvisibleCard.css';

function InvisibleCard({ prop }) {
  return <div className="invisible-card">{prop}</div>;
}

export default InvisibleCard;
