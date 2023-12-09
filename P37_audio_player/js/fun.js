//reproducir sonido y cambiar icono:
const icono = document.querySelector('.icon__play');
const audio = document.getElementById('miAudio');

icono.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    icono.querySelector('img').src = 'img/play pulsado.svg';
  } else {
    audio.pause();
    audio.currentTime = 0;
    icono.querySelector('img').src = 'img/play.svg';
  }
});




