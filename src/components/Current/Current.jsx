import React from 'react';

function Current({ prop }) {
  return prop.daily && prop.daily.length > 0 ? (
    <div className="wt">
      <h1>Cáceres</h1>
      <h3>31/05/2023</h3>
      <p>{prop.description}</p>
      <p>{prop.raining}</p>
      {/* <p>{apiData.current?.weather[0].description}</p>
      <p>{apiData?.daily[0].pop}</p> */}
    </div>
  ) : (
    <h1>Loading</h1>
  );
}

export default Current;
