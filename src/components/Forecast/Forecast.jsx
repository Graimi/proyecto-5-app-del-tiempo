import React from 'react';
import './Forecast.css';

function Forecast() {
  return (
    <div className="wt-forecast">
      <h1 className="wt-forecast-city">Cáceres</h1>
      <article className="wt-forecast-container">
        <div className="wt-forecast-day">
          <h3 className="wt-forecast-date">30/05/23</h3>
          <div className="wt-forecast-details">
            <div className="wt-forecast-info wind safe">
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788353/App%20Tiempo/icons/icons8-windsock-64_u9pxth.png"
                alt="wind"
                className="wt-forecast-icon"
              />
              <p>5m/s</p>
            </div>
            <div className="wt-forecast-info raining">
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788117/App%20Tiempo/icons/icons8-rainy-weather-64_nreo9p.png"
                alt="raining"
                className="wt-forecast-icon"
              />
              <p>20%</p>
            </div>
            <div className="wt-forecast-temp">
              <h3>
                <img
                  className="wt-forecast-arrow-icon"
                  src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1686064684/App%20Tiempo/icons/arriba_l0oxbe.png"
                  alt="max"
                />
                18º
              </h3>
              <h3>
                <img
                  className="wt-forecast-arrow-icon"
                  src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1686064684/App%20Tiempo/icons/abajo_vxgsjc.png"
                  alt="min"
                />
                18º
              </h3>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685790068/App%20Tiempo/icons/icons8-summer-64_3_g9apnb.png"
                alt=""
                className="wt-forecast-icon"
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Forecast;
