import weatherIcons from '../../data/weatherIcons';

function BackgroundChanger(id) {
  const backgroundUrl = weatherIcons[id]?.background;
  const body = document.querySelector('body');
  body.style.backgroundImage = `url(${backgroundUrl})`;
}

export default BackgroundChanger;
