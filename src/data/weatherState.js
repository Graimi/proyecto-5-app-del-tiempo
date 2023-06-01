const weatherState = {
  icon: '',
  background: ''
};

export default weatherState;

const historical = {
  lat: 39.4776,
  lon: -6.3798,
  timezone: 'Europe/Madrid',
  timezone_offset: 7200,
  data: [
    {
      clouds: 80,
      dew_point: 7.93,
      dt: 1685543931,
      feels_like: 22.81,
      humidity: 37,
      pressure: 1014,
      sunrise: 1685509269,
      sunset: 1685562330,
      temp: 23.44,
      uvi: 3.92,
      visibility: 10000,
      wind_deg: 277,
      wind_gust: 2.32,
      wind_speed: 1.77
    }
  ]
};

const current = {
  lat: 39.4776,
  lon: -6.3798,
  timezone: 'Europe/Madrid',
  timezone_offset: 7200,
  current: {
    clouds: 88,
    dew_point: 9.9,
    dt: 1685633925,
    feels_like: 21.14,
    humidity: 47,
    pressure: 1009,
    sunrise: 1685595643,
    sunset: 1685648773,
    temp: 21.69,
    uvi: 0.52,
    visibility: 10000,
    weather: [
      {
        description: 'nubes',
        icon: '04d',
        id: 804,
        main: 'Clouds'
      }
    ],
    wind_deg: 222,
    wind_gust: 10.36,
    wind_speed: 8.28
  },
  daily: [
    {
      clouds: 18,
      dew_point: 6.78,
      dt: 1685620800,
      feels_like: {
        day: 24.44,
        night: 17.67,
        eve: 20.61,
        morn: 14.56
      },
      humidity: 31,
      moon_phase: 0.4,
      moonrise: 1685639160,
      moonset: 1685588760,
      pop: 0.09,
      pressure: 1011,
      summary: 'Expect a day of partly cloudy with clear spells',
      sunrise: 1685595643,
      sunset: 1685648773,
      temp: {
        day: 25.07,
        eve: 21.18,
        max: 25.1,
        min: 13.7,
        morn: 14.97,
        night: 18.32
      },
      uvi: 8.39,
      weather: [
        {
          description: 'algo de nubes',
          icon: '02d',
          id: 801,
          main: 'Clouds'
        }
      ],
      wind_deg: 222,
      wind_gust: 10.36,
      wind_speed: 8.28
    }
  ]
};

console.log(current.current.weather[0].description);

console.log(historical.data[0].temp);

console.log(historical['data'][0]['dt']);
