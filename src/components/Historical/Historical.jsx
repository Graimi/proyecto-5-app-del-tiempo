import React from 'react';
import Weather from '../Weather/Weather';
import weatherIcons from '../../data/weatherIcons';
import { date, hour } from '../TimeFunctions/TimeFunctions';

function Historical(apiData) {
  return (
    <Weather
      // Declaramos none para quitar aquellos elementos que no podemos obtener por la api
      display="none"
      city={'city'}
      icon={weatherIcons?.[apiData?.data?.[0]?.weather?.[0]?.icon].icon}
      iconAlt={weatherIcons?.[apiData?.data?.[0]?.weather?.[0]?.icon].name}
      timestamp={date(apiData?.data?.[0]?.dt)}
      temp={Math.round(apiData?.data?.[0]?.temp)}
      feeling={Math.round(apiData?.data?.[0]?.feels_like ?? 0)}
      wind={Math.round(apiData?.data?.[0]?.wind_speed ?? 0)}
      humidity={Math.round(apiData?.data?.[0]?.humidity ?? 0)}
      uv={Math.round(apiData?.data?.[0]?.uvi ?? 0)}
      cloudiness={Math.round(apiData?.data?.[0]?.clouds ?? 0)}
      sunrise={hour(apiData?.data?.[0]?.sunrise)}
      sunset={hour(apiData?.data?.[0]?.sunset)}
    />
  );
}

export default Historical;
