import { galleryItems } from './gallery-items.js';

// Change code below this line
let galleryEl = document.querySelector('.gallery')

function addGalleryItem(item) {
    const listEl = 
    `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
                class="gallery__image"
                src="${item.preview}"
                data-source="large-image.jpg"
                alt="${item.description}"
            />
        </a>
    </div>`;

    galleryEl.insertAdjacentHTML('beforeend', listEl)
}

galleryItems.forEach((item) => {
    addGalleryItem(item)
})

let instance;

function onGalleryClick(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }

    event.preventDefault();

    instance =  basicLightbox.create(`
        <img src="${event.target.parentNode.href}" width="1280">
    `)

    instance.show();
}

galleryEl.addEventListener('click', onGalleryClick);

galleryEl.addEventListener('keydown', (event) => {
    if (event.code === "Escape" && instance !== undefined){
        instance.close();
    }
})
