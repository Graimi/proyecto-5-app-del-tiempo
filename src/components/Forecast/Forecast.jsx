import React from 'react';
import './Forecast.css';

function Forecast() {
  return (
    <div className="wt-forecast">
      <h1 className="wt-forecast-title">Cáceres</h1>
      {/* <article className="wt-forecast-container">
        <div className="wt-forecast-day">
          <h3>30/05/23</h3>
          <div className="wt-forecast-day-details">
            <div className="wt-forecast-info wind safe">
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788353/App%20Tiempo/icons/icons8-windsock-64_u9pxth.png"
                alt="wind"
                className="wt-forecast-icon"
              />
              <p>5m/s</p>
            </div>
            <div className="wt-forecast-info humidity danger">
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788356/App%20Tiempo/icons/icons8-wet-64_mbmzea.png"
                alt="humidity"
                className="wt-forecast-icon"
              />
              <p>20%</p>
            </div>
            <div className={`wt-forecast-info polution caution `}>
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685786807/App%20Tiempo/icons/icons8-pollution-64_2_jjzhjy.png"
                alt="pollution"
                className="wt-forecast-icon"
              />
              <p>2/5</p>
            </div>
            <div className="wt-forecast-info raining danger">
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788117/App%20Tiempo/icons/icons8-rainy-forecast-64_nreo9p.png"
                alt="raining"
                className="wt-forecast-icon"
              />
              <p>20%</p>
            </div>
            <div className="wt-forecast-info uvi danger">
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685787979/App%20Tiempo/icons/icons8-summer-64_2_wvrcbs.png"
                alt="uv"
                className="wt-forecast-icon"
              />
              <p>5</p>
            </div>
            <div className="wt-forecast-info cloudiness safe">
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685787705/App%20Tiempo/icons/icons8-cloud-64_3_attbeq.png"
                alt="cloudiness"
                className="wt-forecast-icon"
              />
              <p>20%</p>
            </div>
          </div>
        </div>
        <div className="wt-forecast-day-temp">
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
            className="wt-temp-icon"
          />
        </div>
        <img className="wt-forecast-day-icon" src="" alt="" />
      </article> */}
      <article className="wt-forecast-container">
        <div className="wt-forecast-day">
          <h3>30/05/23</h3>
          <div className="wt-forecast-day-details">
            <div className="wt-forecast-info wind safe">
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788353/App%20Tiempo/icons/icons8-windsock-64_u9pxth.png"
                alt="wind"
                className="wt-forecast-icon"
              />
              <p>5m/s</p>
            </div>
            <div className="wt-forecast-info raining danger">
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788117/App%20Tiempo/icons/icons8-rainy-weather-64_nreo9p.png"
                alt="raining"
                className="wt-forecast-icon"
              />
              <p>20%</p>
            </div>
            <div className="wt-forecast-info cloudiness safe">
              <img
                src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685787705/App%20Tiempo/icons/icons8-cloud-64_3_attbeq.png"
                alt="cloudiness"
                className="wt-forecast-icon"
              />
              <p>20%</p>
            </div>
          </div>
        </div>
        <div className="wt-forecast-day-temp-icon">
          <div className="wt-forecast-day-temp">
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
              className="wt-forecast-weather-icon"
            />
          </div>
        </div>
      </article>
      raining, wind, uvi, humidity, cloud, pollution
    </div>
  );
}

export default Forecast;
