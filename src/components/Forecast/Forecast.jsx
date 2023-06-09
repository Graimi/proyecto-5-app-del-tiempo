import React from 'react';
import './Forecast.css';
import { date } from '../TimeFunctions/TimeFunctions';
import weatherIcons from '../../data/weatherIcons';

function Forecast({ city, country, api }) {
  // Usamos la siguiente función para cambiar el color de los elementos según sus datos
  const getBackgroundColor = (value, thresholds) => {
    if (value <= thresholds[0]) {
      return { backgroundColor: 'var(--wt-color-safe)' };
    }
    if (value <= thresholds[1]) {
      return { backgroundColor: 'var(--wt-color-caution)' };
    }
    if (value <= thresholds[2]) {
      return { backgroundColor: 'var(--wt-color-warning)' };
    }
    return { backgroundColor: 'var(--wt-color-danger)' };
  };

  // Devolvemos el template para el forecast
  return (
    <div className="wt-forecast">
      <h2 className="wt-forecast-city">
        {city}, {country}
      </h2>
      <article className="wt-forecast-container">
        {/* Usamos un map para recorrer todos los elementos */}
        {/* Usamos el slice para dejar solo los prox 5 días sin contar el actual */}
        {api.slice(1, -2).map((item) => (
          <div className="wt-forecast-day" key={date(item.dt)}>
            <div className="wt-forecast-info">
              <p className="wt-forecast-date">{date(item.dt)} </p>
              <div className="wt-forecast-temp">
                <p>
                  <img
                    className="wt-forecast-arrow-icon"
                    src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1686064684/App%20Tiempo/icons/arriba_l0oxbe.png"
                    alt="max"
                  />
                  {Math.round(item.temp.max ?? 0)}º
                </p>
                <p>
                  <img
                    className="wt-forecast-arrow-icon"
                    src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1686064684/App%20Tiempo/icons/abajo_vxgsjc.png"
                    alt="min"
                  />
                  {Math.round(item.temp.min ?? 0)}º
                </p>
              </div>
            </div>
            <div
              className="wt-forecast-details"
              style={getBackgroundColor(Math.round(item.wind_speed ?? 0), [50, 60, 70])}
            >
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788353/App%20Tiempo/icons/icons8-windsock-64_u9pxth.png"
                alt="wind"
                className="wt-forecast-icon"
              />
              <p>{Math.round(item.wind_speed ?? 0)}m/s</p>
            </div>
            <div
              className="wt-forecast-details"
              style={getBackgroundColor(Math.round((item.pop ?? 0) * 100), [25, 50, 75])}
            >
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788117/App%20Tiempo/icons/icons8-rainy-weather-64_nreo9p.png"
                alt="raining"
                className="wt-forecast-icon"
              />
              <p>{Math.round((item.pop ?? 0) * 100)}%</p>
            </div>
            <div>
              <img
                src={weatherIcons?.[item.weather?.[0]?.icon]?.icon}
                alt={weatherIcons?.[item.weather?.[0]?.icon]?.name}
                className="wt-forecast-weather-icon"
              />
            </div>
          </div>
        ))}
      </article>
    </div>
  );
}

export default Forecast;
