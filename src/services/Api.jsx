import React, { useEffect, useState } from 'react';
import Error, { BadCity } from '../components/Error/Error';
import Loader from '../components/Loader/Loader';
import BackgroundChanger from '../components/Background/Background';
import Current from '../components/Current/Current';
import Forecast from '../components/Forecast/Forecast';
import InvisibleCard from '../components/InvisibleCard/InvisibleCard';

// Creamos la función Api para almacenar todo lo referentes a las apis y para lanzar la información

function Api(props) {
  // Declaramos los props con los que se nutrirá la api
  const { weather, lat, lon } = props;

  // Creamos los states de las coordenadas y establecemos la ubicación de Madrid por defecto
  const [latitude, setLatitude] = useState('40.4167047');
  const [longitude, setLongitude] = useState('-3.7035825');

  // Con el siguiente useEffect obtenemos la ubicación del usuario
  useEffect(() => {
    // Verificamos si el navegador es compatible con la geolocalización
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log('Geo: ', position.coords.latitude);
        },
        (error) => {
          console.error(error.message);
        }
      );
    } else {
      console.error('Geolocalización no soportada');
    }
  }, []);

  // Creamos el siguiente useEffect para actualizar los valores de lat y lon obtenidos por props cuando estos cambien
  useEffect(() => {
    setLatitude(lat);
    setLongitude(lon);
    console.log('Choosen: ', lat);
  }, [lat, lon]);

  // Añadimos todas las url con las que trabajaremos
  // Almacenamos en una constante nuestra API Key
  const ApiKey = 'cb658f072db01ec164fb8a14cc6d9da9';
  // Almacenamos en una constante la URL de Open Weather dedicada al tiempo presente y futuro
  const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=es&appid=${ApiKey}`;
  // Almacenamos en una constante la URL de Open Weather dedicada a la contaminación
  const pollutionURL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`;
  // Almacenamos la URL para obtener las coordenadas de una ciudad a partir de su nombre
  const reverseCityUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${ApiKey}`;

  // Añadimos todos los useState con los que trabajaremos
  // Seteamos la info de la api apiData
  const [apiData, setApiData] = useState({});
  // Seteamos el error de la api si hay, por defecto ho hay
  const [apiDataError, setApiDataError] = useState(false);
  // Seteamos que hasta que se cargue la info de la api aparezca la ventana de loading
  const [apiDataLoading, setApiDataLoading] = useState(true);
  // Creamos este state para almacenar la info de contaminación
  const [pollutionData, setPollutionData] = useState({});
  // Creamos este state para almacenar la info de latitud y longitud y aplicarla a esta api
  const [reverseCity, setReverseCity] = useState({});

  // Creamos la función común para llamar a las apis de openWeather
  async function fetchWeatherData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return url === weatherURL ? setApiData(data) : data;
    } catch (error) {
      console.error(error);
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
        const pollutionResponse = await fetchWeatherData(pollutionURL);
        setPollutionData(pollutionResponse);
        // Prevenimos una carga errónea de la URL
        if (lat && lon) {
          const reverseCityResponse = await fetchWeatherData(reverseCityUrl);
          setReverseCity(reverseCityResponse);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [latitude, longitude]);

  // Creamos el siguiente useEffect con los diferentes valores que se almacenan según lo que seleccionemos
  useEffect(() => {
    setApiDataLoading(true);
    switch (weather) {
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
  }, [weather, weatherURL]);

  // Invocamos el template de error si la api está saturada
  if (apiDataError) {
    return <InvisibleCard prop={<Error />} />;
  }

  // Invocamos el template de loading si la api no se ha cargado todavía
  if (apiDataLoading) {
    return <InvisibleCard prop={<Loader />} />;
  }

  // Prevenimos que los siguientes datos existan y creamos el switch
  if (reverseCity?.[0] && pollutionData?.list) {
    switch (weather) {
      // En caso de ejemplo actual
      case 'current':
        BackgroundChanger(apiData?.current?.weather?.[0]?.icon ?? {});
        console.log('current', apiData);
        // Comprobamos que los datos son correctos
        return apiData.daily && apiData.daily.length > 0 && reverseCity ? (
          // Llamamos a la plantilla de tiempo actual
          Current(apiData, pollutionData, reverseCity)
        ) : (
          // Mientras no esté cargado lanzamos el loader
          <Loader />
        );
      // En caso de previsión
      case 'forecast':
        // Al usar la misma api que current usamos la misma comprobación
        return apiData.daily && apiData.daily.length > 0 && reverseCity ? (
          // Llamamos a la plantilla de previsión
          <Forecast
            city={
              reverseCity?.[0]?.local_names?.es ??
              reverseCity?.[0]?.local_names?.en ??
              reverseCity?.[0]?.name
            }
            country={reverseCity?.[0]?.country ?? {}}
            api={apiData.daily ?? {}}
          />
        ) : (
          // Mientras no esté cargado lanzamos el loader
          <Loader />
        );
      default:
        return <Error />;
    }
  }
}

export default Api;
