import { galleryItems } from './gallery-items.js';
// Change code below this line
let galleryEl = document.querySelector('.gallery')

function addGalleryItem(item) {
    const listEl = 
    `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;

    galleryEl.insertAdjacentHTML('beforeend', listEl)
}

galleryItems.forEach((item) => {
    addGalleryItem(item)
})

const options = {captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250};
const lightbox = new SimpleLightbox('.gallery a', options);
