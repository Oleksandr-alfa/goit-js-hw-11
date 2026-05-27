import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = null;
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
export function createGallery(images) {
    
    if (!images || images.length === 0) {
         gallery.innerHTML = '';
        return null;
    } 
        const markup = images.map(({
            largeImageURL, tags, previewURL, webformatURL, likes, views, comments, downloads
        }) => {
            return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img class="gallery-img"
        src="${previewURL}"
        data-source="${largeImageURL}"
        alt="${tags}"
        width="360"/></a>
        <div class="gallery-img-info-box">
        <p class="gallery-img-info-text"><b>Likes</b><span>${likes}</span></p>
        <p class="gallery-img-info-text"><b>Views</b><span>${views}</span></p>
        <p class="gallery-img-info-text"><b>Comments</b><span>${comments}</span></p>
        <p class="gallery-img-info-text"><b>Downloads</b><span>${downloads}</span></p>
      </div></li> `;
        })
            .join('');
        gallery.innerHTML = markup;
        if (lightbox) {
            lightbox.refresh();
        } else {
            lightbox = new SimpleLightbox('.gallery-link', {
                captions: true,
                captionsData: 'alt',
                captionDelay: 250,
            });
        }
        return lightbox;
}
  
export function showLoader() {
    loader.classList.remove('visible');
}

export function hideLoader() {
    loader.classList.add('visible');
}

