import React, { useEffect, useState } from 'react';
import Error from '../components/Error/Error';
import Loader from '../components/Loader/Loader';
import BackgroundChanger from '../components/Background/Background';
import Current from '../components/Current/Current';
import Forecast from '../components/Forecast/Forecast';

// Creamos la función Api para almacenar todo lo referentes a las apis y para lanzar la información
function Api({ weather, city }) {
  // Creamos los state para la posición y seteamos por defecto la posición de Madrid por si el susuario tiene prohibido
  // acceder a la app
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  // const [latitude, setLatitude] = useState('40.500');
  // const [longitude, setLongitude] = useState('-3.667');

  // Con el siguiente useEffect obtenemos la ubicación del usuario
  useEffect(() => {
    // Verificamos si el navegador es compatible con la geolocalización
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

  // Añadimos todas las url con las que trabajaremos
  // Almacenamos en una constante nuestra API Key
  const ApiKey = 'cb658f072db01ec164fb8a14cc6d9da9';
  // Almacenamos en una constante la URL de Open Weather dedicada al tiempo presente y futuro
  const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=es&appid=${ApiKey}`;
  // Creamos la siguiente variable destinada a almacenar el valor de ayer para historicalURL
  const yestaerdayUnix = Math.floor(Date.now() / 1000) - 24 * 60 * 60;
  // Almacenamos en una constante la URL de Open Weather dedicada al tiempo pasado
  const historicalURL = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${yestaerdayUnix}&units=metric&lang=es&appid=${ApiKey}`;
  // Almacenamos en una constante la URL de Open Weather dedicada a la contaminación
  const pollutionURL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`;
  // Almacenamos la URL para obtener el nombre de una ciudad a partir de las coordenadas
  const reverseCityUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${ApiKey}`;
  // Almacenamos la URL para obtener las coordenadas de una ciudad a partir de su nombre
  // EN CÁCERES TENDRÍA QUE IR CITY
  const directCityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${ApiKey}`;

  // Añadimos todos los useState con los que trabajaremos
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

  // Creamos la función común para llamar a las apis de openWeather
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

  // Este es el useEffect destinado a tomar los valores de la api de pulución y de geocoding inverso
  // para obtener el nombre de la ciudad
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

  // Esta será la función que se encargué de cambiar la ubicación según el valor que le demos a city
  // Pendiente de mejorar
  useEffect(() => {
    async function fetchDirectCityData() {
      try {
        const response = await fetch(directCityUrl);
        const data = await response.json();
        setDirectCity(data);

        console.log(data?.[0]?.lat);
        console.log(data?.[0]?.lon);
        setLatitude(data?.[0]?.lat);
        setLongitude(data?.[0]?.lon);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDirectCityData();
  }, [city]);

  // Creamos el siguiente useEffect con los diferentes valor que se almacenan según lo que seleccionemos
  useEffect(() => {
    setApiDataLoading(true);
    switch (weather) {
      case 'yesterday':
        fetchWeatherData(historicalURL);
        break;
      case 'current':
        fetchWeatherData(weatherURL);
        // Aplicamos el background al fondo
        // BackgroundChanger(apiData?.current?.weather?.[0]?.icon);
        break;
      case 'forecast':
        fetchWeatherData(weatherURL);
        break;
      default:
        setApiDataError(true);
        setApiDataLoading(false);
    }
  }, [weather, historicalURL, weatherURL]);

  // Invocamos el template de error si la api está saturada
  if (apiDataError) {
    return <Error />;
  }

  // Invocamos el template de loading si la api no se ha cargado todavía
  if (apiDataLoading) {
    return <Loader />;
  }

  console.log(apiData);

  // Añadimos el return lanzando un switch con los diferentes resultados posibles
  switch (weather) {
    // Debido a las limitaciones de la api para días anteriores hemos deprecado yesterday
    // case 'yesterday':
    // fetchWeatherData(historicalURL);
    //   // Llamamos a la plantilla de datos históricos con la siguiente condición para evitar fallos
    //   return apiData.data && apiData.data.length > 0 ? Historical(apiData) : <Loader />;

    // En el caso que se refiera al tiempo actual
    case 'current':
      // Aplicamos el background al fondo según el tiempo
      BackgroundChanger(apiData?.current?.weather?.[0]?.icon);
      // Comprobamos que los datos son correctos
      return apiData.daily && apiData.daily.length > 0 && reverseCity ? (
        // Llamamos a la plantilla de tiempo actual
        Current(apiData, pollutionData, reverseCity)
      ) : (
        <Loader />
      );

    // En el caso de previsión
    case 'forecast':
      // Al usar la misma api que current usamos la misma comprobación
      return apiData.daily && apiData.daily.length > 0 && reverseCity ? (
        // Llamamos a la plantilla de previsión
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
