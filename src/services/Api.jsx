import React, { useEffect, useState } from 'react';
// import Current from '../components/Current/Current';
// import Historical from '../components/Historical/Historical';
import Error from '../components/Error/Error';
import Loader from '../components/Loader/Loader';
import Weather from '../components/Weather/Weather';
import moment from 'moment/moment';

function Api({ weather }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  useEffect(() => {
    // Verificar si el navegador es compatible con la geolocalización
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error(error.message);
        }
      );
    } else {
      console.error('Geolocalización no soportada');
    }
    //   VER CUANDO RECARGAR
  }, []);

  // Almacenamos en una constante nuestra API Key
  const ApiKey = 'cb658f072db01ec164fb8a14cc6d9da9';

  const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=es&appid=${ApiKey}`;
  const yestaerdayUnix = Math.floor(Date.now() / 1000) - 24 * 60 * 60;
  // Almacenamos en una constante la URL de Open Weather dedicada al tiempo pasado
  const historicalURL = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${yestaerdayUnix}&units=metric&lang=es&appid=${ApiKey}`;

  async function ApiFetch() {
    try {
      const response = await fetch(weather === 'current' ? weatherURL : historicalURL);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  // Seteamos la info de la api apiData
  const [apiData, setApiData] = useState({});
  // Seteamos el error de la api si hay, por defecto ho hay
  const [apiDataError, setApiDataError] = useState(false);
  // Seteamos que hasta que se cargue la info de la api aparezca la ventana de loading
  const [apiDataLoading, setApiDataLoading] = useState(true);

  useEffect(() => {
    setApiDataLoading(true);
    // Llamamos a la función Api
    ApiFetch()
      // Obtenemos la info de la api
      .then((data) => setApiData(data))
      // Si aparece un error damos valor positivo al state
      .catch(() => setApiDataError(true))
      // Una vez se ha solventado bien la solicitud de la api se quita la ventana de loading
      .finally(() => setApiDataLoading(false));
    // Esta info es importante que se actualice cada vez que se cambia la localización
  }, [latitude, longitude]);

  console.log(apiData);

  // Invocamos el template de error si la api está saturada
  if (apiDataError) {
    return <Error />;
  }

  // Invocamos el template de loading si la api no se ha cargado todavía
  if (apiDataLoading) {
    return <Loader />;
  }

  // useEffect(() => {
  //   if (weather === 'yesterday') {
  //     const rainingElement = document.querySelector('.raining');
  //     if (rainingElement) {
  //       rainingElement.style.display = 'none';
  //     }
  //   }
  // }, [weather]);

  // Creamos la función para obtener la fecha, nos ayudamos de la biblioteca moment
  function date(timestamp) {
    return moment.unix(timestamp).format('DD/MM/YY');
  }

// Creamos la función para obtener la hora, nos ayudamos de la biblioteca moment
  function hour(timestamp) {
    return moment.unix(timestamp).format('HH:mm');
  }

  // function date(timestamp) {
  //   const dateMiliseconds = timestamp * 1000;
  //   const dateMoment = moment(dateMiliseconds);
  //   const dateEurFormat = dateMoment.format('DD/MM/YYYY');
  //   return dateEurFormat;
  // }

  // const rainingElement = document.querySelector('.raining');
  // Añadimos el switch con los diferentes resultados posibles
  switch (weather) {
    case 'current':
      // Escribimos la siguiente condición para evitar fallos
      return apiData.daily && apiData.daily.length > 0 ? (
        <Weather
          city={'city'}
          icon={'icon'}
          iconAlt={'iconAlt'}
          timestamp={date(apiData?.current.dt)}
          temp={Math.round(apiData?.current?.temp ?? 0)}
          feeling={Math.round(apiData?.current?.feels_like ?? 0)}
          min={Math.round(apiData?.daily?.[0]?.temp.min ?? 0)}
          minDifference={'midif'}
          max={Math.round(apiData?.daily?.[0]?.temp.max ?? 0)}
          maxDifference={'madif'}
          wind={Math.round(apiData?.daily?.[0]?.wind_speed ?? 0)}
          humidity={Math.round(apiData?.daily?.[0]?.humidity ?? 0)}
          polution={'polution'}
          raining={`${Math.round((apiData?.daily?.[0]?.pop ?? 0) * 100)}%`}
          uv={Math.round(apiData?.daily?.[0]?.uvi ?? 0)}
          cloudiness={Math.round(apiData?.daily?.[0]?.clouds ?? 0)}
          sunrise={hour(apiData?.daily?.[0]?.sunrise)}
          sunset={hour(apiData?.daily?.[0]?.sunset)}
        />
      ) : (
        <Loader />
      );
    // return apiData.daily && apiData.daily.length > 0 ? <Current prop={apiData} /> : <Loader />;
    case 'yesterday':
      // {
      //   const rainingElement = document.querySelector('.raining');
      //   rainingElement.style.display = 'none';
      // }
      // Escribimos la siguiente condición para evitar fallos
      return apiData.data && apiData.data.length > 0 ? (
        <Weather
          timestamp={date(apiData?.data[0].dt)}
          // raining={`${Math.round(apiData?.daily[0].pop * 100)}%`}
        />
      ) : (
        <Loader />
      );
    case 'forecast':
      // Ver que añadir cuando lo tengamos
      return <h1>Forecast</h1>;
    default:
      return <Error />;
  }
}

export default Api;
