import React, { useEffect, useState } from 'react';
import Error, { BadCity } from '../components/Error/Error';
import Loader from '../components/Loader/Loader';
import BackgroundChanger from '../components/Background/Background';
import Current from '../components/Current/Current';
import Forecast from '../components/Forecast/Forecast';
import InvisibleCard from '../components/InvisibleCard/InvisibleCard';

// Creamos la función Api para almacenar todo lo referentes a las apis y para lanzar la información
function Api(props) {
  const { weather, lat, lon } = props;
  // city

  // Creamos los state para la posición y seteamos por defecto la posición de Madrid por si el susuario tiene prohibido
  // acceder a la app
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

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

  useEffect(() => {
    setLatitude(lat);
    setLongitude(lon);
  }, [lat, lon]);

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
  // const directCityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${ApiKey}`;

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
  // Creamos este state para almacenar la info de la ciudad y aplicarla a esta api
  // const [directCity, setDirectCity] = useState({});

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
        // setLastUpdate(reverseCityResponse);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [lat]);

  // Esta será la función que se encargué de cambiar la ubicación según el valor que le demos a city
  // Pendiente de mejorar
  // useEffect(() => {
  //   async function fetchDirectCityData() {
  //     try {
  //       const response = await fetch(directCityUrl);
  //       const data = await response.json();
  //       // const cityOptions = data.map((cityData) => cityData);
  //       setDirectCity(data);
  //       // setLastUpdate(data);
  //       if (data.length > 0) {
  //         console.log('fetch', data);
  //         setLatitude(data?.[0]?.lat ?? {});
  //         // setLatitude(data?.[0]?.lat ? data?.[0]?.lat : '');
  //         setLongitude(data?.[0]?.lon ?? {});
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchDirectCityData();
  //   console.log('Api:', city);
  // }, [city]);

  //   useEffect(() => {
  //   console.log(lat);
  //   setLatitude(lat);
  //   setLongitude(lon);
  // }, [lat]);

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
    return <InvisibleCard prop={<Error />} />;
  }

  // Invocamos el template de loading si la api no se ha cargado todavía
  if (apiDataLoading) {
    // return <Loader />;
    return <InvisibleCard prop={<Loader />} />;
  }

  // Variable para almacenar el último valor actualizado
  // let lastUpdatedCity = reverseCity;
  console.log('reverseCity', apiData);

  switch (weather) {
    // Debido a las limitaciones de la api para días anteriores he deprecado yesterday
    // case 'yesterday':
    // fetchWeatherData(historicalURL);
    //   // Llamamos a la plantilla de datos históricos con la siguiente condición para evitar fallos
    //   return apiData.data && apiData.data.length > 0 ? Historical(apiData) : <Loader />;

    // En el caso que se refiera al tiempo actual
    case 'current':
      // if (directCity) {
      //   lastUpdatedCity = directCity;
      // }
      // Aplicamos el background al fondo según el tiempo
      BackgroundChanger(apiData?.current?.weather?.[0]?.icon ?? {});
      console.log('current', apiData);
      // Comprobamos que los datos son correctos
      return apiData.daily && apiData.daily.length > 0 && reverseCity ? (
        // Llamamos a la plantilla de tiempo actual
        Current(apiData, pollutionData, reverseCity)
      ) : (
        <Loader />
      );

    // En el caso de previsión
    case 'forecast':
      // if (directCity) {
      //   lastUpdatedCity = directCity;
      // }
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
        <Loader />
      );

    default:
      return <Error />;
  }

  // console.log(apiData);

  // Añadimos el return lanzando un switch con los diferentes resultados posibles
  // function returnCity(cityApi) {
  //   // Con la siguiente condición prevenimos que ocurra un error al buscar la ciudad
  //   if (!cityApi?.[0]?.name) {
  //     return <InvisibleCard prop={<BadCity />} />;
  //   }

  //   switch (weather) {
  //     // Debido a las limitaciones de la api para días anteriores he deprecado yesterday
  //     // case 'yesterday':
  //     // fetchWeatherData(historicalURL);
  //     //   // Llamamos a la plantilla de datos históricos con la siguiente condición para evitar fallos
  //     //   return apiData.data && apiData.data.length > 0 ? Historical(apiData) : <Loader />;

  //     // En el caso que se refiera al tiempo actual
  //     case 'current':
  //       // Aplicamos el background al fondo según el tiempo
  //       BackgroundChanger(apiData?.current?.weather?.[0]?.icon ?? {});
  //       console.log('current', apiData);
  //       // Comprobamos que los datos son correctos
  //       return apiData.daily && apiData.daily.length > 0 && cityApi ? (
  //         // Llamamos a la plantilla de tiempo actual
  //         Current(apiData, pollutionData, cityApi)
  //       ) : (
  //         <Loader />
  //       );

  //     // En el caso de previsión
  //     case 'forecast':
  //       // Al usar la misma api que current usamos la misma comprobación
  //       return apiData.daily && apiData.daily.length > 0 && cityApi ? (
  //         // Llamamos a la plantilla de previsión
  //         <Forecast
  //           city={
  //             cityApi?.[0]?.local_names?.es ?? cityApi?.[0]?.local_names?.en ?? cityApi?.[0]?.name
  //           }
  //           country={cityApi?.[0]?.country ?? {}}
  //           api={apiData.daily ?? {}}
  //         />
  //       ) : (
  //         <Loader />
  //       );

  //     default:
  //       return <Error />;
  //   }
  // }
  // returnCity(reverseCity);
}

export default Api;
