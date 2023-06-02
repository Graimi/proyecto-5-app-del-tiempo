// import { useState } from 'react';
//   const [backgroundUrl, setBackgroundUrl] = useState(
//     'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685521497/App%20Tiempo/cloudy_l0lf5j.jpg'
//   );

function Background() {
  const backgroundUrl = 'https://res.cloudinary.com/dwsffp1eq/image/upload/v1685695862/App%20Tiempo/background/few_clouds_brhk5h.jpg';
  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${backgroundUrl})`;
}

export default Background;
