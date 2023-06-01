import React from 'react';

function Current({ apiData }) {
  return (
    <div className="wt">
      <h1>Cáceres</h1>
      <h3>31/05/2023</h3>
      <p>{apiData.current?.weather[0].description}</p>
    </div>
  );
}

export default Current;
