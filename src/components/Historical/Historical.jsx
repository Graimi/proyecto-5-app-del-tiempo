import React from 'react';

function Historical({ apiData }) {
  return apiData.data && apiData.data.length > 0 ? (
    <div className="wt">
      <h1>Cáceres</h1>
      <h3>31/05/2023</h3>
      <p>{apiData.data[0].temp}</p>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default Historical;
