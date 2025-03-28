import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImage, resetPage, addPage } from './js/pixabay-api';
import { addLoadStroke, clearGallery, updateGallery } from './js/render-functions';
import errorIcon from './img/icon.svg';

const box = document.querySelector('.gallery');
const load = document.querySelector('.loader');
const addMoreButton = document.querySelector('.to-add');
const form = document.querySelector('.form');
const input = document.querySelector('.user-input');

const iziOption = {
  messageColor: '#FAFAFB',
  messageSize: '16px',
  backgroundColor: '#EF4040',
  iconUrl: errorIcon,
  transitionIn: 'bounceInLeft',
  position: 'topRight',
  displayMode: 'replace',
  closeOnClick: true,
};

form.addEventListener('submit', async event => {
  event.preventDefault();
  let inputValue = input.value.trim();
  if (!inputValue) {
    iziToast.show({ ...iziOption, message: 'Please enter a search query.' });
    return;
  }
  
  clearGallery();
  resetPage();
  addLoadStroke(load);
  
  try {
    const data = await getImage(inputValue, 1);
    updateGallery(data);
    input.value = '';
  } catch (error) {
    iziToast.show({ ...iziOption, message: 'Error fetching images. Try again.' });
  }
});

addMoreButton.addEventListener('click', async () => {
  let inputValue = input.value.trim();
  addPage();
  addLoadStroke(load);
  addMoreButton.disabled = true;
  
  try {
    const data = await getImage(inputValue, addPage);
    updateGallery(data);
  } catch (error) {
    iziToast.show({ ...iziOption, message: 'Failed to load more images.' });
  }

  addMoreButton.disabled = false;
});