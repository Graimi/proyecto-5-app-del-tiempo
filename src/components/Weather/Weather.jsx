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
  return (
    <div className="wt">
      <article className="wt-location-date">
        <h1>Cáceres</h1>
        <h3>31/05/2023</h3>
      </article>
      <article className="wt-temp">
        <div>
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685614879/App%20Tiempo/icons/nubes_klahhd.png"
            alt="cloud"
            className="wt-temp-icon"
          />
        </div>
        <div className="wt-temp-celsius">
          <h2>25º</h2>
          <p>Feels like 23º</p>
          <p>Description</p>
        </div>
      </article>
      <article className="wt-temp-max-min">
        <h2>18º</h2>
        <h2 className="wt-temp-difference">-2</h2>
        <h2>25º</h2>
        <h2 className="wt-temp-difference">+3</h2>
      </article>
      <article className="wt-weather">
        <div className="wt-weather-info wind">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685614879/App%20Tiempo/icons/nubes_klahhd.png"
            alt="cloud"
            className="wt-sunrise-sunset-icon"
          />
          <p>wind</p>
        </div>
        <div className="wt-weather-info humidity danger">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685614879/App%20Tiempo/icons/nubes_klahhd.png"
            alt="cloud"
            className="wt-sunrise-sunset-icon"
          />
          <p>humidity</p>
        </div>
        <div className="wt-weather-info humidity raining">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685614879/App%20Tiempo/icons/nubes_klahhd.png"
            alt="cloud"
            className="wt-sunrise-sunset-icon"
          />
          <p>raining</p>
        </div>
        <div className="wt-weather-info cloudiness">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685614879/App%20Tiempo/icons/nubes_klahhd.png"
            alt="cloud"
            className="wt-sunrise-sunset-icon"
          />
          <p>cloudiness</p>
        </div>
        <div className="wt-weather-info polution">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685614879/App%20Tiempo/icons/nubes_klahhd.png"
            alt="cloud"
            className="wt-sunrise-sunset-icon"
          />
          <p>polution</p>
        </div>
        <div className="wt-weather-info polution">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685614879/App%20Tiempo/icons/nubes_klahhd.png"
            alt="cloud"
            className="wt-sunrise-sunset-icon"
          />
          <p>uvi</p>
        </div>
        <div className="wt-weather-info polution">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685614879/App%20Tiempo/icons/nubes_klahhd.png"
            alt="cloud"
            className="wt-sunrise-sunset-icon"
          />
          <p>pressure</p>
        </div>
        <div className="wt-weather-info polution">
          <img
            src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685614879/App%20Tiempo/icons/nubes_klahhd.png"
            alt="cloud"
            className="wt-sunrise-sunset-icon"
          />
          <p>visibility</p>
        </div>
      </article>
      <article className="wt-sunrise-sunset">
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685614879/App%20Tiempo/icons/nubes_klahhd.png"
          alt="cloud"
          className="wt-sunrise-sunset-icon"
        />
        <h2>7:00</h2>
        <h2>21:00</h2>
        <img
          src="https://res.cloudinary.com/dwsffp1eq/image/upload/v1685614879/App%20Tiempo/icons/nubes_klahhd.png"
          alt="cloud"
          className="wt-sunrise-sunset-icon"
        />
      </article>
    </div>
  );
}
export default Weather;
