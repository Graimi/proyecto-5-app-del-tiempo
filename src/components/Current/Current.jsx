import React from 'react';
import Weather from '../Weather/Weather';
import weatherIcons from '../../data/weatherIcons';
import { date, hour } from '../TimeFunctions/TimeFunctions';

function Current(apiData, pollutionData, reverseCity) {
  return (
    <Weather
      city={reverseCity?.[0]?.local_names?.es}
      country={reverseCity?.[0]?.country}
      icon={weatherIcons?.[apiData?.current?.weather?.[0]?.icon].icon}
      iconAlt={weatherIcons?.[apiData?.current?.weather?.[0]?.icon].name}
      timestamp={date(apiData?.current?.dt)}
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
      windDay={Math.round(apiData?.daily?.[0]?.wind_speed ?? 0)}
      rainingDay={`${Math.round((apiData?.daily?.[0]?.pop ?? 0) * 100)}%`}
      uvDay={Math.round(apiData?.daily?.[0]?.uvi ?? 0)}
      cloudinessDay={Math.round(apiData?.daily?.[0]?.clouds ?? 0)}
      sunrise={hour(apiData?.daily?.[0]?.sunrise)}
      sunset={hour(apiData?.daily?.[0]?.sunset)}
    />
  );
}

export default Current;
