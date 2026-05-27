
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import { showLoader, hideLoader, createGallery, clearGallery } from './js/render-functions.js';


const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();

  if (!query) return;
  
  clearGallery();
  showLoader();

  getImagesByQuery(query)
     .then(hits => {
            if (hits.length === 0) {
                throw new Error(`NO_RESULTS`);
            }
       createGallery(hits);
        })
        .catch(error => {
            if (error.message === `NO_RESULTS`) {
                iziToast.info({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                return [];
            }else{
            iziToast.error({
                title: 'Error',
                message: error.message,
                position: 'topRight',
            });
            return [];
        }
        })
   
    
  .finally(() => {
      hideLoader();
      form.reset();
    });
});