import React from 'react';
import './Weather.css';

function Weather(props) {
  // 1-5 - Pollution (<=1 >1&&<=2,5 >2,5&&<=4 >4) (Hacer otra api)
  // 0-100% - humidity, raining, cloudiness (<=25 >25&&<=50 >50&&<=75 >75)
  // 0-+90 m/s - wind (<=50 51-60 61-70 71+)
  // uv (<=3 >3&&<=6 >6&&<=9 >9)
  const { timestamp, raining } = props;

  return (
    <div className="wt">
      <article className="wt-location-date">
        <h1>Cáceres</h1>
        <h3>{timestamp}</h3>
      </article>
      <article className="wt-temp">
        <div>
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685786623/App%20Tiempo/icons/icons8-cloud-lightning-64_rfsvj1.png"
            alt="cloud"
            className="wt-temp-icon"
          />
        </div>
        <div className="wt-temp-celsius">
          <h2>25º</h2>
          <p>Feels like 23º</p>
        </div>
      </article>
      <article className="wt-temp-max-min-container">
        <div className="wt-temp-max-min">
          <h3>18º</h3>
          <h3 className="wt-temp-difference">-2</h3>
        </div>
        <div className="wt-temp-max-min">
          <h3>25º</h3>
          <h3 className="wt-temp-difference">+3</h3>
        </div>
      </article>
      <article className="wt-weather">
        <div className="wt-weather-info wind safe">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788353/App%20Tiempo/icons/icons8-windsock-64_u9pxth.png"
            alt="wind"
            className="wt-sunrise-sunset-icon"
          />
          <p>30 m/s</p>
        </div>
        <div className="wt-weather-info humidity danger">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788356/App%20Tiempo/icons/icons8-wet-64_mbmzea.png"
            alt="humidity"
            className="wt-sunrise-sunset-icon"
          />
          <p>30%</p>
        </div>
        <div className="wt-weather-info polution caution">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685786807/App%20Tiempo/icons/icons8-pollution-64_2_jjzhjy.png"
            alt="pollution"
            className="wt-sunrise-sunset-icon"
          />
          <p>2/5</p>
        </div>
        <div className="wt-weather-info raining danger">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788117/App%20Tiempo/icons/icons8-rainy-weather-64_nreo9p.png"
            alt="raining"
            className="wt-sunrise-sunset-icon"
          />
          <p>{raining}</p>
        </div>
        <div className="wt-weather-info uvi danger">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685787979/App%20Tiempo/icons/icons8-summer-64_2_wvrcbs.png"
            alt="uv"
            className="wt-sunrise-sunset-icon"
          />
          <p>10</p>
        </div>
        <div className="wt-weather-info cloudiness safe">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685787705/App%20Tiempo/icons/icons8-cloud-64_3_attbeq.png"
            alt="cloudiness"
            className="wt-sunrise-sunset-icon"
          />
          <p>10%</p>
        </div>
      </article>
      <article className="wt-sunrise-sunset-container">
        <div className="wt-sunrise-sunset">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685790068/App%20Tiempo/icons/icons8-summer-64_3_g9apnb.png"
            alt="sunrise"
            className="wt-sunrise-sunset-icon"
          />
          {/* <p>7:00</p> */}
          <h3>7am</h3>
        </div>
        <div className="wt-sunrise-sunset">
          {/* <p>21:00</p> */}
          <h3>21pm</h3>
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685790661/App%20Tiempo/icons/icons8-waning-crescent-64_seivio.png"
            alt="sunset"
            className="wt-sunrise-sunset-icon"
          />
        </div>
      </article>
    </div>
  );
}
export default Weather;
