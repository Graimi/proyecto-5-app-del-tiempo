// import { useState } from 'react';
//   const [backgroundUrl, setBackgroundUrl] = useState(
//     'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685521497/App%20Tiempo/cloudy_l0lf5j.jpg'
//   );

function Background() {
  const backgroundUrl = 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685696630/App%20Tiempo/background/clear_sky_-_copia_wajbhx.jpg';
  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${backgroundUrl})`;
}

export default Background;
