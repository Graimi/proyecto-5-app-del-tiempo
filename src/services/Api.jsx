// import { date } from '../components/TimeFunctions/TimeFunctions';
// import weatherIcons from '../data/weatherIcons';

// // Creamos el template para llamar a las apis
// useEffect(() => {
//   setApiDataLoading(true);
//   // Llamamos a la función Api
//   ApiFetch(weather === ('current' || 'forecast') ? weatherURL : historicalURL)
//     // Obtenemos la info de la api
//     .then((data) => setApiData(data))
//     // Si aparece un error damos valor positivo al state
//     .catch(() => setApiDataError(true))
//     // Una vez se ha solventado bien la solicitud de la api se quita la ventana de loading
//     .finally(() => setApiDataLoading(false));
//   // Esta info es importante que se actualice cada vez que se cambia la localización
// }, [latitude, longitude]);

// // Creamos el template para llamar a las APIs
// function ApiCalling({ api }) {
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(api);
//         const data = await response.json();
//         console.log(data);
//         // Realiza las acciones necesarias con los datos obtenidos de la API
//       } catch (error) {
//         console.error(error);
//         // Maneja el error de la llamada a la API
//       }
//     }

//     fetchData();
//     // Esta info es importante que se actualice cada vez que se cambia la localización
//   }, [api]);

//   return null;
// }

// // Llamamos a la api de contaminación
// useEffect(() => {
//   // Llamamos a la función Api
//   ApiFetch(pollutionURL)
//     // Obtenemos la info de la api
//     .then((data) => setPollutionData(data));
//   // Esta info es importante que se actualice cada vez que se cambia la localización
// }, [latitude, longitude]);

// // Llamamos a la api de contaminación
// useEffect(() => {
//   // Llamamos a la función Api
//   ApiFetch(reverseCityUrl)
//     // Obtenemos la info de la api
//     .then((data) => setReverseCity(data));
//   // Esta info es importante que se actualice cada vez que se cambia la localización
// }, [latitude, longitude]);

// useEffect(() => {
//   const cityTag = document.querySelector('#wt-search-city');
//   const texto = cityTag?.value;
//   console.log(`texto ${texto}`);
// }, []);

import React, { useContext, useEffect, useState } from 'react';
import Error from '../components/Error/Error';
import Loader from '../components/Loader/Loader';
import BackgroundChanger from '../components/Background/Background';
import Historical from '../components/Historical/Historical';
import Current from '../components/Current/Current';
import Forecast from '../components/Forecast/Forecast';
// import SearchCity, { UserContext } from '../components/SearchCity/SearchCity';

function Api({ weather }) {
  // Creamos los state para la posición y seteamos por defecto la posición de Madrid por si el susuario tiene prohibido acceder a la app
  const [latitude, setLatitude] = useState('40.500');
  const [longitude, setLongitude] = useState('-3.667');
  const [city, setCity] = useState('');
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
  const pollutionURL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`;
  // Almacenamos la URL para obtener el nombre de una ciudad a partir de las coordenadas
  const reverseCityUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${ApiKey}`;
  // Almacenamos la URL para obtener las coordenadas de una ciudad a partir de su nombre
  const directCityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${ApiKey}`;

  // Seteamos la info de la api apiData
  const [apiData, setApiData] = useState({});
  // Seteamos el error de la api si hay, por defecto ho hay
  const [apiDataError, setApiDataError] = useState(false);
  // Seteamos que hasta que se cargue la info de la api aparezca la ventana de loading
  const [apiDataLoading, setApiDataLoading] = useState(true);
  // Creamos este state para almacenar la info de contaminación
  const [pollutionData, setPollutionData] = useState({});
  // Creamos este state para almacenar la info de contaminación
  const [reverseCity, setReverseCity] = useState({});
  // Creamos este state para almacenar la info de contaminación
  const [directCity, setDirectCity] = useState({});

  // Creamos la función para llamar a las apis de openWeather
  async function fetchWeatherData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      // setApiData(data);
      return url === weatherURL ? setApiData(data) : data;
    } catch (error) {
      console.error(error);
      // setApiDataError(true);
      return url === weatherURL ? setApiDataError(true) : error;
    } finally {
      setApiDataLoading(false);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        // Llamamos a la función Api para obtener la info de contaminación
        const pollutionResponse = await fetchWeatherData(pollutionURL);
        setPollutionData(pollutionResponse);

        // Llamamos a la función Api para obtener el nombre de la ciudad
        const reverseCityResponse = await fetchWeatherData(reverseCityUrl);
        setReverseCity(reverseCityResponse);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [latitude, longitude, weather]);

  const fetchDirectCityData = async () => {
    try {
      const response = await fetch(directCityUrl);
      const data = await response.json();
      setDirectCity(data);

      console.log(data[0].lat);
      console.log(data[0].lon);
      setLatitude(data[0].lat);
      setLongitude(data[0].lon);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDirectCityData();
    // }, []);
  }, [city]);

  function test() {
    console.log(city);
    setCity('EO');
  }

  useEffect(() => {
    setApiDataLoading(true);
    switch (weather) {
      case 'yesterday':
        fetchWeatherData(historicalURL);
        break;
      case 'current':
        fetchWeatherData(weatherURL);
        // Aplicamos el background al fondo
        BackgroundChanger(apiData?.current?.weather?.[0]?.icon);
        break;
      case 'forecast':
        fetchWeatherData(weatherURL);
        break;
      default:
        setApiDataError(true);
        setApiDataLoading(false);
    }
  }, [weather, historicalURL, weatherURL]);

  console.log(apiData);

  // Invocamos el template de error si la api está saturada
  if (apiDataError) {
    return <Error />;
  }

  // Invocamos el template de loading si la api no se ha cargado todavía
  if (apiDataLoading) {
    return <Loader />;
  }

  // Añadimos el switch con los diferentes resultados posibles
  switch (weather) {
    case 'yesterday':
      // Llamamos a la plantilla de datos históricos con la siguiente condición para evitar fallos
      return apiData.data && apiData.data.length > 0 ? Historical(apiData) : <Loader />;

    case 'current':
      // Aplicamos el background al fondo
      BackgroundChanger(apiData?.current?.weather?.[0]?.icon);
      // Llamamos a la plantilla de datos actuales con la siguiente condición para evitar fallos
      return apiData.daily && apiData.daily.length > 0 && reverseCity ? (
        Current(apiData, pollutionData, reverseCity)
      ) : (
        <Loader />
      );

    case 'forecast':
      // Al usar la misma api que current usamos la misma comprobación
      return apiData.daily && apiData.daily.length > 0 && reverseCity ? (
        <Forecast
          city={reverseCity?.[0]?.local_names?.es}
          country={reverseCity?.[0]?.country}
          api={apiData.daily} // Pasamos todos los datos de la API como prop para usarlos dentro de Forecast si es necesario
        />
      ) : (
        <Loader />
      );

    default:
      return <Error />;
  }
}

export default Api;
