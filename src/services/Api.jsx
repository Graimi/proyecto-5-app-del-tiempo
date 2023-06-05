import React, { useEffect, useState } from 'react';
// import Current from '../components/Current/Current';
// import Historical from '../components/Historical/Historical';
import Error from '../components/Error/Error';
import Loader from '../components/Loader/Loader';
import Weather from '../components/Weather/Weather';
import moment from 'moment/moment';
import weatherIcons from '../data/weatherIcons';

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

  // Almacenamos en una constante la URL de Open Weather dedicada al tiempo presente y futuro
  const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=es&appid=${ApiKey}`;

  const yestaerdayUnix = Math.floor(Date.now() / 1000) - 24 * 60 * 60;
  // Almacenamos en una constante la URL de Open Weather dedicada al tiempo pasado
  const historicalURL = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${yestaerdayUnix}&units=metric&lang=es&appid=${ApiKey}`;

  // Almacenamos en una constante la URL de Open Weather dedicada a la contaminación
  const pollutionURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`;

  // Seteamos la info de la api apiData
  const [apiData, setApiData] = useState({});
  // Seteamos el error de la api si hay, por defecto ho hay
  const [apiDataError, setApiDataError] = useState(false);
  // Seteamos que hasta que se cargue la info de la api aparezca la ventana de loading
  const [apiDataLoading, setApiDataLoading] = useState(true);

  async function ApiFetch(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  // Creamos el template para llamar a las apis
  useEffect(() => {
    setApiDataLoading(true);
    // Llamamos a la función Api
    ApiFetch(weather === 'current' ? weatherURL : historicalURL)
      // Obtenemos la info de la api
      .then((data) => setApiData(data))
      // Si aparece un error damos valor positivo al state
      .catch(() => setApiDataError(true))
      // Una vez se ha solventado bien la solicitud de la api se quita la ventana de loading
      .finally(() => setApiDataLoading(false));
    // Esta info es importante que se actualice cada vez que se cambia la localización
  }, [latitude, longitude]);

  console.log(apiData);

  // Creamos este state para almacenar la info de contaminación
  const [pollutionData, setPollutionData] = useState({});

  // Llamamos a la api de contaminación
  useEffect(() => {
    // Llamamos a la función Api
    ApiFetch(pollutionURL)
      // Obtenemos la info de la api
      .then((data) => setPollutionData(data));
    // Esta info es importante que se actualice cada vez que se cambia la localización
  }, [latitude, longitude]);

  function BackgroundChanger(id) {
    const backgroundUrl = weatherIcons[id]?.background;
    const body = document.querySelector('body');
    body.style.backgroundImage = `url(${backgroundUrl})`;
  }

  // Invocamos el template de error si la api está saturada
  if (apiDataError) {
    return <Error />;
  }

  // Invocamos el template de loading si la api no se ha cargado todavía
  if (apiDataLoading) {
    return <Loader />;
  }

  // Creamos la función para obtener la fecha, nos ayudamos de la biblioteca moment
  function date(timestamp) {
    return moment.unix(timestamp).format('DD/MM/YY');
  }

  // Creamos la función para obtener la hora, nos ayudamos de la biblioteca moment
  function hour(timestamp) {
    return moment.unix(timestamp).format('HH:mm');
  }

  // Añadimos el switch con los diferentes resultados posibles
  switch (weather) {
    case 'current':
      // Aplicamos el background al fondo
      BackgroundChanger(apiData?.current?.weather?.[0]?.icon);
      // Escribimos la siguiente condición para evitar fallos
      return (
        <Weather
          city={'city'}
          icon={weatherIcons?.[apiData?.current?.weather?.[0]?.icon].icon}
          iconAlt={weatherIcons?.[apiData?.current?.weather?.[0]?.icon].name}
          timestamp={date(apiData?.current.dt)}
          temp={Math.round(apiData?.current?.temp ?? 0)}
          feeling={Math.round(apiData?.current?.feels_like ?? 0)}
          min={Math.round(apiData?.daily?.[0]?.temp.min ?? 0)}
          max={Math.round(apiData?.daily?.[0]?.temp.max ?? 0)}
          wind={Math.round(apiData?.current?.wind_speed ?? 0)}
          humidity={Math.round(apiData?.current?.humidity ?? 0)}
          polution={pollutionData?.list?.[0]?.main?.aqi}
          raining={`${Math.round((apiData?.hourly?.[0]?.pop ?? 0) * 100)}%`}
          uv={Math.round(apiData?.current?.uvi ?? 0)}
          cloudiness={Math.round(apiData?.current?.clouds ?? 0)}
          sunrise={hour(apiData?.daily?.[0]?.sunrise)}
          sunset={hour(apiData?.daily?.[0]?.sunset)}
        />
      );
    // apiData.daily && apiData.daily.length > 0 ? (
    //   <Weather
    //     city={'city'}
    //     icon={weatherIcons?.[apiData?.current?.weather?.[0]?.icon].icon}
    //     iconAlt={weatherIcons?.[apiData?.current?.weather?.[0]?.icon].name}
    //     timestamp={date(apiData?.current.dt)}
    //     temp={Math.round(apiData?.current?.temp ?? 0)}
    //     feeling={Math.round(apiData?.current?.feels_like ?? 0)}
    //     min={Math.round(apiData?.daily?.[0]?.temp.min ?? 0)}
    //     max={Math.round(apiData?.daily?.[0]?.temp.max ?? 0)}
    //     wind={Math.round(apiData?.daily?.[0]?.wind_speed ?? 0)}
    //     humidity={Math.round(apiData?.daily?.[0]?.humidity ?? 0)}
    //     polution={pollutionData?.list?.[0]?.main?.aqi}
    //     raining={`${Math.round((apiData?.daily?.[0]?.pop ?? 0) * 100)}%`}
    //     uv={Math.round(apiData?.daily?.[0]?.uvi ?? 0)}
    //     cloudiness={Math.round(apiData?.daily?.[0]?.clouds ?? 0)}
    //     sunrise={hour(apiData?.daily?.[0]?.sunrise)}
    //     sunset={hour(apiData?.daily?.[0]?.sunset)}
    //   />
    // ) : (
    //   <Loader />
    // );
    // return apiData.daily && apiData.daily.length > 0 ? <Current prop={apiData} /> : <Loader />;
    case 'yesterday':
      // Escribimos la siguiente condición para evitar fallos
      return apiData.data && apiData.data.length > 0 ? (
        <Weather
          // Declaramos none para quitar aquellos elementos que no podemos obtener por la api
          display="none"
          timestamp={date(apiData?.data?.[0]?.dt)}
          temp={apiData?.data?.[0]?.temp}
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
