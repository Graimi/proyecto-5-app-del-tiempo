const weatherIcons = {
  '01d': {
    name: 'clear sky',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685790068/App%20Tiempo/icons/icons8-summer-64_3_g9apnb.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685696630/App%20Tiempo/background/clear_sky_-_copia_wajbhx.jpg'
  },
  '02d': {
    name: 'few clouds',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791438/App%20Tiempo/icons/icons8-partly-cloudy-day-64_ipuhao.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685695862/App%20Tiempo/background/few_clouds_brhk5h.jpg'
  },
  '03d': {
    name: 'scattered clouds',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791438/App%20Tiempo/icons/icons8-cloud-64_4_bblvuk.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685696219/App%20Tiempo/background/scattered_clouds_ohr2up.jpg'
  },
  '04d': {
    name: 'broken clouds',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791438/App%20Tiempo/icons/icons8-clouds-64_p7mn5s.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685696220/App%20Tiempo/background/broken_clouds_u6anhf.jpg'
  },
  '09d': {
    name: 'shower rain',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791578/App%20Tiempo/icons/icons8-rain-64_j1zz9x.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685690945/App%20Tiempo/background/rain_zfzzdi.jpg'
  },
  '10d': {
    name: 'rain',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791578/App%20Tiempo/icons/icons8-rainfall-64_r27cls.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685690945/App%20Tiempo/background/rain_zfzzdi.jpg'
  },
  '11d': {
    name: 'thunderstorm',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685786623/App%20Tiempo/icons/icons8-cloud-lightning-64_rfsvj1.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685697555/App%20Tiempo/background/thunderstorm_qygnwf.jpg'
  },
  '13d': {
    name: 'snow',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791578/App%20Tiempo/icons/icons8-snow-64_jstehr.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685699862/App%20Tiempo/background/snow_d1qdpb.png'
  },
  '50d': {
    name: 'mist',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791795/App%20Tiempo/icons/icons8-fog-64_u6zjou.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685696543/App%20Tiempo/background/niebla_f7eqbg.jpg'
  },
  '01n': {
    name: 'clear sky',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685790068/App%20Tiempo/icons/icons8-summer-64_3_g9apnb.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685696630/App%20Tiempo/background/clear_sky_-_copia_wajbhx.jpg'
  },
  '02n': {
    name: 'few clouds',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791438/App%20Tiempo/icons/icons8-partly-cloudy-day-64_ipuhao.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685695862/App%20Tiempo/background/few_clouds_brhk5h.jpg'
  },
  '03n': {
    name: 'scattered clouds',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791438/App%20Tiempo/icons/icons8-cloud-64_4_bblvuk.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685696219/App%20Tiempo/background/scattered_clouds_ohr2up.jpg'
  },
  '04n': {
    name: 'broken clouds',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791438/App%20Tiempo/icons/icons8-clouds-64_p7mn5s.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685696220/App%20Tiempo/background/broken_clouds_u6anhf.jpg'
  },
  '09n': {
    name: 'shower rain',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791578/App%20Tiempo/icons/icons8-rain-64_j1zz9x.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685690945/App%20Tiempo/background/rain_zfzzdi.jpg'
  },
  '10n': {
    name: 'rain',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791578/App%20Tiempo/icons/icons8-rainfall-64_r27cls.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685690945/App%20Tiempo/background/rain_zfzzdi.jpg'
  },
  '11n': {
    name: 'thunderstorm',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685786623/App%20Tiempo/icons/icons8-cloud-lightning-64_rfsvj1.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685697555/App%20Tiempo/background/thunderstorm_qygnwf.jpg'
  },
  '13n': {
    name: 'snow',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791578/App%20Tiempo/icons/icons8-snow-64_jstehr.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685699862/App%20Tiempo/background/snow_d1qdpb.png'
  },
  '50n': {
    name: 'mist',
    icon: 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685791795/App%20Tiempo/icons/icons8-fog-64_u6zjou.png',
    background:
      'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685696543/App%20Tiempo/background/niebla_f7eqbg.jpg'
  }
};

export default weatherIcons;
