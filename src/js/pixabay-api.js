import axios from 'axios';
import iziToast from 'izitoast';


export function getImagesByQuery(query) {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = '55967578-63fe6e26d403e30fe0ce454ba';

    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    })
       
    }

