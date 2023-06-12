import React from 'react';
import './Forecast.css';
import { date } from '../TimeFunctions/TimeFunctions';
import weatherIcons from '../../data/weatherIcons';

function Forecast(props) {
  const { city, country, api } = props;
  // const { icon, iconAlt } = props;
  return (
    <div className="wt-forecast">
      <h1 className="wt-forecast-city">
        {city}, {country}
      </h1>
      <article className="wt-forecast-container">
        {api.map((item) => (
          <div className="wt-forecast-day">
            <h3 className="wt-forecast-date">{date(item.dt)}</h3>
            <div className="wt-forecast-details">
              <div className="wt-forecast-info wind forecast-safe">
                <img
                  src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788353/App%20Tiempo/icons/icons8-windsock-64_u9pxth.png"
                  alt="wind"
                  className="wt-forecast-icon"
                />
                <p>{Math.round(item.wind_speed ?? 0)}m/s</p>
                {/* <p>15m/s</p> */}
              </div>
              <div className="wt-forecast-info raining forecast-danger">
                <img
                  src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788117/App%20Tiempo/icons/icons8-rainy-weather-64_nreo9p.png"
                  alt="raining"
                  className="wt-forecast-icon"
                />
                <p>{Math.round((item.pop ?? 0) * 100)}%</p>
              </div>
              <div className="wt-forecast-temp">
                <h3>
                  <img
                    className="wt-forecast-arrow-icon"
                    src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1686064684/App%20Tiempo/icons/arriba_l0oxbe.png"
                    alt="max"
                  />
                  {Math.round(item.temp.max ?? 0)}º
                </h3>
                <h3>
                  <img
                    className="wt-forecast-arrow-icon"
                    src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1686064684/App%20Tiempo/icons/abajo_vxgsjc.png"
                    alt="min"
                  />
                  {Math.round(item.temp.min ?? 0)}º
                </h3>
              </div>
              <div>
                <img
                  src={weatherIcons?.[item.weather?.[0]?.icon]?.icon}
                  alt={weatherIcons?.[item.weather?.[0]?.icon]?.name}
                  className="wt-forecast-weather-icon"
                />
              </div>
            </div>
          </div>
        ))}
      </article>
    </div>
  );
}

export default Forecast;
