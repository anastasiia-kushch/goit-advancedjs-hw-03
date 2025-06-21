import { Spinner } from 'spin.js';
const spinnerContainer = document.querySelector('.js-backdrop');

const opts = {
  lines: 8,
  length: 33,
  width: 4,
  radius: 26,
  scale: 0.6,
  corners: 0.5,
  speed: 1.6,
  rotate: 0,
  animation: 'spinner-line-fade-quick',
  direction: 1,
  color: '#ffffff',
  fadeColor: 'transparent',
  top: '49%',
  left: '50%',
  shadow: '0 0 1px transparent',
  zIndex: 2000000000,
  className: 'spinner',
  position: 'absolute',
};

const spinner = new Spinner(opts);

export const spinnerPlay = () => {
  spinnerContainer.classList.remove('is-hidden');
  spinner.spin(spinnerContainer);
};

export const spinnerStop = () => {
  spinnerContainer.classList.add('is-hidden');
  spinner.stop();
};
