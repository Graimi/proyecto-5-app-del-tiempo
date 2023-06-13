import React from 'react';
import './Weather.css';

function Weather(props) {
  const {
    city,
    country,
    timestamp,
    icon,
    iconAlt,
    temp,
    feeling,
    min,
    max,
    wind,
    polution,
    raining,
    uv,
    cloudiness,
    windDay,
    rainingDay,
    uvDay,
    cloudinessDay,
    sunrise,
    sunset
  } = props;

  // Tenemos los siguientes valores
  // El valor más bajo será verde, el siguiende amarillo, el siguiente naranja y el ultimmo rojo
  // polution (<=1 >1&&<=2,5 >2,5&&<=4 >4)
  // raining, rainingDay, cloudiness, cloudinessDay (<=25 >25&&<=50 >50&&<=75 >75)
  // wind, windDay (<=50 51-60 61-70 71+)
  // uv, uvDay (<=3 >3&&<=6 >6&&<=9 >9)
  // Función para obtener el color del fondo según el valor proporcionado
  const getBackgroundColor = (value, thresholds) => {
    if (value <= thresholds[0]) {
      return 'var(--wt-color-safe)';
    }
    if (value <= thresholds[1]) {
      return 'var(--wt-color-caution)';
    }
    if (value <= thresholds[2]) {
      return 'var(--wt-color-warning)';
    }
    return 'var(--wt-color-danger)';
  };

  // Establecer los estilos de background-color según los valores
  const windStyle = {
    backgroundColor: getBackgroundColor(wind, [50, 60, 70])
  };

  const polutionStyle = {
    backgroundColor: getBackgroundColor(polution, [1, 2.5, 4])
  };

  const rainingStyle = {
    backgroundColor: getBackgroundColor(raining, [25, 50, 75])
  };

  const uvStyle = {
    backgroundColor: getBackgroundColor(uv, [3, 6, 9])
  };

  const cloudinessStyle = {
    backgroundColor: getBackgroundColor(cloudiness, [25, 50, 75])
  };

  const windDayStyle = {
    backgroundColor: getBackgroundColor(windDay, [50, 60, 70])
  };

  const rainingDayStyle = {
    backgroundColor: getBackgroundColor(rainingDay, [25, 50, 75])
  };

  const uvDayStyle = {
    backgroundColor: getBackgroundColor(uvDay, [3, 6, 9])
  };

  const cloudinessDayStyle = {
    backgroundColor: getBackgroundColor(cloudinessDay, [25, 50, 75])
  };

  return (
    <div className="wt-current">
      <article className="wt-location-date">
        <h1>
          {city}, {country}
        </h1>
        <h3>{timestamp}</h3>
      </article>
      <article className="wt-temp">
        <div>
          <img src={icon} alt={iconAlt} className="wt-temp-icon" />
        </div>
        <div className="wt-temp-celsius">
          <h2>{temp}º</h2>
          <h3>Sensación {feeling}º</h3>
        </div>
      </article>
      <article className="wt-weather">
        <div className="wt-weather-info" style={windStyle}>
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788353/App%20Tiempo/icons/icons8-windsock-64_u9pxth.png"
            alt="wind"
            className="wt-sunrise-sunset-icon"
          />
          <p>{wind}m/s</p>
        </div>
        <div className="wt-weather-info" style={polutionStyle}>
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685786807/App%20Tiempo/icons/icons8-pollution-64_2_jjzhjy.png"
            alt="pollution"
            className="wt-sunrise-sunset-icon"
          />
          <p>{polution}/5</p>
        </div>
        <div className="wt-weather-info" style={rainingStyle}>
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788117/App%20Tiempo/icons/icons8-rainy-weather-64_nreo9p.png"
            alt="raining"
            className="wt-sunrise-sunset-icon"
          />
          <p>{raining}%</p>
        </div>
        <div className="wt-weather-info" style={uvStyle}>
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685787979/App%20Tiempo/icons/icons8-summer-64_2_wvrcbs.png"
            alt="uv"
            className="wt-sunrise-sunset-icon"
          />
          <p>{uv}</p>
        </div>
        <div className="wt-weather-info" style={cloudinessStyle}>
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685787705/App%20Tiempo/icons/icons8-cloud-64_3_attbeq.png"
            alt="cloudiness"
            className="wt-sunrise-sunset-icon"
          />
          <p>{cloudiness}%</p>
        </div>
      </article>
      <div className="wt-weather-forecast">
        <h3 className="wt-weather-forecast-title">Pronóstico del día</h3>
        <article className="wt-temp-max-min-container">
          <div className="wt-temp-max-min">
            <h3>{min}º</h3>
          </div>
          <img
            className="wt-temp-max-min-line"
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1686583570/App%20Tiempo/icons/linea_mfl5ne.png"
            alt=""
          />
          <div className="wt-temp-max-min">
            <h3>{max}º</h3>
          </div>
        </article>
        <article className="wt-weather">
          <div className="wt-weather-info" style={windDayStyle}>
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788353/App%20Tiempo/icons/icons8-windsock-64_u9pxth.png"
              alt="wind"
              className="wt-sunrise-sunset-icon"
            />
            <p>{windDay}m/s</p>
          </div>
          <div className="wt-weather-info" style={polutionStyle}>
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685786807/App%20Tiempo/icons/icons8-pollution-64_2_jjzhjy.png"
              alt="pollution"
              className="wt-sunrise-sunset-icon"
            />
            <p>{polution}/5</p>
          </div>
          <div className="wt-weather-info" style={rainingDayStyle}>
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788117/App%20Tiempo/icons/icons8-rainy-weather-64_nreo9p.png"
              alt="raining"
              className="wt-sunrise-sunset-icon"
            />
            <p>{rainingDay}%</p>
          </div>
          <div className="wt-weather-info" style={uvDayStyle}>
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685787979/App%20Tiempo/icons/icons8-summer-64_2_wvrcbs.png"
              alt="uv"
              className="wt-sunrise-sunset-icon"
            />
            <p>{uvDay}</p>
          </div>
          <div className="wt-weather-info" style={cloudinessDayStyle}>
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685787705/App%20Tiempo/icons/icons8-cloud-64_3_attbeq.png"
              alt="cloudiness"
              className="wt-sunrise-sunset-icon"
            />
            <p>{cloudinessDay}%</p>
          </div>
        </article>
        <article className="wt-sunrise-sunset-container">
          <div className="wt-sunrise-sunset">
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685790068/App%20Tiempo/icons/icons8-summer-64_3_g9apnb.png"
              alt="sunrise"
              className="wt-sunrise-sunset-icon"
            />
            <h3>{sunrise}</h3>
          </div>
          <div className="wt-sunrise-sunset">
            <h3>{sunset}</h3>
            <img
              src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685790661/App%20Tiempo/icons/icons8-waning-crescent-64_seivio.png"
              alt="sunset"
              className="wt-sunrise-sunset-icon"
            />
          </div>
        </article>
      </div>
    </div>
  );
}
export default Weather;
