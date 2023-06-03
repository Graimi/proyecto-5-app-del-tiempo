import React from 'react';

function Current({ prop }) {
  return (
    <div className="wt">
      <h1>Cáceres</h1>
      <h3>31/05/2023</h3>
      <p>{prop.description}</p>
      <p>{prop.raining}</p>
      <p>{prop.current?.weather[0].description}</p>
      <p>{prop?.daily[0].pop}</p>
    </div>
  );
}

export default Current;
