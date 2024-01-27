import { galleryItems } from "./gallery-items.js";

// Change code below this line
const gallery = document.querySelector(".gallery");

const createGalleryMarkup = (items) =>
  items.map((item) => `
      <div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
              <img 
                  class="gallery__image" 
                  src="${item.preview}" 
                  data-source="${item.original}"
                  alt="${item.description}"/>
          </a>
      </div>`
  ).join("");

const addGalleryMarkup = createGalleryMarkup(galleryItems);

gallery.innerHTML = addGalleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

// gallery.addEventListener('click', (event) => {
//     event.preventDefault();
  


//     lightbox.show();
  
//     window.addEventListener('keyup', closeLightboxOnEscape);
//   });

// console.log(galleryItems);
//Z