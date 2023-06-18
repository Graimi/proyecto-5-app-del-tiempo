import weatherIcons from '../../data/weatherIcons';

// Creamos la siguiente función para cambiar el background de la app
function BackgroundChanger(id) {
  const backgroundUrl = weatherIcons[id]?.background;
  const body = document.querySelector('body');
  if (id) {
    body.style.backgroundImage = `url(${backgroundUrl})`;
  } else {
    body.style.backgroundImage =
      'url(https://res.cloudinary.com/dwsffp1eq/image/upload/v1685696219/App%20Tiempo/background/scattered_clouds_ohr2up.jpg)';
  }
}

export default BackgroundChanger;
