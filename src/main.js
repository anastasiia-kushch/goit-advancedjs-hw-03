import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { spinnerPlay, spinnerStop } from './js/spinner';
import { searchImages } from './js/pixabay-api';
import { createMarkUp } from './js/render-functions';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const input = document.querySelector('.input');

const handleSubmit = event => {
  event.preventDefault();
  spinnerPlay();

  const searchQuery = event.currentTarget.elements.query.value.trim();
  gallery.innerHTML = '';

  if (searchQuery !== '') {
    searchImages(searchQuery)
      .then(data => {
        gallery.innerHTML = createMarkUp(data.hits);
        const lightbox = new SimpleLightbox('.lightbox-link');
        lightbox.refresh();
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        spinnerStop();
        input.value = '';
      });
  } else {
    spinnerStop();
    return iziToast.warning({
      position: 'center',
      message: 'Please enter a search query.',
    });
  }
};

form.addEventListener('submit', handleSubmit);
