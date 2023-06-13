import React, { useEffect, useState } from 'react';
import Error from '../components/Error/Error';
import Loader from '../components/Loader/Loader';
import BackgroundChanger from '../components/Background/Background';
import Historical from '../components/Historical/Historical';
import Current from '../components/Current/Current';
import Forecast from '../components/Forecast/Forecast';
// import { date } from '../components/TimeFunctions/TimeFunctions';
// import weatherIcons from '../data/weatherIcons';

function Api({ weather }) {
  // Creamos los state para la posición y seteamos por defecto la posición de Madrid por si el susuario tiene prohibido acceder a la app
  const [latitude, setLatitude] = useState('40.500');
  const [longitude, setLongitude] = useState('-3.667');
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

  // Almacenamos la URL para obtener el nombre de una ciudad a partir de las coordenadas
  const reverseCityUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${ApiKey}`;

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

  // console.log(<ApiCalling api={weatherURL} />);

  // Realiza la llamada a la API correspondiente y almacena los datos
  async function fetchWeatherData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error(error);
      setApiDataError(true);
    } finally {
      setApiDataLoading(false);
    }
  }

  // ...

  // Llama a la función para obtener los datos de la API según el caso del switch
  useEffect(() => {
    setApiDataLoading(true);

    switch (weather) {
      case 'yesterday':
        fetchWeatherData(historicalURL);
        break;
      case 'current':
        fetchWeatherData(weatherURL);
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

  // Creamos este state para almacenar la info de contaminación
  const [reverseCity, setReverseCity] = useState({});

  // Llamamos a la api de contaminación
  useEffect(() => {
    // Llamamos a la función Api
    ApiFetch(reverseCityUrl)
      // Obtenemos la info de la api
      .then((data) => setReverseCity(data));
    // Esta info es importante que se actualice cada vez que se cambia la localización
  }, [latitude, longitude]);

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
    // return apiData.daily && apiData.daily.length > 0 ? <Current prop={apiData} /> : <Loader />;
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
