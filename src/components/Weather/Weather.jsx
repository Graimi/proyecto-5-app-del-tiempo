import React, { useEffect, useState } from 'react';
import Api2, { ApiKey } from '../../services/Api2';
import './Weather.css';

function Weather({ url }) {
  //   const [latitude, setLatitude] = useState(null);
  //   const [longitude, setLongitude] = useState(null);
  //   useEffect(() => {
  //     // Verificar si el navegador es compatible con la geolocalización
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           setLatitude(position.coords.latitude);
  //           setLongitude(position.coords.longitude);
  //         },
  //         (error) => {
  //           console.error(error.message);
  //         }
  //       );
  //     } else {
  //       console.error('Geolocalización no soportada');
  //     }
  //     //   VER CUANDO RECARGAR
  //   }, []);

  //   const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=es&appid=${ApiKey}`;
  //   const yestaerdayUnix = Math.floor(Date.now() / 1000) - 24 * 60 * 60;
  //   // Almacenamos en una constante la URL de Open Weather dedicada al tiempo pasado
  //   const historicalURL = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${yestaerdayUnix}&units=metric&lang=es&appid=${ApiKey}`;

  //   // Seteamos la info de la api apiData
  //   const [apiData, setApiData] = useState({});
  //   // Seteamos el error de la api si hay, por defecto ho hay
  //   const [apiDataError, setApiDataError] = useState(false);
  //   // Seteamos que hasta que se cargue la info de la api aparezca la ventana de loading
  //   const [apiDataLoading, setApiDataLoading] = useState(true);

  //   useEffect(() => {
  //     // Llamamos a la función Api
  //     Api(url === 'current' ? weatherURL : historicalURL)
  //       // Obtenemos la info de la api del rover curiosity
  //       .then((data) => setApiData(data))
  //       // Si aparece un error damos valor positivo al state
  //       .catch(() => setApiDataError(true))
  //       // Una vez se ha solventado bien la solicitud de la api se quita la ventana de loading
  //       .finally(() => setApiDataLoading(false));
  //     // Esta info es importante que se actualice cada vez que se cambia la fecha
  //   }, [latitude, longitude]);

  //   console.log(url);

  //   console.log(apiData);

  //   return (
  //     <div className="wt">
  //       <article className="wt-location-date">
  //         <h1>Cáceres</h1>
  //         <h3>31/05/2023</h3>
  //       </article>
  //       <article className="wt-temp">
  //         Icon
  //         <p>{apiData.current?.weather[0].description}</p>
  //         <div className="wt-temp-info">
  //           <h2>{apiData?.lat}º</h2>
  //           <p>Feels like 23º</p>
  //         </div>
  //       </article>
  //     </div>
  //   );


  // 1-5 - Pollution (<=1 >1&&<=2,5 >2,5&&<=4 >4) (Hacer otra api)
  // 0-100% - humidity, raining, cloudiness (<=25 >25&&<=50 >50&&<=75 >75)
  // 0-+90 m/s - wind (<=50 51-60 61-70 71+)
  // uv (<=3 >3&&<=6 >6&&<=9 >9)

  return (
    <div className="wt">
      <article className="wt-location-date">
        <h1>Cáceres</h1>
        <h3>31/05/2023</h3>
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
        <div className="wt-weather-info humidity raining danger">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685788117/App%20Tiempo/icons/icons8-rainy-weather-64_nreo9p.png"
            alt="raining"
            className="wt-sunrise-sunset-icon"
          />
          <p>30%</p>
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
