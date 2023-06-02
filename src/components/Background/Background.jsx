// import { useState } from 'react';
//   const [backgroundUrl, setBackgroundUrl] = useState(
//     'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685521497/App%20Tiempo/cloudy_l0lf5j.jpg'
//   );ç

function Background() {
  const backgroundUrl =
    'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685690945/App%20Tiempo/background/rain_zfzzdi.jpg';
  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${backgroundUrl})`;
}

export default Background;
