import React, { useEffect, useState } from 'react';
// import Api, { weatherURL } from '../../services/Api';
import './Weather.css';
import Api, { ApiKey } from '../../services/Api';

function Weather() {
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

  //   // Almacenamos en una constante la URL de Open Weather dedicada al tiempo presente y predicciones
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
  //     Api(weatherURL)
  //       // Obtenemos la info de la api del rover curiosity
  //       .then((data) => setApiData(data))
  //       // Si aparece un error damos valor positivo al state
  //       .catch(() => setApiDataError(true))
  //       // Una vez se ha solventado bien la solicitud de la api se quita la ventana de loading
  //       .finally(() => setApiDataLoading(false));
  //     // Esta info es importante que se actualice cada vez que se cambia la fecha
  //   }, [latitude, longitude]);

  //   console.log(apiData);
  //   console.log(apiDataError);
  //   console.log(apiDataLoading);

  //   return (
  //     <div className="wt">
  //       <article className="wt-location-date">
  //         <h1>Cáceres</h1>
  //         <h3>31/05/2023</h3>
  //       </article>
  //       <article className="wt-temp">
  //         Icon
  //         <p>{apiData?.current.weather[0].description}</p>
  //         <div className="wt-temp-info">
  //           <h2>{Math.floor(apiData?.current.temp)}º</h2>
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
        Icon
        <p>Description</p>
        <div className="wt-temp-info">
          <h2>25º</h2>
          <p>Feels like 23º</p>
        </div>
      </article>
    </div>
  );
}
export default Weather;
