import React, { useEffect, useState } from 'react';
import Current from '../components/Current/Current';
import Historical from '../components/Historical/Historical';
import Error from '../components/Error/Error';
import Loader from '../components/Loader/Loader';

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
      // Obtenemos la info de la api del rover curiosity
      .then((data) => setApiData(data))
      // Si aparece un error damos valor positivo al state
      .catch(() => setApiDataError(true))
      // Una vez se ha solventado bien la solicitud de la api se quita la ventana de loading
      .finally(() => setApiDataLoading(false));
    // Esta info es importante que se actualice cada vez que se cambia la fecha
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

  // Añadimos el switch con los diferentes resultados posibles
  switch (weather) {
    case 'current':
      return apiData.daily && apiData.daily.length > 0 ? <Current prop={apiData} /> : <Loader />;
    case 'yesterday':
      return apiData.data && apiData.data.length > 0 ? (
        <Historical apiData={apiData} />
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
